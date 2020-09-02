const dataAccess = require("../data-access/mounts-data-access");

const getAllMounts = () => dataAccess.getAllMounts();

const getMountById = (id) => dataAccess.getMountById(id);

const createMount = (mountName) => dataAccess.createMount(mountName);

const updateMountById = (mountName, id) =>
  dataAccess.updateMountById(mountName, id);

const deleteMountById = (id) => dataAccess.deleteMountById(id);

module.exports = {
  getAllMounts,
  getMountById,
  createMount,
  updateMountById,
  deleteMountById,
};
