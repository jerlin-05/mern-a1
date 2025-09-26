const Case = require("../models/Case");
const { sendEmail } = require("../services/emailService");

const createCase = async (req, res, next) => {
  try {
    const newCase = await Case.create(req.body);

    // optional: send notification email (example)
    if (newCase.assigned_to) {
      // you'd fetch assigned user's email and call sendEmail(...)
    }

    res.status(201).json(newCase);
  } catch (err) { next(err); }
};

const getCases = async (req, res, next) => {
  try {
    const cases = await Case.find().populate("customer_id").populate("assigned_to");
    res.json(cases);
  } catch (err) { next(err); }
};

module.exports = { createCase, getCases };
