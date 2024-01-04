const express = require("express")

const router = express.Router()

const OrderController=require("../controllers/OrderController")

router.post("/addorder", OrderController.addOrder)
router.get("/allorder", OrderController.getAllOrders)
router.post("/getorderbyCustid",OrderController.getOrderbyCustId)

module.exports = router