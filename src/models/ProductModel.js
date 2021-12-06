const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: String,
    onstock: Boolean
});

module.exports = mongoose.model('Product', productSchema);