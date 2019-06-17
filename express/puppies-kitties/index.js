const express = require("express");
const mainRouter = require("./routes");

const app = express();

app.use((req, res, next) => {
  console.log(req.method + " " + req.url);
  next();
});
app.use(express.json());
app.use("/", mainRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});