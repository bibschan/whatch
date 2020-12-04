"use strict";

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  Users.associate = function (models) {
    Users.belongsToMany(models.Groups, {through: 'UserGroups', foreignKey: 'userIdFK'})
    // Users.hasMany(models.UserChoices, {as: 'userIdFK'})
  };
  return Users;
};
