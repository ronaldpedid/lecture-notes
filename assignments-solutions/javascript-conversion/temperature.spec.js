/*
Write your mocha tests in this file. Make sure to at least handle the following scenarios:
temperature.celsiusToFahrenheit(100); // 212
temperature.celsiusToFahrenheit(0); // 32
temperature.celsiusToFahrenheit(-2); // 28.4

temperature.fahrenheitToCelsius(212); // 100
temperature.fahrenheitToCelsius(32); // 0
temperature.fahrenheitToCelsius(-4); // -20
*/
const assert = require("assert");
const temperature = require("./temperature");

describe("celsiusToFahrenheit", function () {
  it("Should convert a positive Celsius to Fahrenheit.", function () {
    let temp = temperature.celsiusToFahrenheit(100);
    assert.equal(temp, 212);
  });

  it("Should convert a 0 Celsius temperature to Fahrenheit.", function () {
    let temp = temperature.celsiusToFahrenheit(0);
    assert.equal(temp, 32);
  });

  it("Should convert a negative Celsius temperature to Fahrenheit.", function () {
    let temp = temperature.celsiusToFahrenheit(-2);
    assert.equal(temp, 28.4);
  });

  it("Should throw an error if the value is invalid", function () {
    try {
      temperature.celsiusToFahrenheit("dog");
    }
    catch (error) {
      assert.equal(error.message, "Invalid celsius value:dog");
    }
  });
});

describe("fahrenheitToCelsius", function () {
  it("Should convert a positive Fahrenheit to Celsius.", function () {
    let temp = temperature.fahrenheitToCelsius(212);
    assert.equal(temp, 100);
  });

  it("Should convert 32 degrees Fahrenheit to 0 degrees Celsius.", function () {
    let temp = temperature.fahrenheitToCelsius(32);
    assert.equal(temp, 0);
  });

  it("Should convert a negative Fahrenheit temp to Celsius.", function () {
    let temp = temperature.fahrenheitToCelsius(-4);
    assert.equal(temp, -20);
  });

  it("Should return undefined if value is invalid", function () {
    let temp = temperature.fahrenheitToCelsius("dog");
    assert.equal(temp, undefined);
  });
});
