const express = require("express");
const db = require("./db");
const hbs = require("express-handlebars");
const Movie = db.Movie;

const app = express();

app.set("view engine", "hbs")
app.engine("hbs", hbs({
  extname: "hbs"
}));
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/addMovie", async (req, res) => {
  let [savedMovie] = await Movie.findOrCreate({ where: req.body });

  res.render("add-movie", { title: savedMovie.title, released: savedMovie.released });
});

app.get("/movies", async (req, res) => {
  let limit = req.query.limit && parseInt(req.query.limit);
  let movies = await Movie.findAll({ limit: limit, order: req.query.sort && [req.query.sort] });

  res.json(movies);
});

app.post("/movies", async (req, res) => {
  let [savedMovie] = await Movie.findOrCreate({ where: req.body });

  res.json(savedMovie);
});

app.get("/movies/:id", async (req, res) => {
  let movie = await Movie.findByPk(req.params.id);

  if (!movie) {
    return res.status(404).send();
  }

  res.json(movie);
});

app.put("/movies/:id", async (req, res) => {
  let movie = await Movie.findByPk(req.params.id);

  movie.title = req.body.title;
  movie.released = req.body.released;

  await movie.save();

  let updatedMovie = await Movie.findByPk(req.params.id);
  res.json(updatedMovie);
});

app.delete("/movies/:id", async (req, res) => {
  let movie = await Movie.findByPk(req.params.id);

  await movie.destroy();

  res.status(204).send();
});

app.listen(3000, () => {
  console.log("Now listening on port 3000");
});