'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Groups', [{
          id: 1,
          groupName: 'Family <3',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          groupName: "Best Friends",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          groupName: "Brothers in action",
          createdAt: new Date(),
          updatedAt: new Date()
        }
        
        ], {});
   
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Groups', null, {});
 
  }
};
