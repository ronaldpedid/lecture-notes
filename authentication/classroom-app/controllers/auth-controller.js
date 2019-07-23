exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error', 'Oops you must be logged in to do that!');

  res.redirect("/login");
}