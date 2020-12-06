'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('GroupChoices', 
      [
        {
          groupIdFK: 1,
          movieId: 80142521,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupIdFK: 1,
          movieId: 70307407,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupIdFK: 1,
          movieId: 423744,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupIdFK: 1,
          movieId: 70307747,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupIdFK: 1,
          movieId: 80153235,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupIdFK: 2,
          movieId: 80200767,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('GroupChoices', null, {});
    
  }
};
