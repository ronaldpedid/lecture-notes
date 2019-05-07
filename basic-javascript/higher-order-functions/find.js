const heroes = require("./heroes");

function getBlackWidow(hero) {
  return hero.name.toLowerCase() === "black widow";
}

let blackWidow = heroes.find(getBlackWidow);

let unknownHero = heroes.find(hero => hero.strength > 5000);

console.log(unknownHero);