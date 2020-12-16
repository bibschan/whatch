'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('UserGroups', [{
        groupIdFK: 1,
        userIdFK: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        groupIdFK: 1,
        userIdFK: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
  ], {});
   
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('UserGroups', null, {});
    
  }
};
