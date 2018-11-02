const router = require("express").Router();
const pickupRoutes = require("./pickups");

// Book routes
router.use("/pickups", pickupRoutes);

module.exports = router;
