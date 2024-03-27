const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome Server is Running");
});

app.get("/reg", (req, res) => {
  res.status(200).send("Welcome Server is Running");
});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Sever Is Runinng at port: ${PORT}`);
});
