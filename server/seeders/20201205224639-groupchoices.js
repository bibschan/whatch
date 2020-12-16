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
        }
        
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('GroupChoices', null, {});
    
  }
};
