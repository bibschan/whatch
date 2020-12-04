'use strict';
const { Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const UserChoices = sequelize.define('UserChoices', {
      movieId: DataTypes.INTEGER,
      userIdFK: DataTypes.INTEGER,
      groupIdFK: DataTypes.INTEGER
  }, {});
 
  UserChoices.addHook('afterCreate',  (user, options) => {
    // console.log(user.movieId + " meme " + user.groupIdFK)
    // if I use the findAll function to return all entries, I cannot access 
    // any object keys. Using a findOne for now
    const matches = UserChoices.findOne({
      where: {
        movieId: user.movieId,
        groupIdFK: user.groupIdFK,
        [Op.not]: [{ userIdFK: user.userIdFK }] 
      }
    }).then( response => 
      // response.dataValues
        sequelize.models.GroupChoices.create({
          
          groupIdFK: response.dataValues.groupIdFK,
          movieId: response.dataValues.movieId
        })
        .then( response => console.log(response) ).catch(
          error => console.log(error) )
      ).catch( error => console.log(error));
  })

  UserChoices.associate = function(models) {
    // associations can be defined here
  };
  return UserChoices;
};