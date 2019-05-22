const sleep = require("sleep");

module.exports = (label, delay) => {
  console.log(`Started ${label}`);
  sleep.sleep(delay);
  console.log(`runSync ${label} finished after ${delay} seconds`);
}