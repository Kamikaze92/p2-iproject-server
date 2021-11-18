'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
       UserId: 1,
       description: 'Bagaimana rasanya menjadi seorang programmer',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      UserId: 2,
      description: 'Saya sangat susah untuk menerima pelajaran apakah ada saran?',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 3,
      description: 'Motivasi apa yang selalu membuat kalian selalu berjuang?',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});

  }
};
