const express = require("express");
const router = express.Router();
const usersService = require("../services/users-services");

router
  .route("")
  .get((req, res) =>
    usersService
      .getAllUsers()
      .then((allUsers) => res.json(allUsers))
      .catch((err) => {
        console.error(err.message);
        res.json(false);
      })
  )
  .post((req, res) => {
    const { username } = req.body;
    usersService
      .createUser(username)
      .then((newUser) => res.json(newUser[0]))
      .catch((err) => {
        console.error(err.message);
        res.json(false);
      });
  });

router
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    usersService
      .getUserById(id)
      .then((user) => res.json(user[0]))
      .catch((err) => {
        console.error(err.message);
        res.json(false);
      });
  })
  .delete((req, res) => {
    const { id } = req.params;
    usersService
      .deleteUserById(id)
      .then(() => res.json(true))
      .catch((err) => {
        console.error(err.message);
        res.json(false);
      });
  })
  .put((req, res) => {
    const { id } = req.params;
    const { username } = req.body;
    usersService
      .updateUserById(username, id)
      .then((users) => res.json(users.rowCount))
      .catch((err) => {
        console.error(err.message);
        res.json(false);
      });
  });

module.exports = router;
