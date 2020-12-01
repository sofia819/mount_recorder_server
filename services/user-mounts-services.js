const dataAccess = require('../data-access/user-mounts-data-access');

const getAllUserMounts = async () => await dataAccess.getAllUserMounts();

const getUserMountsByUserId = async (req) =>
  await dataAccess.getUserMountsByUserId(req.params.id);

const getUserMountsByMountId = async (req) =>
  await dataAccess.getUserMountsByMountId(req.params.id);

const updateUserMountsById = async (req) =>
  await dataAccess.updateUserMountsById(req.params.id, req.body.mountIds);

module.exports = {
  getAllUserMounts,
  getUserMountsByUserId,
  getUserMountsByMountId,
  updateUserMountsById,
};
