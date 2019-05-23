const fs = require("fs");

fs.readFile("notes.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  fs.writeFile("new-file.txt", "Hello new file!", (error) => {
    if (error) {
      console.log(error);
      return;
    }

    fs.readFile("our-file.txt", "utf-8", (error, data) => {
      console.log(data);
    });

    console.log("file written");
  })

  console.log(data);
});

console.log("Async read file demo");