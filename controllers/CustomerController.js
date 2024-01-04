const Customer=require("../Modals/CustomerSchema")

exports.addCustomer = (req, res) => {
    const customer = new Customer({
        CustomerName: req.body.CustomerName,
        CustomerEmail: req.body.CustomerEmail,
        CustomerPassword: req.body.CustomerPassword,
        CustomerAddress: req.body.CustomerAddress,
        CustomerMob: req.body.CustomerMob
    })

    customer.save()
        .then((result) => {
            console.log(result)
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}

exports.getAllCustomers = (req, res) => {
    Customer.find()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}
