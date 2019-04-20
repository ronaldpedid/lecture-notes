/*
Create a function called makeABBA that takes two parameters (stringA, stringB). Return the result of putting them together in the form of ABBA.
*/
function makeABBA(stringA, stringB) {
  return "\"" + stringA + stringB + stringB + stringA + "\"";
}

console.log(makeABBA("Hi", "Bye")); // "HiByeByeHi"
makeABBA("Yo", "Alice"); // "YoAliceAliceYo"
makeABBA("Dancing", "Queen"); // "DancingQueenQueenDancing"

/*
Create a function called firstTwo that takes a single string parameter.
The function returns the first two characters of the string.
*/

function firstTwo(string) {
  return string[0] + string[1]
}

console.log(firstTwo("Hello")); //  "He"
firstTwo("abcdefg"); //  "ab"
firstTwo("ab"); //  "ab"

/*
Create a function called middleTwo that takes a single string parameter of even length.

Return the middle two characters.
*/
function middleTwo(word) {
  let startingIndex = word.length / 2 - 1;

  return word.substr(startingIndex, 2);
}

console.log(middleTwo("string")); // "ri"
middleTwo("code"); // "od"
middleTwo("Practice"); // "ct"

/*
Create a function called repeat that takes two parameters, a string, and a number. Return a string that is the input string repeated the number of times specified by the number parameter.
*/

function repeat(word, num) {
  let result = "";

  for (let i = 0; i < num; i++) {
    result += word;
  }

  return result;
}

console.log(repeat("Hi", 3)); // "HiHiHi"
repeat("Hi", 5); // "HiHiHiHiHi"
repeat("Hello", 2); // "HelloHello"