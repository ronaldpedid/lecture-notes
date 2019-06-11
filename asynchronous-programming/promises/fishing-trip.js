const sonService = require("son-service");

async function goFishing() {
  try {
    let weather = await sonService.getWeather();

    if (weather === "sunny") {
      return true;
    }
    else {
      return false;
    }
  }
  catch (error) {
    return false;
  }
}