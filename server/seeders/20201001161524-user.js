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
        },
        {
          id:3,
          firstName: "Carol",
          lastName: "Darski",
          email: "cdarski@gmail.com",
          password: "hey",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:4,
          firstName: "Bruna",
          lastName: "Garcia",
          email: "bgarcia@hotmail.com",
          password: "henlo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:6,
          firstName: "George",
          lastName: "Lin",
          email: "glin@gmail.com",
          password: "bro",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:7,
          firstName: "Martin",
          lastName: "Souza",
          email: "msouza@gmail.com",
          password: "bro2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
