let usernames = ["john123", "alex222", "sandra1"];

let isValid = usernames.every(username => {
  if (username.length < 6 || username.length > 10) {
    return false;
  }

  let characters = username.split("");
  let lowerCase = characters.find(isLowerCase);
  let number = characters.find(character => character >= 0 && character <= 9);
  let specialChar = characters.find(
    character =>
      !isLowerCase(character) &&
      !(character >= "0" && character <= "9") &&
      !(character >= "A" && character <= "Z")
  );

  if (lowerCase && number && !specialChar) {
    return true;
  }
  else {
    return false;
  }
});

function isLowerCase(character) {
  return character >= "a" && character <= "z";
}

console.log(isValid);