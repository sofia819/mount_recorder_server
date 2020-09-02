const express = require("express");
const router = express.Router();
const userMountsServices = require("../services/user-mounts-services");

router.route("").get((req, res) =>
  userMountsServices
    .getAllUserMounts()
    .then((allUsersMounts) => res.json(allUsersMounts))
    .catch((err) => {
      console.error(err.message);
      res.json(false);
    })
);

router
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    userMountsServices
      .getUserMountsById(id)
      .then((userMounts) => res.json(userMounts))
      .catch((err) => {
        console.error(err.message);
        res.json(false);
      });
  })
  .put((req, res) => {
    const { id } = req.params;
    const { mountIds } = req.body;
    userMountsServices
      .updateUserMountsById(id, mountIds)
      .then(() => res.json(true))
      .catch((err) => {
        console.error(err.message);
        res.json(false);
      });
  });

module.exports = router;
