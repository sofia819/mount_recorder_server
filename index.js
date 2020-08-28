const dotenv = require("dotenv").config();
const express = require("express"); //Express server created
const app = express(); //Express server ran as "app"
const cors = require("cors"); //server requires cors
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//USERS//

//create a user
app.post("/users", async(req, res) => 
{
    try
    {
        const { username } = req.body;
        const newUser = await pool.query(
            "INSERT INTO users (username) VALUES ($1) RETURNING *",
            [username]
        );

        res.json(newUser.rows[0]);
    }
    catch (err)
    {
        console.error(err.message);
    }
});

//get all users
app.get("/users", async(req, res) => 
{
    try
    {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    }
    catch (err)
    {
        console.error(err.message);
    }
});

//get a user SEARCHES by ID
app.get("/users/:id", async(req, res) =>
{
    try
    {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);

        res.json(user.rows[0]);
    }
    catch (err)
    {
        console.error(err.message);
    }
});

//update a user SEARCHES by ID
app.put("/users/:id", async(req, res) =>
{
    try 
    {
        const { id } =  req.params;
        const { username } = req.body;
        const updateUser = await pool.query("UPDATE users SET username = $1 WHERE user_id = $2", [username, id]);

        res.json("User was updated!");
    } 
    catch (err) 
    {
        console.error(err.message);
    }
});

//delete a U S E R SEARCHES by ID
app.delete("/users/:id", async(req, res) =>
{
    try 
    {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1", [id]);

        res.json("User was D E L E T E D");
    } 
    catch (err) 
    {
        console.error(err.message);
    }
});

//ROUTES//MOUNTS//

//create a mount
app.post("/mounts", async(req, res) => 
{
    try
    {
        const { mount_name } = req.body;
        const newMount = await pool.query(
            "INSERT INTO mounts (mount_name) VALUES ($1) RETURNING *",
            [mount_name]
        );

        res.json(newMount.rows[0]);
    }
    catch (err)
    {
        console.error(err.message);
    }
});

//get all mounts
app.get("/mounts", async(req, res) => 
{
    try
    {
        const allMounts = await pool.query("SELECT * FROM mounts");
        res.json(allMounts.rows);
    }
    catch (err)
    {
        console.error(err.message);
    }
});

//get a mount SEARCHES by ID
app.get("/mounts/:id", async(req, res) =>
{
    try
    {
        const { id } = req.params;
        const mount = await pool.query("SELECT * FROM mounts WHERE mount_id = $1", [id]);

        res.json(mount.rows[0]);
    }
    catch (err)
    {
        console.error(err.message);
    }
});

//update a mount SEARCHES by ID
app.put("/mounts/:id", async(req, res) =>
{
    try 
    {
        const { id } =  req.params;
        const { mount_name } = req.body;
        const updateMount = await pool.query("UPDATE mounts SET mount_name = $1 WHERE mount_id = $2", [mount_name, id]);

        res.json("Mount was updated!");
    } 
    catch (err) 
    {
        console.error(err.message);
    }
});

//delete a mount SEARCHES by ID
app.delete("/mounts/:id", async(req, res) =>
{
    try 
    {
        const { id } = req.params;
        const deleteMount = await pool.query("DELETE FROM mounts WHERE mount_id = $1", [id]);

        res.json("Mount was D E L E T E D");
    } 
    catch (err) 
    {
        console.error(err.message);
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => 
{
    console.log(`Server has started on port ${port}`);
});