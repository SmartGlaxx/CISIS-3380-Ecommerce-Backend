const express = require("express")
const router  = express.Router()
const {createReview, getReview, getReviews, getProductReview, 
    updateReview, deleteReview} = require("../controllers/reviewController")

router.get("/", getReviews)
router.get("/:id", getReview)
router.get("/product/:productId", getProductReview)
router.post("/",createReview)
router.patch("/:id", updateReview)
router.delete("/:id", deleteReview)

module.exports = router
