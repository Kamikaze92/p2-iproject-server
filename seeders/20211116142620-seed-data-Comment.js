'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [
      {
       UserId: 2,
       PostId: 1,
       description: 'Rasanya menyenangkan jika kau menyukai tantangan dan selalu ingin improve',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      UserId: 3,
      PostId: 2,
      description: 'Apakah kau memiliki masalah medis yang membuatmu susah menerima pelajaran',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 1,
      PostId: 3,
      description: 'Your hard works will pay off -anonymous',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 2,
      PostId: 3,
      description: 'Sacrifice your time to be dicipline on what you want to achieve, and you are a winner',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
