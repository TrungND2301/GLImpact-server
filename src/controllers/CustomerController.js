const Users = require('../models/CustomerModel');

exports.createCustomer = async (req, res) => {
    try {
        console.log("Create user");
        const newUser = await Users.create(req.body);
        return res.status(200).json({
            status: 'Create success',
            user: newUser
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.getCustomers = async (req, res) => {
    try {
        console.log("Get all user");
        const users = await Users.find();
        return res.status(200).json({
            status: 'Get success',
            users
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.getCustomer = async (req, res) => {
    try {
        console.log("Get an user");
        const user = await Users.findById(req.params.id);
        return res.status(200).json({
            status: 'Get success',
            user
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.updateCustomer = async (req, res) => {
    try {
        console.log("Update user");
        const update = await Users.findByIdAndUpdate(req.params.id,
            {
                name: req.body.name,
                phone: req.body.phone,
                address: req.body.address
            }, { new: true });
        return res.status(200).json({
            status: 'Update success',
            user: update
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.deleteCustomer = async (req, res) => {
    try {
        console.log("Delete user");
        const remove = await Users.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            status: 'Delete success',
            user: remove
        });
    }
    catch (error) {
        console.log(error);
    }
}