/*
Create function called getFattestSquirrel that takes a single
array parameter and returns the largest squirrel weight.
*/
function getFattestSquirrel(squirrels) {
  let fattest = 0;

  for(let i = 0; i < squirrels.length; i++) {
    let current = squirrels[i];

    if (current > fattest) {
      fattest = current;
    }
  }

  return fattest;
}

console.log(getFattestSquirrel([ 1, 7, 22, 7, 30, 5 ])); // 30
console.log(getFattestSquirrel([ 1, 7])); // 7
console.log(getFattestSquirrel([ 100, 70, 3])); // 100

/*
Create a function called countEvens that has a single array parameter.
Return the number of even integers in the array.

countEvens([2, 1, 2, 3, 4]) → 3
countEvens([2, 2, 0]) → 3
countEvens([1, 3, 5]) → 0
*/
function countEvens(nums) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    if (current % 2 === 0) {
      counter++;
    }
  }

  return counter;
}

console.log(countEvens([2, 1, 2, 3, 4]));
console.log(countEvens([2, 2, 0]));
console.log(countEvens([1, 3, 5]));