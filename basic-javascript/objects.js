let person = {
  name: "Aaron Robinson",
  children: [
    "Claire",
    "Candace",
  ]
}

console.log(person.children[0]) // Claire
let myCar = {
  make: "Toyota",
  doors: 4,
  color: "silver",
  model: "Rav4"
}

myCar.mileage = 240000;

console.log(myCar);
console.log(myCar.mileage);
console.log(myCar["mileage"]);

person.car = myCar;
person.car.color = "red";
console.log(person);
console.log(myCar)