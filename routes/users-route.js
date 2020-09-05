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
        res.json({ response: false });
      })
  )
  .post((req, res) =>
    usersService
      .createUser(req)
      .then((newUser) => res.json(newUser[0]))
      .catch((err) => {
        console.error(err.message);
        res.json({ response: false });
      })
  );

router
  .route("/:id")
  .get((req, res) =>
    usersService
      .getUserById(req)
      .then((user) => res.json(user[0]))
      .catch((err) => {
        console.error(err.message);
        res.json({ response: false });
      })
  )
  .post((req, res) =>
    usersService
      .deleteUserById(req)
      .then(response => res.json({ response }))
      .catch((err) => {
        console.error(err.message);
        res.json({ response: false });
      })
  )
  .put((req, res) =>
    usersService
      .updateUserById(req)
      .then((users) => res.json(users.rowCount))
      .catch((err) => {
        console.error(err.message);
        res.json({ response: false });
      })
  );

module.exports = router;
