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
        res.json({ response: false });
      })
  )
  .post((req, res) =>
    mountsServices
      .createMount(req)
      .then((newMount) => res.json(newMount[0]))
      .catch((err) => {
        console.error(err.message);
        res.json({ response: false });
      })
  );

router
  .route("/:id")
  .get((req, res) =>
    mountsServices
      .getMountById(req)
      .then((mount) => res.json(mount[0]))
      .catch((err) => {
        console.error(err.message);
        res.json({ response: false });
      })
  )
  .delete((req, res) =>
    mountsServices
      .deleteMountById(req)
      .then(() => res.json(true))
      .catch((err) => {
        console.error(err.message);
        res.json({ response: false });
      })
  )
  .put((req, res) =>
    mountsServices
      .updateMountById(req)
      .then((mounts) => res.json(mounts.rowCount))
      .catch((err) => {
        console.error(err.message);
        res.json({ response: false });
      })
  );

module.exports = router;
