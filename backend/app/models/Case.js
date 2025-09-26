const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  assigned_to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  priority: { type: String, enum: ["low","medium","high"], default: "low" },
  status: { type: String, enum: ["open","in-progress","closed"], default: "open" },
  description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Case", caseSchema);
