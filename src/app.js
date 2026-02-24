const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const responseMiddleware = require("./middlewares/response.middleware");
const errorMiddleware = require("./middlewares/error.middleware");

const pcnaRoutes = require("./routes/pcna.routes");

const app = express();

app.use(express.json());
app.use(responseMiddleware);

mongoose.connect(config.mongoUri)
  .then(() => console.log("MongoDB Connected"));

app.use("/api/pcna", pcnaRoutes);

app.use(errorMiddleware);

module.exports = app;