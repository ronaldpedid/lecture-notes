let person = {
  id: 30,
  name: "Robert Smith",
  birthdate: "05-05-1985"
}

/*
  Using object destructuring, create an id and name variable
  based on the 'person' object. Logs those variables to
  the console.
*/

let { id, name } = person;
console.log(id);
console.log(name);

/*
  Create a "birthday variable based on the birthdate property in the
  person object. Log the birthday variable to the console.
*/
let { birthdate: birthday } = person;
console.log(birthday);