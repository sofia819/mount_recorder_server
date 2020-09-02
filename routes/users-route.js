const express = require("express");
const router = express.Router();
const usersService = require("../services/users-services");

router
  .route("")
  .get((req, res) =>
    usersService
      .getAllUsers()
      .then((allUsers) => res.json(allUsers.rows))
      .catch((err) => console.error(err.message))
  )
  .post((req, res) => {
    const { username } = req.body;
    usersService
      .createUser(username)
      .then((newUser) => res.json(newUser.rows[0]))
      .catch((err) => console.error(err.message));
  });

router
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    usersService
      .getUserById(id)
      .then((user) => res.json(user.rows[0]))
      .catch((err) => console.error(err.message));
  })
  .delete((req, res) => {
    const { id } = req.params;
    usersService
      .deleteUserById(id)
      .then((users) => res.json(users.rowCount))
      .catch((err) => console.error(err.message));
  })
  .put((req, res) => {
    const { id } = req.params;
    const { username } = req.body;
    usersService
      .updateUserById(username, id)
      .then((users) => res.json(users.rowCount))
      .catch((err) => console.error(err.message));
  });

module.exports = router;
