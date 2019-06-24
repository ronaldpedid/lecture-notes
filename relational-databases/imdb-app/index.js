const express = require("express");
const moviesRouter = require("./routes/movies");

const app = express();

app.use(express.json());

app.use("/", moviesRouter);

app.listen(3000, () => {
  console.log("Now listening on port 3000");
});