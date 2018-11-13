const router = require("express").Router();
const pickupRoutes = require("./pickups");
const userRoutes = require('./users');

router.use("/pickups", pickupRoutes);
router.use("/users", userRoutes);

module.exports = router;
