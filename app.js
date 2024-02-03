const express = require('express')
const mongoose = require("mongoose")
const nodemon = require("nodemon")
const bodyparser = require("body-parser")
const cors = require('cors')

//imports  
const multer = require('multer')
const path = require('path')

//create server
const server = express()

server.use(cors())

server.use(bodyparser.json())

//storage config
const fileStorage = multer.diskStorage({
    destination: 'Uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

//upload config
const uploadConfig = multer({
    storage: fileStorage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new Error('Upload Correct file'))
        }
        cb(undefined, true)
    }
})

//database connectivity
mongoose.connect("mongodb://127.0.0.1:27017/FoodDeliveryDB", {
    useNewUrlParser: true
}).then((result) => {
    console.log("DB Connected")
}).catch((err) => {
    console.log("DB Not Connected")
});


server.post('/uploadfile', uploadConfig.single('image'), (req, res) => {
    res.status(200).json({
        filepath: "/images/".concat(req.file.filename),
        uploaded: true
    })
}, (err, req, res, next) => {
    res.status(400).send({ error: err.message })
})

server.get('/', (req, res) => {
    res.send("Hello")
})

server.get('/customers', (req, res) => {
    res.send("Hello Customers")
})


const orderRoutes = require('./Routes/OrderRoutes')
const customerRoutes = require('./Routes/CustomerRoutes')
const foodRoutes = require('./Routes/FoodRoutes')

server.use("/api/", orderRoutes)
server.use("/api/", customerRoutes)
server.use("/api/", foodRoutes)

server.use(express.static("Uploads"));
server.use("/images", express.static("Uploads"));

server.listen(5000, () => {
    console.log("Server Started")
})