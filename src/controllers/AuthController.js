const users = require("../models/UserModel");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  try {
    console.log("Login");

    let user = await users.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send("Wrong email or password!");
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send("Wrong password!");
    }

    const token = user.generateAuthToken();
    console.log(token);
    res.send(token);
  } catch (error) {
    console.log(error);
  }
};
