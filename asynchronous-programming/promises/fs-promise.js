const fs = require("fs").promises;

async function outputFile() {
  try {
    let readPromise = fs.readFile("notes.txt", "utf-8");
    let data = await readPromise;
    await fs.writeFile("new-file.txt", "Wrote a new file with a promise.");
    let newFileData = await fs.readFile("new-file.txt", "utf-8");
    console.log(newFileData);
  }
  catch (error) {
    console.error(error.message);
  }
}

outputFile();