const express = require("express");
const { createCustomer, getCustomers, updateCustomer, deleteCustomer } = require("../controllers/customerController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(protect, createCustomer).get(protect, getCustomers);
router.route("/:id").patch(protect, updateCustomer).delete(protect, deleteCustomer);

module.exports = router;
