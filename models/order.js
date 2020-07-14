'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    adress2: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    countryId: DataTypes.INTEGER,
    cityId: DataTypes.INTEGER,
    zip: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};