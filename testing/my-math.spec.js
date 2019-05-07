/*
Write your tests for your math module. Create one test
for sum(a, b). Create one test for multiply(a, b). Create
one test for average(numsArray).

myMath.sum(1, 2);
myMath.multiply(2, 2);
myMath.average([2,3,4,5])
*/
const myMath = require("./my-math");
const assert = require("assert");

it("Should get the sum of two numbers", function () {
  let sum = myMath.sum(1, 2);
  let expected = 3;

  assert.strictEqual(sum, expected); //  ===
});

it("Should multiply two numbers together", function () {
  let product = myMath.multiply(2, 2);
  let expected = 4;

  assert.strictEqual(product, expected);
});

it("Should average the numbers in an array", function () {
  let average = myMath.average([2, 3, 4, 5]);
  let expected = 3.5;

  assert.strictEqual(average, expected);
});
