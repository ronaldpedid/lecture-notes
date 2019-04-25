let hayStack = "hay junk needle hay moreJunk hay random";

/*
Create a function that takes a string of words and finds
the position of the needle
*/

function findNeedle(wordsString) {
  let wordsArray = wordsString.split(" ");

  let position = wordsArray.indexOf("bacon");

  if (position === -1) {
    return "404 Not found.";
  }

  return `Found needle at position ${position}.`;
}

console.log(findNeedle(hayStack)); // "Found needle at position 2."

function startsWithB(word) {
  return word[0].toUpperCase() === "B";
}

console.log(startsWithB("boy")); // true
console.log(startsWithB("Boy")); // true
console.log(startsWithB("cat")); // false

/*
Create a function called countBWords that takes an array of words
and returns the number of words that start with "B". Use
the startsWithB function within the countBWords function.
*/
function countBWords(words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (startsWithB(word)) {
      count++;
    }
  }
  return count;
}

console.log(countBWords(["boy", "Boy", "cat", "dog"])); // 2
console.log(countBWords(["boy", "toy", "cat", "dog"])); // 1

function highAndLow(numStr) {
  let nums = numStr.split(" ");
  let highest = -Infinity;
  let lowest = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > highest) {
      highest = nums[i];
    }

    if (nums[i] < lowest) {
      lowest = nums[i];
    }
  }

  return highest + " " + lowest;
}

console.log(highAndLow("1 2 3 2 5")); // return "5 1"
console.log(highAndLow("1 2 7 4 5")); // return "7 1"
console.log(highAndLow("1 9 3 4 8")); // return 9 1"

/*
We know the population for a small town at the beginning of a year. The population regularly increases by a certain percent per year and moreover a given number of new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to a population goal? Write this function.

it should accept the following arguments: current population, growth percentage, incoming residents, population goal

Example:

console.log(howManyYears(1500, 5, 100, 5000)); // 15
console.log(howManyYears(1500000, 2.5, 10000, 2000000)); // 10
console.log(howManyYears(1500000, 0.25, 1000, 2000000)); // 94
*/
function howManyYears(
  currentPopulation,
  growthPercentage,
  incomingResidents,
  populationGoal
) {
  let numYears = 0;
  let totalPopulation = currentPopulation;

  while (totalPopulation <= populationGoal) {
    totalPopulation += totalPopulation * (growthPercentage / 100) + incomingResidents;
    numYears++;
  }

  return numYears;
}

console.log(howManyYears(1500, 5, 100, 5000)); // 15
console.log(howManyYears(1500000, 2.5, 10000, 2000000)); // 10
console.log(howManyYears(1500000, 0.25, 1000, 2000000)); // 94

// Input string: "Four score and seven years ago."
// Output:
/*
  {
    "f": [ "four" ],
    "s": ["score", "seven"],
    "a": ["and"],
    ...
  }
*/
