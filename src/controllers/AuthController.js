const ldapClient = require("./ldap-communication");
const jwt = require("jsonwebtoken");
const config = require("config");

exports.login = async (req, res) => {
  try {
    console.log("Login");

    let isAuthenticated = await ldapClient.authUser(
      req.body.email,
      req.body.password
    );

    const token = generateAuthToken(req.body.email, req.body.password);
    res.status(200).send(token);
  } catch (error) {
    res.status(400).send("Wrong email or password!");
  }
};

function generateAuthToken(email, password) {
  const token = jwt.sign(
    { email: email, password: password },
    config.get("jwtPrivateKey")
  );
  return token;
}
