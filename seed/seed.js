"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Product",
      [
        {
          productName: "coffee",
          departmentName: "Beverages",
          price: 4.0,
          stockQuantity: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "dinner rolls",
          departmentName: "Bakery",
          price: 5.0,
          stockQuantity: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "milk",
          departmentName: "Dairy",
          price: 3.0,
          stockQuantity: 50,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Ketchup",
          departmentName: "Canned",
          price: 6.0,
          stockQuantity: 60,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Soap",
          departmentName: "Personal Care",
          price: 7.0,
          stockQuantity: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Paper towel",
          departmentName: "Paper Goods",
          price: 2.45,
          stockQuantity: 80,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Detergent",
          departmentName: "Cleaners",
          price: 4.56,
          stockQuantity: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Produce",
          departmentName: "vegetables",
          price: 3.0,
          stockQuantity: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Pork",
          departmentName: "Meat",
          price: 10.0,
          stockQuantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Ice cream",
          departmentName: "Frozen Foods",
          price: 2.29,
          stockQuantity: 20,
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
