"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Product",
      [
        {
          product_name: "coffee",
          department_name: "Beverages",
          price: 4.0,
          stock_quantity: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_name: "dinner rolls",
          departmentName: "Bakery",
          price: 5.0,
          stock_quantity: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_name: "milk",
          department_name: "Dairy",
          price: 3.0,
          stock_quantity: 50,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_name: "Ketchup",
          department_name: "Canned",
          price: 6.0,
          stockQuantity: 60,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_name: "Soap",
          department_name: "Personal Care",
          price: 7.0,
          stockQuantity: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_name: "Paper towel",
          department_name: "Paper Goods",
          price: 2.45,
          stock_quantity: 80,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_name: "Detergent",
          department_name: "Cleaners",
          price: 4.56,
          stock_quantity: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_name: "Produce",
          department_name: "vegetables",
          price: 3.0,
          stock_quantity: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_name: "Pork",
          department_name: "Meat",
          price: 10.0,
          stockQuantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_name: "Ice cream",
          department_name: "Frozen Foods",
          price: 2.29,
          stock_quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Product");
  }
};
