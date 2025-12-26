const express = require("express");
const router = express.Router();
const controller = require("../controllers/weatherController");

router.get("/latest", controller.getLatestWeather);
router.get("/history", controller.getWeatherHistory);

module.exports = router;
