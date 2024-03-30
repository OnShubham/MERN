const express = require("express");

const router = express.Router();

const contactSchema = require("../Models/contact-models");
const { contactForm } = require("../controllers/contact-controllers");

router.route("/contact").post(contactForm);

module.exports = router;
