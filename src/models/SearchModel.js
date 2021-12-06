const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    username: String,
    history: [String]
});

module.exports = mongoose.model('Search', searchSchema);