const express = require("express");
require("dotenv").config();
const ConnectDB = require("./util/db");

const app = express();

const router = require("./router/auth");

app.use(express.json());

// define a router
app.use("/api/auth", router);

app.get("/", (req, res) => {
  res.status(200).send("Welcome ");
});

const PORT = process.env.PORT;

ConnectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Sever Is Runinng at port: ${PORT}`);
  });
});
