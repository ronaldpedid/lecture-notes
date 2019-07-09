const Sequelize = require("sequelize");
const sequelize = new Sequelize("movie", "root", "rootroot",
  {
    dialect: "mariadb",
    host: "localhost",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

sequelize.authenticate().then(
  () => { console.log("succesfully connected.")},
  () => { console.log("failed to connect.")}
)

let db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Movie = require("../models/movie.model")(db);

sequelize.sync();

module.exports = db;
/*
{
  Sequelize,
  sequelize,
  Movie,
}
*/