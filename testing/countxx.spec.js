/*
Write tests to test the countXX function that is contained
in the countxx.js file.

Test a string that has Xs in the string input.
Test a string that has zero Xs in the string input.
Test a string that is all Xs in the string input.
*/
const countXX = require("./countxx");
const assert = require("assert");

it("Should count the Xs in a string with many different chars.", function () {
  let actual = countXX("abcxxxxabc");
  let expected = 4;

  assert.strictEqual(actual, expected);
});

it("Should find zero Xs in a string with no Xs.", function () {
  let actual = countXX("abcdefgh ijkl");
  let expected = 0;

  assert.strictEqual(actual, expected);
});

it("Should find all Xs in a string with all Xs.", function () {
  let actual = countXX("xxxxx");
  let expected = 5;

  assert.strictEqual(actual, expected);
});

it("Should return 0 if a number is passed in.", function () {
  let actual = countXX(200);
  let expected = 0;

  assert.strictEqual(actual, expected);
});