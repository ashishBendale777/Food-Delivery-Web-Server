const express = require("express")

const router = express.Router()

const CustomerController=require("../controllers/CustomerController")

router.post("/addcustomer", CustomerController.addCustomer)
router.get("/allcustomer", CustomerController.getAllCustomers)
router.post("/login", CustomerController.custmerLogin)


module.exports = router