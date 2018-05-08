const router = require("express").Router();
const reviewRoutes = require("./reviews");

router.use("/reviews", reviewRoutes);

module.exports = router;
