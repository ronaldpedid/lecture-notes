const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.send("Hello");
});

router.get("/", (request, response) => {
  let word = request.query.word.toLowerCase();

  // let indexRegex = word.search(/[aeiou]/i);

  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      response.send("First vowel at index: " + i);
      return;
    }
  }

  response.send("No vowels found.");
});

module.exports = router;