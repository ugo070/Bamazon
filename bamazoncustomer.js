var mySql = require("mysql");
var inquirer = require("inquirer");
var products;
var connection = mySql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazondb"
});
connection.connect(function(error) {
  if (error) {
    console.log(error);
  } else {
    product();
  }
});
function product() {
  connection.query("SELECT * FROM product", function(error, data) {
    if (error) {
      console.log(error);
    } else {
      products = data;
      console.table(data);
      userRequest();
    }
  });
}
function userRequest() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "product_id",
        message: "what is the id of product you like to purchase"
      },
      {
        type: "input",
        name: "amount",
        message: "How many do you want to buy"
      }
    ])
    .then(function(answer) {
      connection.query(
        "UPDATE product SET stock_quantity = stock_quantity - ? WHERE id =? ",
        [answer.amount, answer.product_id],
        function(error) {
          if (error) {
            console.log(error);
          } else {
            product();
          }
        }
      );
    });
}
