require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const pcnaRoutes = require("./src/routes/pcna.routes");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/pcna", pcnaRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});