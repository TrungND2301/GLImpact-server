const config = require("config");
const jwt = require("jsonwebtoken");

exports.isTokenValidated = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    console.error("Access denied. No token provided!");
    return res.status(401).send("Access denied. No token provided!");
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = decoded;
    next();
  }
  catch (error) {
    console.error("Invalid token.");
    return res.status(400).send("Invalid token.");
  }
};

exports.isAdminValidated = async (req, res, next) => {
  if (!req.user.isAdmin) return res.status(403).send("Access denied.");
  next();
};
