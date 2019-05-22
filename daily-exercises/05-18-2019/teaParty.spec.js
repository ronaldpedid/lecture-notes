const teaParty = require("./teaParty");
const assert = require("assert");

describe("Should test for a bad, good, or great tea party.", function () {
  it("Should test for a bad party if tea is less than 5", function() {
    let actual = teaParty(3, 8);
    let expected = 0;

    assert.equal(actual, expected);
  });

  it("Should test for a good party if tea is 6 and candy is 8", function() {
    let actual = teaParty(6, 8);
    let expected = 1;

    assert.equal(actual, expected);
  });

  it("Should test for a great party if tea is >= 2 times candy", function() {
    let actual = teaParty(20, 6);
    let expected = 2;

    assert.equal(actual, expected);
  });
})
