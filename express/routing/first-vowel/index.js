const express = require("express");
const firstVowelRouter = require("./routes/first-vowel");

const app = express();
app.use("/first-vowel", firstVowelRouter);

app.listen(3000, () => {
  console.log("Now listening on port 3000");
});