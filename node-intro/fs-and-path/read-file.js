const fs = require("fs");

let fileContents = fs.readFileSync("notes.txt", "utf-8");
fs.writeFileSync("notes.txt", "Mmm, pancakes!"); // overwrites the file
fs.appendFileSync("notes.txt", `
Mmmmm, bacon
Mmmmm, cheese
`);

console.log(fileContents);