const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    quantity: Number
});
const orderSchema = new mongoose.Schema({
    username: String,
    products: [productSchema],
    payment: Number
});

module.exports = mongoose.model('Order', orderSchema);