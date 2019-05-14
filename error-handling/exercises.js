/*
Write a function that accepts a string, if the string is a single word, return the number 1. Otherwise, throw an error that has a message of "Invalid string. Number of words: <insert number of words>". Demonstrate your error handling.
*/

function oneWordString(string) {
  let words = string.split(" ");

  if (words.length === 1) {
    return 1;
  }
  else {
    throw new Error("Invalid string. Number of words: " + words.length);
  }
}

function callMyFunction() {
  try {
    oneWordString("one two");
  }
  catch (error) {
    return "catch";
  }
  finally {
    return "finally";
  }
}

console.log(callMyFunction());