const Food=require("../Modals/FoodSchema")

exports.addFood = (req, res) => {
    const food = new Food({
        FoodName: req.body.FoodName,
        FoodPrice: req.body.FoodPrice,
        FoodType: req.body.FoodType,
        FoodCategory: req.body.FoodCategory,
        FoodImage: req.body.FoodImage
    })

    food.save()
        .then((result) => {
            console.log(result)
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}

exports.getAllFoods = (req, res) => {
    Food.find()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}