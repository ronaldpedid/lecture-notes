function myFunction() {
  a = 20;
}

myFunction();

console.log(a);

if (true === true) {
  var b = 30;
  var i;
}
console.log(b);

// let i = 10;
// let i = 10;

for (let i = 0; i <= 10; i++) {
  // console.log(i);
}

// console.log(i);

/*
Write a function that accepts an array of words as strings and returns a string that is a sentence. Be sure to include a period at the end of your sentence. As this is practice using the concept of scope, please do not use Array's join method.
*/
function makeSentence(wordArray) {
  // Create a variable that is set to an empty string.
  let sentence = "";

  // Loop over the wordArray and concatenate each word onto your variable plus a space
  // " "
  for (let i = 0; i < wordArray.length; i++) {
    if (i === wordArray.length - 1) {
      sentence += wordArray[i] + ".";
    }
    else {
      sentence += wordArray[i] + " ";
    }
  }

  // After your loop, return the variable.
  return sentence;
}

function makeSentenceLikeJustin(wordArray) {
  // Create a variable that is set to an empty string.
  let sentence = "";

  // Loop over the wordArray and concatenate each word onto your variable plus a space
  // " "
  for (let i = 0; i < wordArray.length; i++) {
    sentence += wordArray[i] + " ";
  }

  sentence = sentence.trimEnd();
  sentence += ".";

  // After your loop, return the variable.
  return sentence;
}

function makeSentenceWithJoin(words) {
  return words.join(" ") + ".";
}

let sentence = makeSentenceLikeJustin(['This', 'is', 'an', 'example', 'sentence']);
console.log(sentence);
// outputs "This is an example sentence."

/*
The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".
*/
function makeTags(tag, text) {
  let openTag  = "<" + tag + ">";
  let closeTag = "</" + tag + ">";

  // return `<${tag}>${text}</${tag}>`
  return openTag + text + closeTag;
}

makeTags("i", "Hello world");    // "<i>Hello world</i>"
makeTags("p", "Hello world");    // "<p>Hello world</p>"
makeTags("span", "My sentence"); // "<span>My sentence</span>"

/*
Create a function that that accepts a sentence as a string and returns the longest word in the sentence as a string with just that word.
*/
function findLongestWord(sentence) {
  let wordArray = sentence.split(" ");
  let longestWord = "";

  // Loop over every element and find the longest word
  for (let word of wordArray) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

let sentence = 'Hello sunshine';
console.log(findLongestWord(sentence)); // 'sunshine'
