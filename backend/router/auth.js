// this is authentication router LOGIN and SIGNUP

const express = require("express");

const router = express.Router();

const signuupSchema = require("../validator/auth-validation");
const validate = require("../middleware/valid-middleware");

const { login, register } = require("../controllers/auth");

// 1 way to write a router
router.route("/login").post(login);
// secound way to write a router
router.route("/register").post(validate(signuupSchema), register);

module.exports = router;
