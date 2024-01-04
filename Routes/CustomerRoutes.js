const express = require("express")

const router = express.Router()

const CustomerController=require("../controllers/CustomerController")

router.post("/addcustomer", CustomerController.addCustomer)
router.get("/allcustomer", CustomerController.getAllCustomers)

module.exports = router