const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

module.exports = model("Contact", contactSchema);
// Path: backend/router/contact.js

const express = require("express");
