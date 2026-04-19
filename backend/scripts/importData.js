require("dotenv").config();
const mongoose = require("mongoose");
const Scheme = require("../models/Scheme");
const data = require("../data/schemesData.json");

mongoose.connect(process.env.MONGO_URI)

  .then(async () => {
    console.log("MongoDB Connected");

    // Optional: clear old data
    await Scheme.deleteMany();

    // Insert new data
    await Scheme.insertMany(data);

    console.log("Data Imported Successfully");

    process.exit();
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });