function Car () {
  this.color = "red";
  this.isStarted = false;
}

Car.prototype.start = function () {
  this.isStarted = true;
}

Car.prototype.stop = function () {
  this.isStarted = false;
}

let car1 = new Car();
let car2 = new Car();

/*
What happens when you use "new"
1. Creates a new empty object
2. new sets `this` to point to the new object
3. With `this` set up, we call the constructor function
4. The body of the function assigns the properties
*/

console.log(car1.color);
console.log(car2.color);

car1.hasOwnProperty("color"); // true
car1.start();
console.log(car1.isStarted);

car1.color = "purple";

console.log(car1.color);
console.log(car2.color);