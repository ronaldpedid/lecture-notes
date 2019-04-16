// When a primitive is assigned to a variable, it is assigned a copy of the *value*.
let a = 7;
let b = a;

b = 9;

console.log(a);
console.log(b);

let myObjectA = { number: 7 };
let myObjectB = myObjectA;

myObjectB.number = 9;

console.log(myObjectA.number);


let person1 = { name: "Bob" };
let person2 = { name: "Bob" };

console.log(person1 === person2);
console.log(person1.name === person2.name);

let person3 = person1;

console.log(person3 === person1);

function newName(person) {
  person.name = "John";

  return person;
}

let bob = { name: "Bob" };
newName(bob);
console.log(bob);

let value = 7;

function add3(number) {
  number = number + 3;
}

add3(value);
console.log(value);

console.log(typeof []);

let myArrayObject = {
  length: 3,
  0: "John",
  1: "Jerry",
  2: "Jane",
}

console.log(myArrayObject[0]);

console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false