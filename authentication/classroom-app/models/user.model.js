const passportLocalSequelize = require('passport-local-sequelize');

module.exports = (db) => {
  let User = db.sequelize.define("user", {
    id: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: db.Sequelize.STRING
    },
    myhash: {
      type: db.Sequelize.TEXT
    },
    mysalt: {
      type: db.Sequelize.TEXT
    }
  });

  passportLocalSequelize.attachToUser(User, {
    usernameField: 'username',
    hashField: 'myhash',
    saltField: 'mysalt'
  });

  return User;
}
