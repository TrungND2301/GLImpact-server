const Search = require('../models/SearchModel');

exports.createSearch = async (req, res) => {
    try {
        console.log("Create search");
        const newSearch = await Search.create(req.body);
        return res.status(200).json({
            status: 'Create success',
            search: newSearch
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.getSearchs = async (req, res) => {
    try {
        console.log("Get all searchs");
        const searchs = await Search.find();
        return res.status(200).json({
            status: 'Get success',
            searchs
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.getSearch = async (req, res) => {
    try {
        console.log("Get a search");
        const search = await Search.findById(req.params.id);
        return res.status(200).json({
            status: 'Get success',
            search
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.updateSearch = async (req, res) => {
    try {
        console.log("Update search");
        const update = await Search.findByIdAndUpdate(req.params.id,
            {
                username: req.body.username,
                history: req.body.history
            }, { new: true });
        return res.status(200).json({
            status: 'Update success',
            search: update
        });
    }
    catch (error) {
        console.log(error);
    }
}

exports.deleteSearch = async (req, res) => {
    try {
        console.log("Delete search");
        const remove = await Search.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            status: 'Delete success',
            search: remove
        });
    }
    catch (error) {
        console.log(error);
    }
}