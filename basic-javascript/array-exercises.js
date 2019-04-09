/*
Create a function called sum3 that has one array parameter. Given an array of ints length 3, return the sum of all the elements.

sum3([1, 2, 3]) → 6
sum3([5, 11, 2]) → 18
sum3([7, 0, 0]) → 7
*/
function sum3(nums) {
  if (nums.length !== 3) {
    return null;
  }

  let sum = nums[0] + nums[1] + nums[2];

  return sum;
}

console.log(sum3([1, 2, 3]));
console.log(sum3([5, 11, 2]));
console.log(sum3([7, 0, 0]));

/*
Create a function called makeEndsMeet that takes one array parameter.
The function will return an array with the first and last element of
the input array.

makeEndsMeet([1, 2, 3]) → [1, 3]
makeEndsMeet([1, 2, 3, 4]) → [1, 4]
makeEndsMeet([7, 4, 6, 2]) → [7, 2]
*/
function makeEndsMeet(nums) {
  let first = nums.shift();
  let last = nums.pop();

  // let newArray = [first, last];
  let newArray = [];
  newArray.push(first, last);

  return newArray;
}

let makeEndsMeet2 = nums => [nums[0], nums[nums.length - 1]];

console.log(makeEndsMeet([1, 2, 3]));
console.log(makeEndsMeet([1, 2, 3, 4]));
console.log(makeEndsMeet([7, 4, 6, 2]));

/*
Create a function called has23 that takes a single array parameter.
Given an input of an array of length 2, return true if the array
contains a 2 or a 3.

has23([2, 5]) → true
has23([4, 3]) → true
has23([4, 5]) → false
*/
let has23 = nums => {
  let has2 = nums[0] === 2 || nums[1] === 2;
  let has3 = nums[0] === 3 || nums[1] === 3;

  return has2 || has3;
}

console.log(has23([2, 5]));
console.log(has23([4, 3]));
console.log(has23([4, 5]));
