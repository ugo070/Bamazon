"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    productName: DataTypes.STRING,
    departmentName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stockQuantity: DataTypes.INTEGER
  });
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
