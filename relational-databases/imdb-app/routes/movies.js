const router = require("express").Router();
const db = require("../db");

router.get("/movies", async (req, res) => {
  let resultSet = await db.query("SELECT * FROM movie;");

  res.json(resultSet);
});

router.get("/movies/:id", async (req, res) => {
  let resultSet = await db.query("SELECT * FROM movie WHERE id=" + req.params.id);

  if (resultSet.length) {
    res.json(resultSet[0]);
  }
  else {
    res.status(404).send();
  }
});

router.post("/movies", async (req, res) => {
  let title = req.body.title;
  let released = req.body.released;

  let sql = `INSERT INTO movie (title, released) VALUES ("${title}", "${released}")`;
  let movie = await db.query(sql);

  res.json(movie);
});

module.exports = router;