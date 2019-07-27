const router = require("express").Router();
const Student = require("../db").Student;
const User = require("../db").User;
const PhoneNumber = require("../db").PhoneNumber;
const passport = require("passport");
const isLoggedIn = require("../controllers/auth-controller").isLoggedIn;

router.get("/login", (req, res) => {
  res.render("login", { flashes: req.flash("error") });
});

router.post("/login", passport.authenticate('local', { failureRedirect: "/login", failureFlash: true, successRedirect: "/" }));

router.get("/loginGithub", passport.authenticate('github', { scope: ['user:email'] }));

router.get(
  "/auth/callback",
  passport.authenticate('github', { failureRedirect: "/login", failureFlash: "Failed to login" }),
  (req, res) => { res.redirect("/") }
);

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  let { username, password } = req.body;

  User.register(username, password, (err, registeredUser) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    res.send("Created user: " + username);
  })
});

/* Everything below this requires authentication */
// router.use(isLoggedIn);

router.get("/", isLoggedIn, async (req, res) => {
  let students = await Student.findAll();

  res.render("list", { students, user: req.user });
});


router.get("/edit", (req, res) => {
  res.render("edit");
});

router.post("/edit", async (req, res) => {
  let { phone, id, name, email } = req.body;
  let student;

  if (id) {
    student = await Student.findByPk(id);
    student.name = name;
    // student.email = email;
    await student.save();
  }
  else {
    student = await Student.create(req.body);
  }

  let studentPhone = await PhoneNumber.create({ number: phone });
  await studentPhone.setStudent(student);

  res.redirect("/");
});

router.get("/edit/:id", async (req, res) => {
  let student = await Student.findByPk(req.params.id, {
    include: [
      {
        model: PhoneNumber,
        as: "phoneNumbers"
      }
    ]
  });
  console.log(student);

  res.render("edit", { student });
});

router.get("/delete/:id", async (req, res) => {
  await PhoneNumber.destroy({
    where: {
      studentId: req.params.id
    }
  })

  await Student.destroy({
    where: {
      id: req.params.id
    }
  });
  // let student = await Student.findByPk(req.params.id);
  // await student.destroy();

  res.redirect("/");
});

router.get("/logout", (req, res) => {
  req.logout();

  res.redirect("/login");
});

module.exports = router;