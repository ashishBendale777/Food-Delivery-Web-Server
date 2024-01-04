const express = require("express")

const router = express.Router()

const FoodController=require("../controllers/FoodController")

router.post("/addfood", FoodController.addFood)
router.get("/allfood", FoodController.getAllFoods)

module.exports = router