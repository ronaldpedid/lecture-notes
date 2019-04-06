let add = function(a, b = 0) {
  let sum = a + b;

  return sum;
};

/*
Create a function that returns true if the argument provided is a number, and false otherwise.
*/
let isNumber = function(myVariable) {
  return typeof myVariable === "number";
};

console.log(isNumber(123)); // true
console.log(isNumber("cat")); // false
console.log(isNumber(456)); // true

/*
Write a function called greet that takes a single
string parameter that is a person's name.

When you call greet, it should print "Hi, <name>!".
*/
let greet = function(name) {
  console.log(`Hi, ${name}!`);
};

greet("Bob"); // "Hi, Bob!"
greet("Karen"); // "Hi, Karen!"

/*
Write a function called addOne that
takes a single number argument and returns
the input number + 1.
*/
let addOne = function(a) {
  return ++a;
};
let addOneAgain = addOne;
console.log(addOne(2)); // returns 3
console.log(addOne(5)); // returns 6
console.log(addOneAgain(7)); // returns 8

function sayHi(name) {
  console.log(`Hi, ${name}`);
}
sayHi("Michaelangelo");
sayHi("Bob");
sayHi();

console.log(add(1));

/*
We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

Create a function called monkeyTrouble(aSmile, bSmile)
*/
function monkeyTrouble(aSmile, bSmile) {
  return (aSmile && bSmile) || (!aSmile && !bSmile);
}
console.log(monkeyTrouble(true, true)); // → true
console.log(monkeyTrouble(false, false)); // → true
console.log(monkeyTrouble(true, false)); // → false
