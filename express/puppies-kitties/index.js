const express = require("express");
const mainRouter = require("./routes");

const app = express();

app.use(express.json());
app.use("/", mainRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});