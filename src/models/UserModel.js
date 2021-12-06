const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name can't be null"],
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Email can't be null"],
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password can't be null"],
    minlength: 5,
    maxlength: 1024,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Password can't be null"],
    minlength: 5,
    maxlength: 1024,
  },
  isAdmin: Boolean,
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    config.get("jwtPrivateKey")
  );
  return token;
};

module.exports = mongoose.model("User", userSchema);
