const heroes = require("./heroes");

let femaleHeroes = heroes.filter(hero => hero.sex === 'f');
let strongestHeroes = heroes.filter(hero => hero.strength > 10000);
console.log(strongestHeroes);