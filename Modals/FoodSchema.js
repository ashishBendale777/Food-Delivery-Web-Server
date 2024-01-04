const mongoose=require('mongoose')

const FoodSchema=mongoose.Schema({
    FoodName: String,
    FoodPrice: Number,
    FoodType: String,
    FoodCategory: String,
    FoodImage: String
})

module.exports = mongoose.model("Foods",FoodSchema)