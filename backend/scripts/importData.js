const mongoose = require("mongoose");
const Scheme = require("../models/Scheme");
const data = require("../data/schemesData.json");

mongoose.connect("mongodb://akashsharmaa7492_db_user:OVpQD7OUPBZmrPLM@ac-k2lshlf-shard-00-00.4deeymv.mongodb.net:27017,ac-k2lshlf-shard-00-01.4deeymv.mongodb.net:27017,ac-k2lshlf-shard-00-02.4deeymv.mongodb.net:27017/?ssl=true&replicaSet=atlas-rv6vg6-shard-0&authSource=admin&appName=Cluster0")

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