const express = require("express");
require("dotenv").config();
const ConnectDB = require("./util/db");

const authRouter = require("./router/auth");
const ContactRouter = require("./router/contact-router");

const errorMiddleware = require("./middleware/error-middleware");

const app = express();

app.use(express.json());
app.use(errorMiddleware);

// define a router
app.use("/api/auth", authRouter);
app.use("/api/form", ContactRouter);

app.get("/", (req, res) => {
  res.status(200).send("Welcome ");
});

app.use(errorMiddleware);

const PORT = process.env.PORT;

ConnectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Sever Is Runinng at port: ${PORT}`);
  });
});
