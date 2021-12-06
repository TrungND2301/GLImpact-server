const Users = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var lodash = require("lodash");
const saltRounds = 10;

exports.createUser = async (req, res) => {
  try {
    console.log("Create user");

    const salt = await bcrypt.genSalt(saltRounds);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    req.body.passwordConfirm = await bcrypt.hash(
      req.body.passwordConfirm,
      salt
    );

    const newUser = await Users.create(req.body);
    return res.status(200).json({
      status: "Create success",
      user: lodash.pick(newUser, ["_id", "name", "email"]),
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    console.log("Get all user");
    const users = await Users.find();
    return res.status(200).json({
      status: "Get success",
      users,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    console.log("Get an user");
    const user = await Users.findById(req.params.id);
    return res.status(200).json({
      status: "Get success",
      user: lodash.pick(user, ["_id", "name", "email"]),
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    console.log("Update user");
    const update = await Users.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
      },
      { new: true }
    );
    return res.status(200).json({
      status: "Update success",
      user: update,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    console.log("Delete user");
    const remove = await Users.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      status: "Delete success",
      user: remove,
    });
  } catch (error) {
    console.log(error);
  }
};
