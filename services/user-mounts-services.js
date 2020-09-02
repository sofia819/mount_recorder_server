const dataAccess = require("../data-access/user-mounts-data-access");

const getAllUserMounts = () => dataAccess.getAllUserMounts();

const getUserMountsById = (id) => dataAccess.getUserMountsById(id);

const updateUserMountsById = (userId, mountIds) =>
  dataAccess.updateUserMountsById(userId, mountIds);

module.exports = {
  getAllUserMounts,
  getUserMountsById,
  updateUserMountsById,
};
 