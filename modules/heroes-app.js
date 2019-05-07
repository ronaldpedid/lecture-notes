let heroes = require("../basic-javascript/higher-order-functions/heroes");
let heroesLib = require("./heroes-lib");

let strongest = heroesLib.getStrongest(heroes);
let blackWidow = heroesLib.findHero("Black Widow", heroes);
heroesLib.myPublicFunction();

console.log(strongest);
console.log(blackWidow);
console.log(heroesLib.moduleName);

