const pgp = require('pg-promise')();

const config = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
};
const pool = pgp(config);

module.exports = pool;
