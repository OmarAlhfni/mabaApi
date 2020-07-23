'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Categories', [{
      name: 'Accessories & Supplies',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Camera & Photo',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Headphones',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Security & Surveillance',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Video Game Consoles & Accessories',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});

  }
};
