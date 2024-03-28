const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.URI;

const ConnectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB conncett");
  } catch (error) {
    console.log(error.send("MongoDb Not Connceted"));
    process.exit(0);
  }
};

module.exports = ConnectDB;
