const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  maxIncome: {
    type: Number,
    required: true
  },
  category: {
    type: [String],
    required: true
  },
  state: {
    type: [String],
    required: true
  },
  gender: {
    type: String,
    required: true
  },

  // 🔥 NEW FIELDS (IMPORTANT)
  occupation: {
    type: [String],   // e.g. ["Student", "Farmer", "Unemployed"]
    required: true
  },
  ageGroup: {
    type: String,     // e.g. "Child", "Adult", "Senior"
    required: true
  },
  benefitType: {
    type: String,     // e.g. "Financial", "Education", "Health"
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Scheme", schemeSchema);