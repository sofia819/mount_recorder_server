const dataAccess = require("../data-access/users-data-access");
const adminUsersService = require("../services/admin-users-services");

const getAllUsers = async () => await dataAccess.getAllUsers();

const getUserById = async (req) => await dataAccess.getUserById(req.params.id);

const createUser = async (req) =>
  await dataAccess.createUser(req.body.username);

const updateUserById = async (req) =>
  await dataAccess.updateUserById(req.body.username, req.params.id);

const deleteUserById = async (req) => {
  if (await adminUsersService.loginAdminUser(req)) {
    await dataAccess.deleteUserById(req.params.id);
    return true;
  }
  return false;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
