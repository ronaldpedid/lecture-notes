function reverseString(myString) {
  let reverse = "";
  let characters = myString.split("");

  while (characters.length > 0) {
    let popped = characters.pop();
    reverse += popped;
  }

  return reverse;
}

console.log(reverseString('Hello, World!'));
console.log(reverseString('This is a test'));
console.log(reverseString('Javascript is great!'));
console.log(reverseString('wRjuUJvJxbnyTB3?sCLAp2mbGL3xe8'));
console.log(reverseString('A'));

/*
Create a function called isPalindrome that takes a single string
and returns a boolean indicating if the string is a palindrome.
*/
function isPalindrome(word) {
  let halfLength = word.length / 2;

  for (let i = 0; i < halfLength; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("bob")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("cat")); // false
console.log(isPalindrome("civic")); // true