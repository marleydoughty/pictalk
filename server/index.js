require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');
const argon2 = require('argon2');
const pg = require('pg');
const app = express();
const jsonMiddleware = express.json();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(jsonMiddleware);
app.use(staticMiddleware);
app.use(errorMiddleware);

app.post('/api/auth/sign-up', (req, res, next) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    throw new ClientError(400, 'username and password are required fields');
  }
  argon2
    .hash(password)
    .then(hashedPassword => {
      const sql = `
        insert into "users" ("email", "username", "hashedPassword")
        values ($1, $2, $3)
        returning "userId", "username", "email", "createdAt"
      `;
      const params = [email, username, hashedPassword];
      return db.query(sql, params);
    })
    .then(result => {
      const [newUser] = result.rows;
      res.status(201).json(newUser);
    })
    .catch(err => next(err));
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
