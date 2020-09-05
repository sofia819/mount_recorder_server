const pool = require("./db");
const pgp = require("pg-promise")();

const getAllUserMounts = () =>
  pool.query(
    `
      SELECT u.user_id, u.username, m.mount_id, m.mount_name, u.user_id = um.user_id AS owned
      FROM users u
      CROSS JOIN mounts m
      LEFT JOIN user_mounts um
	    ON u.user_id = um.user_id AND m.mount_id = um.mount_id;
      `
  );

const getUserMountsById = (id) =>
  pool.query(
    `
    SELECT u.user_id, u.username, m.mount_id, m.mount_name, u.user_id = um.user_id AS owned
    FROM users u
    CROSS JOIN mounts m
    LEFT JOIN user_mounts um
    ON u.user_id = um.user_id AND m.mount_id = um.mount_id
    WHERE u.user_id = $1
    `,
    [id]
  );

const updateUserMountsById = (userId, mountIds) => {
  // our set of columns, to be created only once (statically), and then reused,
  // to let it cache up its formatting templates for high performance:
  if (mountIds.length > 0) {
    const cs = new pgp.helpers.ColumnSet(["user_id", "mount_id"], {
      table: "user_mounts",
    });

    // data input values:
    const values = mountIds.map((mountId) => {
      return { user_id: userId, mount_id: mountId };
    });

    // generating a multi-row insert query:
    const query =
      pgp.helpers.insert(values, cs) +
      " ON CONFLICT(user_id, mount_id) DO NOTHING";

    // executing the query:
    pool.none(query);

    pool.none(
      `
      DELETE FROM user_mounts
      WHERE user_id = $1 AND
      mount_id NOT IN ($2:list)
    `,
      [userId, mountIds]
    );
  } else {
    pool.none(
      `
        DELETE FROM user_mounts
        WHERE user_id = $1
      `,
      [userId]
    );
  }
};

module.exports = {
  getAllUserMounts,
  getUserMountsById,
  updateUserMountsById,
};
