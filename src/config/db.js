const mongoose = require("mongoose");
const config = require("./index");

async function connectDB() {
  try {
    await mongoose.connect(config.mongoUri);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;