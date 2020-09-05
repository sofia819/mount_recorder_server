const dataAccess = require("../data-access/user-mounts-data-access");

const getAllUserMounts = async () => await dataAccess.getAllUserMounts();

const getUserMountsById = async (req) =>
  await dataAccess.getUserMountsById(req.params.id);

const updateUserMountsById = async (req) =>
  await dataAccess.updateUserMountsById(req.params.id, req.body.mountIds);

module.exports = {
  getAllUserMounts,
  getUserMountsById,
  updateUserMountsById,
};
