const fs = require("fs");

let contents = fs.readFileSync("colors.csv", "utf-8");
let colors = contents.split(",");

console.log(colors.indexOf("blue"));

try {
  fs.readFileSync("missing-file.txt", "utf-8");
}
catch (error) {
  switch (error.code) {
    case 'ENOENT':
      console.error("missing file");
      break;
    case 'ENOTDIR':
      console.error("not a directory");
      break;
  }
}