const router = require("express").Router();
const pickupsController = require("../../controllers/pickupsController");

router.route("/")
  .get(pickupsController.findAll)
  .post(pickupsController.create);

router.route("/:id")
  .get(pickupsController.findById)
  .put(pickupsController.update)
  .delete(pickupsController.remove);

module.exports = router;
