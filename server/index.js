require('dotenv/config');
const express = require('express');
const path = require('path');
const pg = require('pg');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const ClientError = require('./client-error');
const authorizationMiddleware = require('./authorization-middleware');
const errorMiddleware = require('./error-middleware');

const app = express();
const jsonMiddleware = express.json();

// ✅ Connect to your Render Postgres DB
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// ✅ Always parse JSON before routes
app.use(jsonMiddleware);

// ✅ Serve built static files FIRST
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Public routes (auth)
app.post('/api/auth/sign-up', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) { throw new ClientError(400, 'username and password are required fields'); }

    const hashedPassword = await argon2.hash(password);
    const sql = `
      insert into "users" ("username", "hashedPassword")
      values ($1, $2)
      returning "userId", "username", "createdAt"
    `;
    const params = [username, hashedPassword];
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.post('/api/auth/sign-in', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) throw new ClientError(401, 'invalid login');

    const sql = `
      select "userId", "hashedPassword"
        from "users"
       where "username" = $1
    `;
    const params = [username];
    const result = await db.query(sql, params);
    const [user] = result.rows;
    if (!user || !(await argon2.verify(user.hashedPassword, password))) {
      throw new ClientError(401, 'invalid login');
    }

    const payload = { userId: user.userId, username };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET);
    res.json({ token, user: payload });
  } catch (err) {
    next(err);
  }
});

// ✅ Protect API routes *after* public ones
app.use('/api', authorizationMiddleware);

app.get('/api/icons/:folderId', async (req, res, next) => {
  try {
    const sql = 'select * from "icons" where "folderId" = $1';
    const result = await db.query(sql, [req.params.folderId]);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/folders', async (req, res, next) => {
  try {
    const result = await db.query('select * from "folders"');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

// ✅ Error middleware
app.use(errorMiddleware);

// ✅ Catch-all: send React index.html (MUST come last)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 10000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${process.env.PORT || 10000}`);
});
