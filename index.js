const express = require("express"); //Express server created
const app = express(); //Express server ran as "app"
const cors = require("cors"); //server requires cors
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a todo

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(5000, () => {
    console.log("server has started on port 5000");
});

