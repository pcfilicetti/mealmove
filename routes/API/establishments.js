const router = require("express").Router();
const establishmentsController = require("../../controllers/establishmentsController");

router.route("/")
  .post(establishmentsController.create);

router.route("/:id")
  .get(establishmentsController.findById)
  .put(establishmentsController.update)
  .delete(establishmentsController.remove);

module.exports = router;