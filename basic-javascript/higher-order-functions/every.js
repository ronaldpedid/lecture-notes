const heroes = [
  {name: 'Hulk', strength: 90000, sex: 'm'},
  {name: 'Spider-Man', strength: 25000, sex: 'm'},
  {name: 'Hawk Eye', strength: 136, sex: 'm'},
  {name: 'Thor', strength: 100000, sex: 'm'},
  {name: 'Black Widow', strength: 136, sex: 'f'},
  {name: 'Vision', strength: 5000, sex: 'm'},
  {name: 'Scarlet Witch', strength: 60, sex: 'f'},
  {name: 'Mystique', strength: 120, sex: 'f'},
  {name: 'Namora', strength: 75000, sex: 'f'},
];

let areStrong = heroes.every(hero => hero.strength > 1);
let allMale = heroes.every(hero => hero.sex === 'm');

/*
Filter out all of the females from heroes. Then call every
on the filtered results to test if they are all males.
*/
function isMale(hero) {
  return hero.sex === 'm';
}

let allFilteredMales = heroes.filter(isMale).every(isMale);
console.log(allFilteredMales);