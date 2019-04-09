/*
Initialize an empty array literal called numbers.
Console.log the array length. It should be 0.
*/
let numbers = [];

console.log(numbers.length);

/*
Push 1, 2, and 3 into your numbers array.
Console.log the array.
Console.log the length.
*/
numbers.push(1, 2, 3);
console.log(numbers);
console.log(numbers.length);

/*
Create a new empty array called nums.
Use a for loop to push 1 through 10 into the array.
Console.log your array.
*/
let nums = [];

for(let i = 1; i <= 10; i++) {
  nums.push(i);
}

console.log(nums);
console.log(nums.length);

/*
Initialize an array with the values of "red", "white", and "blue".
Use a for loop to console log each element individually.
*/
let colors = ["red", "white", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

/*
Swap the first element and the last element.
*/
let placeholder = colors[0];
colors[0] = colors[2];
colors[2] = placeholder;
console.log(colors);

/*
Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.

swapEnds([1, 2, 3, 4]) → [4, 2, 3, 1]
swapEnds([1, 2, 3]) → [3, 2, 1]
swapEnds([8, 6, 7, 9, 5]) → [5, 6, 7, 9, 8]
*/
function swapEnds(numArray) {
  let firstValue = numArray[0];
  let lastValue = numArray[numArray.length - 1]; // numArray[3]

  numArray[0] = lastValue;
  numArray[numArray.length - 1] = firstValue;

  return numArray;
}

console.log(swapEnds([1, 2, 3, 4])); // → [4, 2, 3, 1]
console.log(swapEnds([1])); // [1];
// console.log(swapEnds([1, 2, 3])); // → [3, 2, 1]
// console.log(swapEnds([8, 6, 7, 9, 5])); // → [5, 6, 7, 9, 8]

/*
Create a function called firstLast6 that returns a boolean. The boolean
indicates whether the first or last number in an array is 6.
*/
function firstLast6(numArray) {
  let first = numArray[0];
  let last = numArray[numArray.length - 1];

  return first === 6 || last === 6;
}

// let firstLast6 = numArray => numArray[0] === 6 || numArray[numArray.length - 1] === 6;

console.log(firstLast6([1, 2, 6])); // → true
console.log(firstLast6([6, 1, 2, 3])); // → true
console.log(firstLast6([13, 6, 1, 2, 3])); // → false

/*
Write a function called firstLastEven that takes one array argument
This function will return a boolean that indicates if the first and last elements are even. The array will always at least be size 1.

firstLastEven([3,2,1]); // returns false
firstLastEven([4,5,6,7,8]); // returns true
firstLastEven([2]); // returns true
*/

let firstLastEven = function (numbers) {
  let first = numbers[0];
  let last = numbers[numbers.length - 1];

  return first % 2 === 0 && last % 2 === 0;
}

console.log(firstLastEven([3,2,1])); // returns false
console.log(firstLastEven([4,5,6,7,8])); // returns true
console.log(firstLastEven([2])); // returns true

/*
Write a function called addMiddle that takes two arguments. The first argument is an array of any size. The second argument is the element to add to the middle of the array.
Return the array with the added middle element.


addMiddle([1,2,3,4], 7); //returns [1,2,7,3,4];
addMiddle([1,3], 2); //returns [1,2,3];
*/

function addMiddle(numArray, element) {
  let middleIndex = numArray.length / 2;
  numArray.splice(middleIndex, 0, element);

  return numArray;
}
console.log(addMiddle([1, 2, 3, 4], 7));

var colors1 = ["yellow", "green"];
var colors2 = ["red", "purple"];
var colors3 = ["brown", "orange"];

let combinedArray = [...colors1, ...colors2, ...colors3];
let combinedArray2 = colors1.concat(colors2, colors3);

console.log(combinedArray);
console.log(combinedArray2);

let myNums = [3, 6, 9, 10, 2000];
Math.max(...myNums); // Math.max(3, 6, 9, 10, 2000);

console.log(myNums.join("|"));

let names = [ "Joe", "Jill", "Jamie" ];

for (let name of names) {
  console.log("Hi, " + name);
}


function myJoin(stringArray, delimiter) {
  let joinedString = "";

  for(let i = 0; i < stringArray.length; i++) {
    if (i === stringArray.length - 1) {
      joinedString += stringArray[i];
    }
    else {
      joinedString += stringArray[i] + delimiter;
    }
  }

  return joinedString;
}

console.log(myJoin(["red", "blue", "green"], "*")); // "red*blue*green"