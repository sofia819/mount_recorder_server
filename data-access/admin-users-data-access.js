const pool = require("./db");

const createAdminUser = (username, hashedPassword) =>
  pool.query(
    "INSERT INTO admin_users (username, hashed_password) VALUES ($1, $2)",
    [username, hashedPassword]
  );

const getAdminUserByName = (username) =>
  pool.oneOrNone("SELECT * FROM admin_users WHERE username = $1", [username]);

module.exports = {
  createAdminUser,
  getAdminUserByName,
};
