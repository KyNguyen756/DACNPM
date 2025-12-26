const weatherService = require("../services/weatherService");

const getLatestWeather = (req, res) => {
  const data = weatherService.getLatest();
  if (!data) {
    return res.status(503).json({ message: "No data yet" });
  }
  res.json(data);
};

const getWeatherHistory = async (req, res) => {
  const limit = Number(req.query.limit) || 50;
  const data = await weatherService.getHistory(limit);
  res.json(data);
};

module.exports = {
  getLatestWeather,
  getWeatherHistory
};
