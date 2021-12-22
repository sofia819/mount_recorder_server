const pgp = require('pg-promise')();

let ssl = null;
if (process.env.NODE_ENV === 'development') {
  ssl = { rejectUnauthorized: false };
}

const config = {
  connectionString: process.env.DATABASE_URL,
  ssl: ssl,
};
const pool = pgp(config);

module.exports = pool;
