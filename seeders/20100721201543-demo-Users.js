'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [{
      firstName: 'admin',
      lastName: 'admin',
      email: 'admin',
      password: '6XPqsuVX2p1cCFvd4vK1iok9p3BASxV5mxwQudCeAtpfHK9/hhFRJSKSfda1VHvyR+oxDKftivCVZPgzB9XJRJbkMch3sxMYyW522ZkO4d/XP4mRsTInEZzd7DDqlTMCwbbjoJZ/kdgKstOPgyQP0lEsn8bfh6uBBK/QYUs8OZI=',
      phone: 2112321,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
