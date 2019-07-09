module.exports = (db) => {
  const Movie = db.sequelize.define("movie", {
    id: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: db.Sequelize.STRING,
    },
    released: {
      type: db.Sequelize.DATEONLY,
    },
  });

  return Movie;
};