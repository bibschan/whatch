"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[
  env
];
const db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// //Models/tables
// const users = sequelize.define("Users");
// const categories = sequelize.define("Categories");
// const user_categories = sequelize.define("User_categories");

// //Relations
// // db.Categories.hasMany(db.users);
// categories.associate = (models) => {
//   categories.belongsToMany(db.users, {
//     through: "User_categories",
//   });
// };

// users.associate = (models) => {
//   users.belongsToMany(db.categories, {
//     through: "User_categories",
//   });
// };

//db.Users.hasMany(db.categories);
// unsure if I need to declare the belongs to relationship here
// db.user_categories.belongsTo(db.users);
// db.user_categories.belongsTo(db.categories);

module.exports = db;
