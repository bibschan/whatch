"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id:1,
          firstName: "Bibi",
          lastName: "Souza",
          email: "souzabibi@hotmail.com",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:2,
          firstName: "Andrew",
          lastName: "Lin",
          email: "alin@gmail.com",
          password: "456",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
