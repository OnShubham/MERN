const express = require("express");
const cors = require("cors");
require("dotenv").config();
const ConnectDB = require("./util/db");

const authRouter = require("./router/auth");
const ContactRouter = require("./router/contact-router");
const ServicesRouter = require("./router/serivices-router");

const errorMiddleware = require("./middleware/error-middleware");

const app = express();

app.use(cors(corsOptions));

var corsOptions = {
  origin: "http://localhost:5173",
  origin: "https://mern-livid-phi.vercel.app/",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(errorMiddleware);

// define a router
app.use("/api/auth", authRouter);
app.use("/api/form", ContactRouter);
app.use("/api/data", ServicesRouter);

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
