const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    password: String,
    name: String,
    phone: String,
    address: String
});

module.exports = mongoose.model('Customer', customerSchema);