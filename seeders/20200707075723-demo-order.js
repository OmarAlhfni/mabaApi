'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('People', [{
      firstName: 'o',
      lastName: 'o',
      email: 'o',
      address: 'o',
      adress2: 'o',
      UserId: 1,
      countryId: 1,
      cityId: 1,
      zip: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});

  }
};
