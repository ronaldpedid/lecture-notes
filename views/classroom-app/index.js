const express = require("express");
const studentRouter = require("./routes");
const hbs = require("express-handlebars");
const db = require("./db");

const app = express();

app.engine("hbs", hbs( { extname: "hbs" } ));
app.set("view engine", "hbs");

app.use(express.urlencoded());
app.use(studentRouter);

app.listen(3000, () => {
  console.log("Now listening on port 3000");
});