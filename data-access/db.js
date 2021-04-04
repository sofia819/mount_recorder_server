const pgp = require('pg-promise')();

const config = {
  connectionString: process.env.DATABASE_URL,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};
const pool = pgp(config);

module.exports = pool;
