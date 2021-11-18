'use strict';
const { hashPassword } = require('../helpers/bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
        {
         username: 'farhad',
         email: 'farhad@gmail.com',
         password: hashPassword('farhad'),
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        username: 'andi',
        email: 'andi@gmail.com',
        password: hashPassword('andi'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'budi',
        email: 'budi@gmail.com',
        password: hashPassword('budi'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
