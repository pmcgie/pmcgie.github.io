DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE departments (
  id INTEGER(20) AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  over_head_costs DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE products (
  id INTEGER(20) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_id INTEGER(20) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(20) NOT NULL,
  product_sales DECIMAL(10,2),
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES departments(id)
);