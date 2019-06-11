const front3 = require("./front3");
const assert = require("assert");

it("Should repeat the first three characters three times", async function () {
  let actual = await front3("Chocolate");
  let expected = "ChoChoCho";

  assert.strictEqual(actual, expected);
});

it("Should repeat the first three characters three times using then", function (done) {
  let expected = "ChoChoCho";

  front3("Chocolate").then(
    data => {
      assert.strictEqual(data, expected);
      done();
    }
  )
});

it("Should reject with an empty string", async function () {
  let expected = "Empty string";

  try {
    let value = await front3(" ");
  }
  catch (error) {
    assert.strictEqual(error.message, expected);
  }
});