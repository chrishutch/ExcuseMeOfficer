const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");

// Matches with "/api/review"
router.route("/")
  .get(reviewController.findAll)
  .post(reviewController.create);

// Matches with "/api/review/:id"
router
  .route("/:id")
  .get(reviewController.findByZip)
  .put(reviewController.update)
  .delete(reviewController.remove);

module.exports = router;
