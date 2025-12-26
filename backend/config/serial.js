const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const weatherService = require("../services/weatherService");

let port;

module.exports = () => {
  if (port) {
    console.log("Serial already connected");
    return port;
  }

  port = new SerialPort({
    path: process.env.SERIAL_PORT || "COM3",
    baudRate: 9600
  });

  const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

  parser.on("data", async (line) => {
    try {
      const data = JSON.parse(line);

      if (
        typeof data.temperature === "number" &&
        typeof data.humidity === "number"
      ) {
        await weatherService.saveWeather(data);
        console.log("Weather saved:", data);
      }
    } catch (err) {
      console.log("Invalid serial:", line);
    }
  });

  port.on("open", () => {
    console.log("Serial connected:", port.path);
  });

  port.on("error", (err) => {
    console.error("Serial error:", err.message);
  });

  return port;
};
