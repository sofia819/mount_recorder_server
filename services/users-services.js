const dataAccess = require("../data-access/users-data-access");

const getAllUsers = () => dataAccess.getAllUsers();

const getUserById = (id) => dataAccess.getUserById(id);

const createUser = (username) => dataAccess.createUser(username);

const updateUserById = (username, id) =>
  dataAccess.updateUserById(username, id);

const deleteUserById = (id) => dataAccess.deleteUserById(id);

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
