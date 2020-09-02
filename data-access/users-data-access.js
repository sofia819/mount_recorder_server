const pool = require("./db");

const getAllUsers = async () => await pool.query("SELECT * FROM users");

const getUserById = async (id) =>
  await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);

const createUser = async (username) =>
  await pool.query("INSERT INTO users (username) VALUES ($1) RETURNING *", [
    username,
  ]);

const updateUserById = async (username, id) =>
  await pool.query("UPDATE users SET username = $1 WHERE user_id = $2", [
    username,
    id,
  ]);

const deleteUserById = async (id) =>
  await pool.query("DELETE FROM users WHERE user_id = $1", [id]);

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};