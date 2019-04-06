/*
Create a function called isEqual that takes two string parameters
and returns whether the strings are the same.
*/
let isEqual = function (stringA, stringB) {
  return stringA === stringB;
}

console.log(isEqual("abc", "abc")); // true
console.log(isEqual("abc", "cba")); // false
console.log(isEqual("abc", "ABC")); // false
console.log(isEqual("My name is Joe", "My name is Joe")); // true
console.log(isEqual("My name is Joe", "This is not equal")); // false

/*
Write a function called multiply that multiplies three numbers together.
*/
console.log(multiply(1, 2, 3)); // 6
console.log(multiply(0, 100, 200)); // 0
console.log(multiply(5, 2, 2)); // 20
console.log(multiply(2, 2)); // 4

function multiply(num1 = 1, num2 = 1, num3 = 1) {
  return num1 * num2 * num3;
}

/*
sortaSum

Given 2 numbers, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.
*/
function sortaSum(a, b) {
  let sum = a + b;

  return (sum >= 10 && sum <= 19) ? 20 : sum;
}

 // (conditional) ? <return if true> : <return if false>
let sortaSumArrow = (a, b) => (a + b >= 10 && a + b <= 19) ? 20 : a + b;

console.log(sortaSumArrow(2, 4)); // 6
console.log(sortaSumArrow(5, 5)); // 20
console.log(sortaSumArrow(5, 10)); // 20
console.log(sortaSumArrow(10, 11)); // 21



let sum = (a, b) => a + b;

console.log(sum(2, 2));

/*
Create an arrow function that is assigned to a getFullName variable. It will take
two parameters a first name and a last name and return a full name.
*/
let getFullName = (firstName, lastName) => firstName + " " + lastName;

console.log(getFullName("Jane", "Doe")); // "Jane Doe"
console.log(getFullName("John", "Smith")); // "John Smith"

/*
Create an arrow function called formatCurrency that takes one number parameter
and returns a string formatted as a currency. (US dollars)
*/
let formatCurrency = amount => "$" + amount.toFixed(2);
console.log(formatCurrency(19.7777)); // $19.78
console.log(formatCurrency(30)); // $30.00