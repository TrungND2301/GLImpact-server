const express = require("express");
const userController = require("../controllers/UserController");
const auth = require("../controllers/Auth");
const router = express.Router();

router.route("/").get(auth.isTokenValidated, auth.isAdminValidated, userController.getUsers);
router.route("/:id").get(auth.isTokenValidated, userController.getUser);
router.route("/").post(auth.isTokenValidated, auth.isAdminValidated, userController.createUser);
router.route("/:id").put(auth.isTokenValidated, auth.isAdminValidated, userController.updateUser);
router.route("/:id").delete(auth.isTokenValidated, auth.isAdminValidated, userController.deleteUser);

module.exports = router;
