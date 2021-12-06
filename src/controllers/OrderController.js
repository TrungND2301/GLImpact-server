const Orders = require('../models/OrderModel');

exports.createOrder = async (req, res) => {
    try {
        console.log("Create order");
        const newOrder = await Orders.create(req.body);
        return res.status(200).json({
            status: 'Create success',
            order: newOrder
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.getOrders = async (req, res) => {
    try {
        console.log("Get all order");
        const orders = await Orders.find();
        return res.status(200).json({
            status: 'Get success',
            orders
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.getOrder = async (req, res) => {
    try {
        console.log("Get an user");
        const order = await Orders.findById(req.params.id);
        return res.status(200).json({
            status: 'Get success',
            order
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.updateOrder = async (req, res) => {
    try {
        console.log("Update user");
        const update = await Orders.findByIdAndUpdate(req.params.id,
            {
                username: req.body.username,
                products: req.body.products,
                payment: req.body.payment
            }, { new: true });
        return res.status(200).json({
            status: 'Update success',
            order: update
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        console.log("Delete user");
        const remove = await Orders.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            status: 'Delete success',
            order: remove
        });
    }
    catch (error) {
        console.log(error);
    }
}