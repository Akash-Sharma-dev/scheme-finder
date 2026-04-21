const express = require("express");
const router = express.Router();

const { checkEligibility } = require("../controllers/schemeController");
const { protect } = require("../middleware/authMiddleware");

router.post("/check", protect, checkEligibility);

module.exports = router;