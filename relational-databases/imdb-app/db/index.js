const mariadb = require("mariadb");

const pool = mariadb.createPool(
  {
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "imdb",
    connectionLimit: 5,
  }
)

module.exports = pool;