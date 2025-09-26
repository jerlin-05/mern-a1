const express = require("express");
const { createCase, getCases } = require("../controllers/caseController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(protect, createCase).get(protect, getCases);

module.exports = router;
