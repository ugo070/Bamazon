// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Product model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the product
  app.get("/api/product", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Product.findAll({}).then(function(dbProduct) {
      // We have access to the product as an argument inside of the callback function
      res.json(dbProduct);
    });
  });

  // POST route for saving a new product
  app.post("/api/product", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Product.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbProduct) {
      // We have access to the new product as an argument inside of the callback function
      res.json(dbProduct);
    });
  });

  // DELETE route for deleting product. We can get the id of the product we want to delete from
  // req.params.id
  app.delete("/api/product/:id", function(req, res) {});

  // PUT route for updating product. We can get the updated todo from req.body
  app.put("/api/product", function(req, res) {});
};
