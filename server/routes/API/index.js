const router = require("express").Router();
const pickupRoutes = require("./pickups");
const driverRoutes = require("./drivers");
const establishmentRoutes = require("./establishments");

router.use("/pickups", pickupRoutes);
router.use("/drivers", driverRoutes);
router.use("/establishments", establishmentRoutes);

module.exports = router;
