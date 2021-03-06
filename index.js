const dotenv = require("dotenv").config();
const express = require("express"); // Express server created
const app = express(); // Express server ran as "app"
const cors = require("cors"); // Server requires cors

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", require("./routes/users-route"));
app.use("/mounts", require("./routes/mounts-route"));
app.use("/user-mounts", require("./routes/user-mounts-route"));

const port = process.env.PORT || 5000;
app.listen(port, () => 
{
    console.log(`Server has started on port ${port}`);
});