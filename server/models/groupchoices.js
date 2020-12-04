'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupChoices = sequelize.define('GroupChoices', {
    groupIdFK: {
      type: DataTypes.INTEGER
    },
    movieId: DataTypes.INTEGER
  }, {});
  GroupChoices.associate = function(models) {
    // associations can be defined here
    GroupChoices.belongsTo(models.Groups,{foreignKey: 'groupIdFK'})
  };
  return GroupChoices;
};