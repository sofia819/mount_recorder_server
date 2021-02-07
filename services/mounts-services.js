const dataAccess = require('../data-access/mounts-data-access');
const adminUsersService = require('../services/admin-users-services');

const getAllMounts = async () => await dataAccess.getAllMounts();

const getMountById = async (req) =>
  await dataAccess.getMountById(req.params.id);

const createMount = async (req) =>
  await dataAccess.createMount(
    req.body.mountName,
    req.body.expansion,
    req.body.image_url
  );

const updateMountById = async (req) =>
  await dataAccess.updateMountById(
    req.body.mountName,
    req.body.expansion,
    req.body.image_url,
    req.params.id
  );

const deleteMountById = async (req) => {
  if (await adminUsersService.loginAdminUser(req)) {
    await dataAccess.deleteMountById(req.params.id);
    return true;
  }
  return false;
};

module.exports = {
  getAllMounts,
  getMountById,
  createMount,
  updateMountById,
  deleteMountById,
};
