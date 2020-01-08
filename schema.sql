CREATE DATABASE bamazondb;
USE bamazondb;

CREATE TABLE products (
  id Int(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR( 100) NOT NULL,
  department_name VARCHAR( 100 ) NOT NULL,
  price FLOAT NOT NULL,
  stock_quantity INT(11) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  updatedAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY ( id ) 
);  

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coffee", "Beverages", 4.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dinner rolls", "Bakery", "5.00", 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("milk","Dairy",3.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ketchup","Canned",6.00,60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Soap", "Personal Care", 7.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper towel", "Paper Goods", 2.45, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Detergent","Cleaners ",4.56,100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Produce", "vegetables",3.00,30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pork","Meat",10.00,20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ice cream", "Frozen Foods",2.29, 20);


"UPDATE product SET stock_quantity = stock_quantity - ? WHERE id =? ",
 [answer.amount, answer.product_id],
-- to refresh the bamazon database:
-- npx sequelize-cli db:seed:all --env production