const router = require("express").Router();
const pickupsController = require("../../controllers/pickupsController");

router.route("/")
  .get(pickupsController.findAll)
  .post(pickupsController.create);

module.exports = router;
