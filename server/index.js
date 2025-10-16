require('dotenv/config');
const express = require('express');
const path = require('path');
const authorizationMiddleware = require('./authorization-middleware');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');
const argon2 = require('argon2');
const pg = require('pg');
const jwt = require('jsonwebtoken');
const app = express();
const jsonMiddleware = express.json();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.use(jsonMiddleware);

app.use(staticMiddleware);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/auth/sign-up', async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(400, 'username and password are required fields');
  }
  try {
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
  const { username, password } = req.body;
  if (!username || !password) throw new ClientError(401, 'invalid login');
  try {
    const sql = 'select "userId", "hashedPassword" from "users" where "username" = $1';
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

app.use('/api', authorizationMiddleware);

app.get('/api/icons/:folderId', (req, res, next) => {
  const sql = 'select * from "icons" where "folderId" = $1';
  db.query(sql, [req.params.folderId])
    .then(result => res.json(result.rows))
    .catch(next);
});

app.get('/api/folders', (req, res, next) => {
  db.query('select * from "folders"')
    .then(result => res.json(result.rows))
    .catch(next);
});

app.use(errorMiddleware);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(process.env.PORT || 10000, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening on port ${process.env.PORT || 10000}`);
});
