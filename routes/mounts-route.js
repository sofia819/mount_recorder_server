const express = require("express");
const router = express.Router();
const mountsServices = require("../services/mounts-services");

router
  .route("")
  .get((req, res) =>
    mountsServices
      .getAllMounts()
      .then((allMounts) => res.json(allMounts))
      .catch((err) => {
        console.error(err.message);
        res.json(false);
      })
  )
  .post((req, res) => {
    const { mountName } = req.body;
    mountsServices
      .createMount(mountName)
      .then((newMount) => res.json(newMount[0]))
      .catch((err) => {
        console.error(err.message);
        res.json(false);
      });
  });

router
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    mountsServices
      .getMountById(id)
      .then((mount) => res.json(mount[0]))
      .catch((err) => {
        console.error(err.message);
        res.json(false);
      });
  })
  .delete((req, res) => {
    const { id } = req.params;
    mountsServices
      .deleteMountById(id)
      .then(() => res.json(true))
      .catch((err) => {
        console.error(err.message);
        res.json(false);
      });
  })
  .put((req, res) => {
    const { id } = req.params;
    const { mountName } = req.body;
    mountsServices
      .updateMountById(mountName, id)
      .then((mounts) => res.json(mounts.rowCount))
      .catch((err) => {
        console.error(err.message);
        res.json(false);
      });
  });

module.exports = router;
