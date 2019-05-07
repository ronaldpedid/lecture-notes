const assert = require("assert");
const heroes = require("../basic-javascript/higher-order-functions/heroes")
const heroesLib = require("./heroes-lib");

it("Should find a hero by name", function () {
  let blackWidow = heroesLib.findHero("Black Widow", heroes);
  let expected = { name: "Black Widow", strength: 136, sex: "f" };

  assert.notEqual(blackWidow, undefined);
  assert.deepEqual(blackWidow, expected);
});

it("Should get the strongest hero", function () {
  let strongest = heroesLib.getStrongest(heroes);
  let expected = { name: "Thor", strength: 100000, sex: "m" };

  assert.notEqual(strongest, undefined);
  assert.deepEqual(strongest, expected);
});