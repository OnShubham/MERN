const express = require("express");

const router = express.Router();

const servicesSchema = require("../Models/services-models");

const {
  services,
  services_data,
} = require("../controllers/services-controllers");

router.route("/services").post(services_data);
router.route("/services").get(services);

module.exports = router;
