const router = require("express").Router();
const Student = require("../db").Student;

router.get("/", async (req, res) => {
  let students = await Student.findAll();

  res.render("list", { students });
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

router.post("/edit", async (req, res) => {
  await Student.upsert(req.body);

  res.redirect("/");
});

router.get("/edit/:id", async (req, res) => {
  let student = await Student.findByPk(req.params.id);

  res.render("edit", { student });
});

module.exports = router;