function getStrongest(heroes) {
  let strongest = heroes.reduce(
    (prev, curr) => {
      if (curr.strength > prev.strength) {
        return curr;
      } else {
        return prev;
      }
    },
    { strength: 0 }
  );
  return strongest;
}

function findHero(name, heroes) {
  let foundHero = heroes.find(hero => hero.name.toLowerCase() === name.toLowerCase());

  return foundHero;
}

function myPublicFunction() {
  console.log("You accessed my public function!");
}

module.exports = {
  getStrongest: getStrongest,
  findHero: findHero,
  myPublicFunction,
  moduleName: "Heroes Lib"
}