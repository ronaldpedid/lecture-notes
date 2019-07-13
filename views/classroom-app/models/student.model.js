/*
Create a model with two properties:
id (primary key, autoincrement)
name (string)
*/
module.exports = (db) => {
  let Student = db.sequelize.define("student", {
    id: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: db.Sequelize.STRING
    }
  });

  return Student;
}