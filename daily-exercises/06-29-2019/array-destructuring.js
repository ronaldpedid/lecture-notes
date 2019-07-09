let colors = ["red", "white", "blue"];

/*
Create three variables called red, white, and blue based off of the
colors array.
*/
let [red, white, blue] = colors;
console.log(red);
console.log(white);
console.log(blue);

let names = [
  [ "Max", "Joe" ],
  [ "Sharon", "Kate" ],
  [ "Cindy", "Bill" ]
]

/*
Use array destructuring to create a variable called max that is
the first element within the inner array and also the first element
within the outter array.
*/

let [[max]] = names;

console.log(max);

let people = [
  {
    name: "Robert Smith",
    birthdate: "05-05-1985",
    id: 30
  },
  {
    name: "Jane Johnson",
    birthdate: "06-15-1987",
    id: 31
  },
]

/*
Create a variable called robertId based off of the id property of
the first element in the array. Use both array destructuring and
object destructuring.
*/
let [{id: robertId}, {id: janeId}] = people;
console.log(robertId);
console.log(janeId);