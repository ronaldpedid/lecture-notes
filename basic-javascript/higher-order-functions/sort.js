const heroes = require("./heroes");

heroes.sort((firstHero, secondHero) => {
  if (firstHero.name < secondHero.name) {
    return -1;
  }
  else if (firstHero.name === secondHero.name) {
    return 0;
  }
  else {
    return 1;
  }
});

