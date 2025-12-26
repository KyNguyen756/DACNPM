const Weather = require("../models/Weather");

let latestWeather = null;

const saveWeather = async (data) => {
  latestWeather = {
    temperature: data.temperature,
    humidity: data.humidity,
    updatedAt: new Date()
  };

  await Weather.create({
    temperature: data.temperature,
    humidity: data.humidity
  });
};

const getLatest = () => latestWeather;

const getHistory = async (limit = 50) => {
  return Weather.find()
    .sort({ createdAt: -1 })
    .limit(limit);
};

module.exports = {
  saveWeather,
  getLatest,
  getHistory
};
