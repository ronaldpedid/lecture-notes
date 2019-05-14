function celsiusToFahrenheit(degCelsius) {
  if (typeof degCelsius !== "number") {
    throw new Error("Invalid celsius value:" + degCelsius);
  }

  return (degCelsius * 9 / 5) + 32;
}

let fahrenheitToCelsius = (degFahrenheit) =>
  typeof degFahrenheit === "number" ? (degFahrenheit - 32) * 5 / 9 : undefined;


module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
}