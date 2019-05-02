const heroes = [
  { name: "Hulk", strength: 90000, sex: "m" },
  { name: "Spider-Man", strength: 25000, sex: "m" },
  { name: "Hawk Eye", strength: 136, sex: "m" },
  { name: "Thor", strength: 100000, sex: "m" },
  { name: "Black Widow", strength: 136, sex: "f" },
  { name: "Vision", strength: 5000, sex: "m" },
  { name: "Scarlet Witch", strength: 60, sex: "f" },
  { name: "Mystique", strength: 120, sex: "f" },
  { name: "Namora", strength: 75000, sex: "f" },
];

// ["Hulk", "Spider-man", "Hawk Eye", "Thor", "Black Widow", "Vision", "Scarlet Witch", "Mystique", "Namora" ]

let names = heroes.map(hero => hero.name);

console.log(names);

/*
Generate an array of heroes based off of the heroes array that adds
a property to each hero called isWeak. A hero has isWeak set to true
if its strength is less than 500. A hero has isWeak set to false if
its strength is greater than or equal to 500.
*/
let newHeroes = heroes.map(hero => {
  if (hero.strength < 500) {
    hero.isWeak = true;
  }
  else {
    hero.isWeak = false;
  }
  return hero;
});

let ternaryHeroes = heroes.map(hero => { return { ...hero, isWeak: hero.strength < 500 ? true : false } });

console.log(ternaryHeroes);


function oodlify(word) {
  return word.replace(/[aeiou]/g, 'oodle');
}

const beatles = ['John', 'Paul', 'George', 'Ringo'];

let oodledBeatles = beatles.map(oodlify);

console.log(oodledBeatles);
