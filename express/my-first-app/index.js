const express = require("express");
const emoji = require("node-emoji");

const app = express();

app.get("/", (request, response) => {
  console.log(request.ip);
  console.log(request.headers);
  response.send(`<h1> Welcome to Aaron's express app! </h1 >`);
});

app.get("/pizza", (request, response) => {
  // "content-type: text/html"
  response.send("Here's some pizza. " + emoji.get("pizza"));
});

app.get("/person/:id", (request, response) => {
  let bob = {
    id: 100,
    name: "Bob",
    location: "Rogers, AR"
  }

  // "content-type: application/json"
  response.json(bob);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});