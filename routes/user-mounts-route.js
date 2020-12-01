const express = require('express');
const router = express.Router();
const userMountsServices = require('../services/user-mounts-services');

router.route('').get((req, res) =>
  userMountsServices
    .getAllUserMounts()
    .then((allUsersMounts) => res.json(allUsersMounts))
    .catch((err) => {
      console.error(err.message);
      res.json({ response: false });
    })
);

router.route('/:id').put((req, res) =>
  userMountsServices
    .updateUserMountsById(req)
    .then(() => res.json({ response: true }))
    .catch((err) => {
      console.error(err.message);
      res.json({ response: false });
    })
);

router.route('/user/:id').get((req, res) =>
  userMountsServices
    .getUserMountsByUserId(req)
    .then((userMounts) => res.json(userMounts))
    .catch((err) => {
      console.error(err.message);
      res.json({ response: false });
    })
);

router.route('/mount/:id').get((req, res) =>
  userMountsServices
    .getUserMountsByMountId(req)
    .then((userMounts) => res.json(userMounts))
    .catch((err) => {
      console.error(err.message);
      res.json({ response: false });
    })
);

module.exports = router;
