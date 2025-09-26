const Customer = require("../models/Customer");

const createCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (err) { next(err); }
};

const getCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });
    res.json(customers);
  } catch (err) { next(err); }
};

const updateCustomer = async (req, res, next) => {
  try {
    const updated = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) { next(err); }
};

const deleteCustomer = async (req, res, next) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) { next(err); }
};

module.exports = { createCustomer, getCustomers, updateCustomer, deleteCustomer };
