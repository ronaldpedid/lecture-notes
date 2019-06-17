const router = require("express").Router();
const kittiesRouter = require("./kitties");
const puppiesRouter = require("./puppies");

router.use("/kitties", (req, res, next) => { console.log("kitties routes"); next(); }, kittiesRouter);
router.use("/puppies", puppiesRouter);

router.get("/", (req, res) => {
  res.send("Welcome to puppies and kitties!");
});

module.exports = router;