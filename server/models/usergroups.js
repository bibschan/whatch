'use strict';

// import Groups from  "./groups";

module.exports = (sequelize, DataTypes) => {
  const UserGroups = sequelize.define('UserGroups', {
    groupIdFK: {
      type: DataTypes.INTEGER,
    },
    userIdFK: {
      type: DataTypes.INTEGER,  
    },

  }, {});
  UserGroups.associate = function(models) {
    UserGroups.belongsTo(models.Users, {foreignKey: 'userIdFK'})
    UserGroups.belongsTo(models.Groups, {foreignKey: 'groupIdFK'})
    // UserGroups.hasMany(models.Groups, {foreignKey: 'groupIdFK'})
  };
  
  return UserGroups;
};