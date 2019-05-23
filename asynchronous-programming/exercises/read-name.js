const fs = require("fs");

fs.readFile("name.txt", "utf-8", (error, data) => {
  console.log(data);
  console.log("DONE READING FILE");
});

console.log("Reading the file");