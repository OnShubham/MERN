const express = require("express");
const cors = require("cors");
require("dotenv").config();
const ConnectDB = require("./util/db");

const authRouter = require("./router/auth");
const ContactRouter = require("./router/contact-router");
const ServicesRouter = require("./router/services-router"); // fixed typo

const errorMiddleware = require("./middleware/error-middleware");

const app = express();

const corsOptions = {
 
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions)); // apply CORS middleware with options
app.use(express.json());
app.use(errorMiddleware); // ensure errorMiddleware is used after json middleware

// define routers
app.use("/api/auth", authRouter);
app.use("/api/form", ContactRouter);
app.use("/api/data", ServicesRouter);

app.get("/", (req, res) => {
  res.status(200).send("Welcome ");
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

ConnectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
}).catch(err => {
  console.error("Failed to connect to database", err);
});
