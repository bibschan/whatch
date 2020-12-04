'use strict';
module.exports = (sequelize, DataTypes) => {
  const Groups = sequelize.define('Groups', {
  
    groupName:  {
      allowNull: false,
      type: DataTypes.STRING
    }

  }, {});
  Groups.associate = function(models) {
    Groups.belongsToMany(models.Users, {through: 'UserGroups', foreignKey: 'groupIdFK'});
    // Groups.belongsToMany(models.Users, {through: 'UserGroups'});
  };
  return Groups;
};