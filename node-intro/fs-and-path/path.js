const path = require("path");
const fs = require("fs");

let directory = "~/dev/projects/script.js";

console.log(path.basename(directory));
console.log(path.dirname(directory));
console.log(path.resolve("non-existent-file.txt"));
console.log(path.resolve("..", "folder1", "folder2", "script.js"));
console.log(__dirname);
console.log(__filename);

console.log(path.join("/", "tmp"));

let newFilePath = path.join(__dirname, "..", "temp.txt");
path.join("~", "backend-class", "my-file.txt");
"/home/Users/arobin3/backend-class/my-file.txt"

fs.writeFileSync(newFilePath, "some text");
console.log("New file created " + newFilePath);
fs.unlinkSync(newFilePath);
console.log("File deleted " + newFilePath);