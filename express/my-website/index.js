const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("[:date[clf]] :method :url :status :response-time ms - :res[content-length]"));
app.get("/page2.html", (req, res) => {
  res.send("<h1>This takes precedence</h1>");
});
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Now listening on port 3000");
})