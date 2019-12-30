CREATE DATABASE bamazondb;
USE bamazondb;

CREATE TABLE product (
  id Int(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR( 100) NOT NULL,
  department_name VARCHAR( 100 ) NOT NULL,
  price FLOAT NOT NULL,
  stock_quantity INT(11) NOT NULL,
    PRIMARY KEY ( id ) 
);  

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("coffee", "Beverages", 4.00, 100);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("dinner rolls", "Bakery", "5.00", 100);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("milk","Dairy",3.00, 50);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Ketchup","Canned",6.00,60);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Soap", "Personal Care", 7.00, 100);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Paper towel", "Paper Goods", 2.45, 80);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Detergent","Cleaners ",4.56,100);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Produce", "vegetables",3.00,30);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Pork","Meat",10.00,20);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Ice cream", "Frozen Foods",2.29, 20);
