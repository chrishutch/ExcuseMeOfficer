const router = require("express").Router();
const reviewRoutes = require("./reviews");

// Book routes
router.use("/reviews", reviewRoutes);

module.exports = router;
