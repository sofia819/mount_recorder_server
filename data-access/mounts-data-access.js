const pool = require("./db");

const getAllMounts = () => pool.query("SELECT * FROM mounts");

const getMountById = (id) =>
  pool.query("SELECT * FROM mounts WHERE mount_id = $1", [id]);

const createMount = (mountName, expansion) =>
  pool.query(
    "INSERT INTO mounts (mount_name, expansion) VALUES ($1, $2) RETURNING *",
    [mountName, expansion]
  );

const updateMountById = (mountName, expansion, id) =>
  pool.result(
    "UPDATE mounts SET mount_name = $1, expansion = $2 WHERE mount_id = $3",
    [mountName, expansion, id]
  );

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
