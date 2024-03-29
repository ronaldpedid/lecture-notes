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

console.log(strongest);

/*
Create a variable called totalStrength. Use reduce to calculate
the total strength of all of our heroes.
*/
let totalStrength = heroes.reduce((prev, curr) => {
  return prev + curr.strength;
}, 0);

console.log(totalStrength);

/*
Create a variable called numFemaleHeroes. Use reduce to
count the number of female superheroes.
*/
let myReducer = (prev, curr) => {
  if (curr.sex === "f") {
    return prev + 1;
  }
  else {
    return prev;
  }
};

let numFemaleHeroes = heroes.reduce(myReducer, 0);
console.log(numFemaleHeroes);

let nums = [1, 2, 3, 4]; // 2.5

let sum = nums.reduce((prev, curr) => {
  return prev + curr;
}, 0);
console.log(sum);

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
let flatArray = arrays.reduce((prev, curr) => [...prev, ...curr]);

// → [1, 2, 3, 4, 5, 6]
console.log(flatArray);

let average = nums.reduce((prev, curr, index) => {
  if (index === nums.length - 1) {
    return (prev + curr) / nums.length;
  }

  return prev + curr;
});

console.log(average);