const express = require("express");
const router = express.Router();
const mountsServices = require("../services/mounts-services");

router
  .route("")
  .get((req, res) =>
    mountsServices
      .getAllMounts()
      .then((allMounts) => res.json(allMounts.rows))
      .catch((err) => console.error(err.message))
  )
  .post((req, res) => {
    const { mountName } = req.body;
    mountsServices
      .createMount(mountName)
      .then((newMount) => res.json(newMount.rows[0]))
      .catch((err) => console.error(err.message));
  });

router
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    mountsServices
      .getMountById(id)
      .then((mount) => res.json(mount.rows[0]))
      .catch((err) => console.error(err.message));
  })
  .delete((req, res) => {
    const { id } = req.params;
    mountsServices
      .deleteMountById(id)
      .then((mounts) => res.json(mounts.rowCount))
      .catch((err) => console.error(err.message));
  })
  .put((req, res) => {
    const { id } = req.params;
    const { mountName } = req.body;
    mountsServices
      .updateMountById(mountName, id)
      .then((mounts) => res.json(mounts.rowCount))
      .catch((err) => console.error(err.message));
  });

module.exports = router;
