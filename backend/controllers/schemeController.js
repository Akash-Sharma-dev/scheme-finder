const Scheme = require("../models/Scheme");

const asyncHandler = require("../utils/asyncHandler");

exports.checkEligibility = asyncHandler(async (req, res, next) => {
    const user = req.body || {};

    // Validation
    if (
      user.income === undefined ||
      !user.category ||
      !user.state ||
      !user.gender ||
      !user.occupation ||
      !user.ageGroup
    ) {
      return res.status(400).json({
  success: false,
  message: "Missing required fields",
  required: ["income", "category", "state", "gender", "occupation", "ageGroup"]
});
    }

    const userPreference = user.preference || null;

    // Case-insensitive DB query
   const schemes = await Scheme.find({
  maxIncome: { $gte: user.income },

  category: { $regex: `^${user.category}$`, $options: "i" },

  state: {
    $in: [
      "All",
      new RegExp(`^${user.state}$`, "i")
    ]
  },

  gender: {
    $in: [
      "Any",
      new RegExp(`^${user.gender}$`, "i")
    ]
  },

  occupation: {
    $in: [
      "All",
      new RegExp(`^${user.occupation}$`, "i")
    ]
  },

  ageGroup: {
    $in: [
      "All",
      new RegExp(`^${user.ageGroup}$`, "i")
    ]
  }
}).select(
  "name maxIncome category state gender occupation ageGroup benefitType"
);

    // Scoring logic
    const result = schemes.map(scheme => {
      let reasons = [];
      let score = 0;

      if (user.income <= scheme.maxIncome) {
        reasons.push("Income within limit");
        score += 2;
      }

      if (scheme.category.map(c => c.toLowerCase()).includes(user.category.toLowerCase())) {
        reasons.push("Category matches");
        score += 2;
      }

      if (scheme.state.map(s => s.toLowerCase()).includes(user.state.toLowerCase())) {
        reasons.push("State match");
        score += 2;
      } else if (scheme.state.includes("All")) {
        reasons.push("Available in all states");
        score += 1;
      }

      if (scheme.gender && scheme.gender.toLowerCase() === user.gender.toLowerCase()) {
        reasons.push("Gender match");
        score += 2;
      } else if (scheme.gender === "Any") {
        reasons.push("Open for all genders");
        score += 1;
      }

      if (scheme.occupation.map(o => o.toLowerCase()).includes(user.occupation.toLowerCase())) {
        reasons.push("Occupation match");
        score += 2;
      } else if (scheme.occupation.includes("All")) {
        reasons.push("Open for all occupations");
        score += 1;
      }

      if (scheme.ageGroup.toLowerCase() === user.ageGroup.toLowerCase()) {
        reasons.push("Age group match");
        score += 2;
      } else if (scheme.ageGroup === "All") {
        reasons.push("Applicable to all age groups");
        score += 1;
      }

      if (
  userPreference &&
  scheme.benefitType &&
  scheme.benefitType.toLowerCase() === userPreference.toLowerCase()
) {
        reasons.push("Matches your preference");
        score += 2;
      }

      return {
        name: scheme.name,
        score,
        reason: reasons.join(", ")
      };
    });

    result.sort((a, b) => b.score - a.score);

    res.status(200).json({
  success: true,
  count: result.length,
  data: result
});

});