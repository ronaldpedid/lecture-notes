module.exports = (label, delay) => {
  let delayInMs = delay * 1000;
  console.log(`Started ${label}`);

  setTimeout(() => {
    console.log(`runAsync ${label} finished after ${delay} seconds`);
  }, delayInMs);
}