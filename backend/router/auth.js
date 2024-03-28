// this is authentication router LOGIN and SIGNUP

const express = require("express");

const router = express.Router();

const { login, register } = require("../controllers/auth");

// 1 way to write a router
router.route("/login").post(login);
// secound way to write a router
router.route("/register").post(register);

module.exports = router;
