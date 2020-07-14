'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      adress2: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      },
      countryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Countries",
          key: "id"
        }
      },
      cityId: {
        type: Sequelize.INTEGER,
        references: {
          model: "cities",
          key: "id"
        }
      },
      zip: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};