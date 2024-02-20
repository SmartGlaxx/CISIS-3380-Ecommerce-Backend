const express = require("express")
const router  = express.Router()
const {createOrder, getUserOrders, getOrder, getOrders} = require("../controllers/orderController")

router.get("/", getOrders)
router.get("/order/:id", getOrder)
router.get("/:userId", getUserOrders)
router.post("/", createOrder)
// router.patch("/:id", updateOrder)

module.exports = router

