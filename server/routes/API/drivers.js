const router = require('express').Router();
const driversController = require('../../controllers/driversController');

router.route("/")
    .post(driversController.create);

router.route("/:id")
    .get(driversController.findById)
    .put(driversController.update)
    .delete(driversController.remove);

module.exports = router;