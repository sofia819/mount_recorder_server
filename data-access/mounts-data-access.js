const pool = require('./db');

const getAllMounts = () =>
  pool.query('SELECT * FROM mounts ORDER BY expansion, mount_name');

const getMountById = (id) =>
  pool.query('SELECT * FROM mounts WHERE mount_id = $1', [id]);

const createMount = (mountName, expansion, imageUrl) =>
  pool.query(
    'INSERT INTO mounts (mount_name, expansion, image_url) VALUES ($1, $2, $3) RETURNING *',
    [mountName, expansion, imageUrl]
  );

const updateMountById = (mountName, expansion, imageUrl, id) =>
  pool.result(
    'UPDATE mounts SET mount_name = $1, expansion = $2, image_url = $3 WHERE mount_id = $4',
    [mountName, expansion, imageUrl, id]
  );

const deleteMountById = (id) => {
  pool
    .none('DELETE FROM user_mounts WHERE mount_id = $1', [id])
    .then(() => pool.none('DELETE FROM mounts WHERE mount_id = $1', [id]));
};

module.exports = {
  getAllMounts,
  getMountById,
  createMount,
  updateMountById,
  deleteMountById,
};
