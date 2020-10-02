const pool = require("./db");

const getAllUsers = () => pool.query("SELECT * FROM users");

const getUserById = (id) =>
  pool.query("SELECT * FROM users WHERE user_id = $1", [id]);

const createUser = (username) =>
  pool.query(
    "INSERT INTO users (username) VALUES ($1) ON CONFLICT DO NOTHING RETURNING *",
    [username]
  );

const updateUserById = (username, id) =>
  pool.result(
    "UPDATE users SET username = $1 WHERE user_id = $2 AND NOT EXISTS (SELECT username FROM users WHERE username = $3) RETURNING *",
    [username, id, username]
  );

const deleteUserById = async (id) =>
  pool
    .none("DELETE FROM user_mounts WHERE user_id = $1", [id])
    .then(() => pool.none("DELETE FROM users WHERE user_id = $1", [id]));

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
