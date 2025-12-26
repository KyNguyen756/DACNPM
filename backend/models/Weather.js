const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },

  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 60 
  }
});

module.exports = mongoose.model("Weather", weatherSchema);
