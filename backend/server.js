require("dotenv").config();

const express = require("express");

const cors = require("cors");

const connectDB = require("./config/db");

const Scheme = require("./models/Scheme");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running with Express");
});

app.get("/test", (req, res) => {
  res.json({ message: "Backend working" });
});

app.get("/schemes", async (req, res) => {
  try {
    const data = await Scheme.find();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error fetching schemes" });
  }
});

const schemeRoutes = require("./routes/schemeRoutes");

connectDB();

app.use("/api", schemeRoutes);

const errorHandler = require("./middleware/errorHandler");

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Express server running on port 5000");
});