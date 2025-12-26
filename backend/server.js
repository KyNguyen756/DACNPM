require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/database");
const initSerial = require("./config/serial");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/weather", weatherRoutes);

// Init
connectDB();
initSerial();

app.listen(3000, () =>
  console.log("Server running at http://localhost:3000")
);
