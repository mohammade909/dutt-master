const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/login").post(authController.login);
router.route("/register").post(authController.register);
router.route("/").get(authController.getUsers);

module.exports = router;
