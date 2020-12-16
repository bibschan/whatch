'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('UserChoices', [{
       movieId: 80104434, //netflix ID, title is Animal Kingdom
       userIdFK: 1,
       groupIdFK: 1,
       createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
        movieId: 423744, //netflix ID, title is Dawn of the Dead
        userIdFK: 2, //andy
        groupIdFK: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 80104434, //netflix ID, title is Animal Kingdom
       userIdFK: 2, //andy
       groupIdFK: 1,
       createdAt: new Date(),
       updatedAt: new Date(),
      }    
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('UserChoices', null, {});
    
  }
};
