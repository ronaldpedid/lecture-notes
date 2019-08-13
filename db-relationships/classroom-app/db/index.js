const Sequelize = require("sequelize");
const sequelize = new Sequelize("classroom", process.env.DB_USER, process.env.DB_PASSWORD,
  {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialectOptions: {
      options: {
        encrypt: (process.env.DB_ENCRYPT === 'true')
      }
    }
  },
);

sequelize.authenticate().then(
  () => { console.log("succesfully connected.")},
  () => { console.log("failed to connect.")}
)

let db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Student = require("../models/student.model")(db);
db.User = require("../models/user.model")(db);
db.PhoneNumber = require("../models/phone-number.model")(db);

db.Student.hasMany(db.PhoneNumber);
db.PhoneNumber.belongsTo(db.Student);

sequelize.sync();

module.exports = db;