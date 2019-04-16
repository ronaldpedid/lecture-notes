/*
Given the following object, write a for loop to console log each of the colors.
*/
let flag = {
  country: "United States",
  colors: [
    "red",
    "white",
    "blue",
  ],
}
// your code below
for(let i = 0; i < flag.colors.length; i++) {
  console.log(flag.colors[i]);
}

/*
Given the following object, create a "c" property that is equal to properties a + b.
*/
let myObj = { a: 1, b: 6 };

myObj.c = myObj.a + myObj.b;

console.log(myObj);

/*
Create a function called makeC that takes a single object parameter. Similar to
above, it will add the a and b properties and assign them to the c property.
Return the entire object.
*/
function makeC(myObject) {
  myObject.c = myObject.a + myObject.b;

  return myObject;
}

console.log(makeC({a: 2, b: 5})) // { a: 2, b: 5, c: 7 }
console.log(makeC({a: 4, b: 2})) // { a: 4, b: 2, c: 6 }

/*
Create a function called objectBully that takes a single object parameter.
If the key "a" has a value, set the key "b" to have that value, and set the key "a" to have the value "". Basically "b" is a bully, taking the value and replacing it with the empty string. Return the changed object.
*/
function objectBully(myObject) {
  if (myObject.a) {
    myObject.b = myObject.a;
    myObject.a = "";
  }

  return myObject;
}

console.log(objectBully({a: "candy", b: "dirt"})); // → {"a": "", "b": "candy"}
console.log(objectBully({a: "candy"})); // → {"a": "", "b": "candy"}
console.log(objectBully({a: "candy", b: "carrot", c: "meh"}))
// → {"a": "", "b": "candy", "c": "meh"}

/*
Create a function called objectShare that takes one object parameter. Modify and return the given object as follows: if the key "a" has a value, set the key "b" to have that same value. In all cases remove the key "c", leaving the rest of the map unchanged.

delete myObject.c
*/
function objectShare(myObject) {
  if (myObject.a) {
    myObject.b = myObject.a;
  }

  delete myObject.c

  return myObject;
}

console.log(objectShare({a: "aaa", b: "bbb", c: "ccc"})); // {"a": "aaa", "b": "aaa"}
console.log(objectShare({b: "xyz", c: "ccc"})); // {"b": "xyz"}
console.log(objectShare({a: "aaa", c: "meh", d: "hi"})) // {"a": "aaa", "b": "aaa", "d": "hi"}