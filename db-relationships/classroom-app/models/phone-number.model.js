module.exports = (db) => {
  let PhoneNumber = db.sequelize.define("phoneNumber", {
    id: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    number: {
      type: db.Sequelize.STRING
    }
  });

  return PhoneNumber;
}