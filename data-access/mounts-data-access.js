const pool = require("./db");

const getAllMounts = async () => await pool.query("SELECT * FROM mounts");

const getMountById = async (id) =>
  await pool.query("SELECT * FROM mounts WHERE mount_id = $1", [id]);

const createMount = async (mountName) =>
  await pool.query("INSERT INTO mounts (mount_name) VALUES ($1) RETURNING *", [
    mountName,
  ]);

const updateMountById = async (mountName, id) =>
  await pool.result("UPDATE mounts SET mount_name = $1 WHERE mount_id = $2", [
    mountName,
    id,
  ]);

const deleteMountById = async (id) => {
  await pool.none("DELETE FROM user_mounts WHERE mount_id = $1", [id]);
  await pool.none("DELETE FROM mounts WHERE mount_id = $1", [id]);
};

module.exports = {
  getAllMounts,
  getMountById,
  createMount,
  updateMountById,
  deleteMountById,
};
