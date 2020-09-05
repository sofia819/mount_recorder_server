const pool = require("./db");

const getAllMounts = () => pool.query("SELECT * FROM mounts");

const getMountById = (id) =>
  pool.query("SELECT * FROM mounts WHERE mount_id = $1", [id]);

const createMount = (mountName) =>
  pool.query("INSERT INTO mounts (mount_name) VALUES ($1) RETURNING *", [
    mountName,
  ]);

const updateMountById = (mountName, id) =>
  pool.result("UPDATE mounts SET mount_name = $1 WHERE mount_id = $2", [
    mountName,
    id,
  ]);

const deleteMountById = (id) => {
  pool
    .none("DELETE FROM user_mounts WHERE mount_id = $1", [id])
    .then(() => pool.none("DELETE FROM mounts WHERE mount_id = $1", [id]));
};

module.exports = {
  getAllMounts,
  getMountById,
  createMount,
  updateMountById,
  deleteMountById,
};
