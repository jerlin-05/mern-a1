const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact_info: { type: String },
  status: { type: String, enum: ["active","inactive"], default: "active" }
}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema);
