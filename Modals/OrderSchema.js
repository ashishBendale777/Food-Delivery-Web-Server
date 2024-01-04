const mongoose=require('mongoose')

const OrderSchema=mongoose.Schema({
    OrderDate: { type: Date, default: new Date() },
    OrderStatus: { type: String, default: "Pending" },
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: "Customers" },
    NoOfItems: Number,
    TotalAmt: Number,
    OrderItems: [{
        FoodId: { type: mongoose.Schema.Types.ObjectId, ref: "Foods" },
        Qty: Number
    }]
})

// {
//     "UserId": "658aa00acf46a039acd2a6d1",
//     "NoOfItems": 3,
//     "TotalAmt": 4324,
//     "OrderItems": [{
//         "FoodId": "658bdf3647c66973f858350e",
//         "Qty": 2
//     },
// {
//             "FoodId": "658bdf3647c66973f858350e",
//             "Qty": 4
//         }]
// }

module.exports = mongoose.model("Orders",OrderSchema)