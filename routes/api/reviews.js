const router = require("express").Router();

const reviewController = require("../../controllers/reviewController");
// Matches with "/api/review"
router.route("/")
  .get(reviewController.findAll)
  .post(reviewController.create);

// Matches with "/api/review/:id"
router
  .route("/:id")
  .get(reviewController.findById)
  .put(reviewController.update)
  .delete(reviewController.remove);

// router
// .route("/sign-s3")
// .get((req, res) =>{

// })

router
    .route("/reviews/il/:zip")
    .get(reviewController.findAll)
    .get(reviewController.findByZip);

module.exports = router;
