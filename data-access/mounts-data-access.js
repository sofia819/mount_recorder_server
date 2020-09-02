const pool = require("./db");

const getAllMounts = async () => await pool.query("SELECT * FROM mounts");

const getMountById = async (id) =>
  await pool.query("SELECT * FROM mounts WHERE mount_id = $1", [id]);

const createMount = async (mountName) =>
  await pool.query("INSERT INTO mounts (mount_name) VALUES ($1) RETURNING *", [
    mountName,
  ]);

const updateMountById = async (mountName, id) =>
  await pool.query("UPDATE mounts SET mount_name = $1 WHERE mount_id = $2", [
    mountName,
    id,
  ]);

const deleteMountById = async (id) =>
  await pool.query("DELETE FROM mounts WHERE mount_id = $1", [id]);

module.exports = {
  getAllMounts,
  getMountById,
  createMount,
  updateMountById,
  deleteMountById,
};

// //create a mount
// app.post("/mounts", async(req, res) =>
// {
//     try
//     {
//         const { mount_name } = req.body;
//         const newMount = await pool.query(

//         );

//         res.json(newMount.rows[0]);
//     }
//     catch (err)
//     {
//         console.error(err.message);
//     }
// });

// //get all mounts
// app.get("/mounts", async(req, res) =>
// {
//     try
//     {
//         const allMounts = await pool.query();
//         res.json(allMounts.rows);
//     }
//     catch (err)
//     {
//         console.error(err.message);
//     }
// });

// //get a mount SEARCHES by ID
// app.get("/mounts/:id", async(req, res) =>
// {
//     try
//     {
//         const { id } = req.params;
//         const mount = await pool.query();

//         res.json(mount.rows[0]);
//     }
//     catch (err)
//     {
//         console.error(err.message);
//     }
// });

// //update a mount SEARCHES by ID
// app.put("/mounts/:id", async(req, res) =>
// {
//     try
//     {
//         const { id } =  req.params;
//         const { mount_name } = req.body;
//         const updateMount = await pool.query();

//         res.json("Mount was updated!");
//     }
//     catch (err)
//     {
//         console.error(err.message);
//     }
// });

// //delete a mount SEARCHES by ID
// app.delete("/mounts/:id", async(req, res) =>
// {
//     try
//     {
//         const { id } = req.params;
//         const deleteMount = await pool.query();

//         res.json("Mount was D E L E T E D");
//     }
//     catch (err)
//     {
//         console.error(err.message);
//     }
// });
