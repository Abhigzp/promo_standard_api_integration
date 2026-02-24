const mongoose = require("mongoose");

const apiLogSchema = new mongoose.Schema({
  endpoint: String,
  requestPayload: Object,
  responsePayload: Object,
  status: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ApiLog", apiLogSchema);