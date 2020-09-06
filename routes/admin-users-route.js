const express = require("express");
const router = express.Router();
const adminUsersServices = require("../services/admin-users-services");

router.route("").post((req, res) =>
  adminUsersServices
    .createAdminUser(req)
    .then((response) => res.json({ response }))
    .catch((err) => {
      console.error(err.message);
      res.json({ response: false });
    })
);

module.exports = router;
