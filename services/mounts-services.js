const dataAccess = require("../data-access/mounts-data-access");

const getAllMounts = async () => await dataAccess.getAllMounts();

const getMountById = async (req) =>
  await dataAccess.getMountById(req.params.id);

const createMount = async (req) =>
  await dataAccess.createMount(req.body.mountName);

const updateMountById = async (req) =>
  await dataAccess.updateMountById(req.body.mountName, req.params.id);

const deleteMountById = async (req) =>
  await dataAccess.deleteMountById(req.params.id);

module.exports = {
  getAllMounts,
  getMountById,
  createMount,
  updateMountById,
  deleteMountById,
};
