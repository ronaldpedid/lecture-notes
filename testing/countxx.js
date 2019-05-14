function countAllXs(string) {
  let xs = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === "x") {
      xs++;
    }
  }

  return xs;
}

console.log(0 < (200).length);
console.log(countAllXs(200));

module.exports = countAllXs;