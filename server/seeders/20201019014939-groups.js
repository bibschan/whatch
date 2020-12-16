'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Groups', [{
          id: 1,
          groupName: 'Family <3',
          createdAt: new Date(),
          updatedAt: new Date()
        }
        
        ], {})
        // this code below is just restarting the id auto-increment count. Without this code, I ran into issues such as "this id already exists"
        .then(async () => db.query(`ALTER SEQUENCE "${model.Groups}_id_seq" RESTART WITH ${await model.count() + 1}`))
        .catch(error => {
            if (error.message.indexOf('already exists') > -1) return
            console.error(error)
        });
   
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Groups', null, {});
 
  }
};
