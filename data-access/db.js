const pgp = require("pg-promise")();

const connectionString = process.env.DATABASE_URL;
const pool = pgp(connectionString);

module.exports = pool;
