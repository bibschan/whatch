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
      },
      {
        groupIdFK: 2,
        userIdFK: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        groupIdFK: 2,
        userIdFK: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        groupIdFK: 2,
        userIdFK: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        groupIdFK: 3,
        userIdFK: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        groupIdFK: 3,
        userIdFK: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        groupIdFK: 3,
        userIdFK: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        groupIdFK: 3,
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
