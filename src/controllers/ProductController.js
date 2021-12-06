const Products = require('../models/ProductModel');

exports.createProduct = async (req, res) => {
    try {
        console.log("Create product");
        const newProduct = await Products.create(req.body);
        return res.status(200).json({
            status: 'Create success',
            product: newProduct
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.getProducts = async (req, res) => {
    try {
        console.log("Get all products");
        const products = await Products.find();
        return res.status(200).json({
            status: 'Get success',
            products
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.getProduct = async (req, res) => {
    try {
        console.log("Get a product");
        const product = await Products.findById(req.params.id);
        return res.status(200).json({
            status: 'Get success',
            product
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.updateProduct = async (req, res) => {
    try {
        console.log("Update product");
        const update = await Products.findByIdAndUpdate(req.params.id,
            {
                name: req.body.name,
                brand: req.body.brand,
                price: req.body.price,
                onstock: req.body.onstock
            }, { new: true });
        return res.status(200).json({
            status: 'Update success',
            product: update
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        console.log("Delete product");
        const remove = await Products.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            status: 'Delete success',
            product: remove
        });
    }
    catch (error) {
        console.log(error);
    }
}