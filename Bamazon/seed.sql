CREATE TABLE products (
  id INTEGER(20) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(20) NOT NULL,
  PRIMARY KEY (id)
);

-- Aerial Department Products (1-2)
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Jetpack - Flyaway 2000","Aerial",9999,100);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Little Tikes Flying Car","Aerial",19999,105);

-- Music Department Products (3-5)
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Kazoo","Music",2,10000);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Recorder","Music",2,5000);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Ultimate Air Guitar","Music",100,450);

-- Clothing Department Products (6-10)
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Polka Dot Shirt with Polka Pants","Clothing",25,1200);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Keyboard Neck Tie","Clothing",30,1500);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Spandex Overalls","Clothing",40,200);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Batman Cape","Clothing",100,20);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Zebra Zubaz","Clothing",15,20000);