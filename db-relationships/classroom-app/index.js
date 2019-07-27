const express = require("express");
const studentRouter = require("./routes");
const hbs = require("express-handlebars");
const db = require("./db");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");
const GithubStrategy = require("passport-github2").Strategy;
const User = require("./db").User;

const app = express();

app.engine("hbs", hbs( { extname: "hbs" } ));
app.set("view engine", "hbs");

app.use(flash());
app.use(session({
  secret: "keyboard cat"
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(db.User.createStrategy());
passport.use(new GithubStrategy({
  clientID: "YOUR CLIENT ID",
  clientSecret: "YOUR CLIENT SECRET",
  callbackURL: "http://localhost:3000/auth/callback"
},
  (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    User.findOrCreate({ where: { username: profile.username } })
      .then(([user, created]) => {
        done(null, user);
      })
      .catch(err => {
        done(err, null);
      });
  }
));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());
app.use(express.static("public"));
app.use(express.urlencoded());
app.use(studentRouter);

app.listen(3000, () => {
  console.log("Now listening on port 3000");
});