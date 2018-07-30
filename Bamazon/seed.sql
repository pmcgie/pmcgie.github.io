-- Set up departments
INSERT INTO departments (department_name,over_head_costs)
VALUES ("Aerial",500000);

INSERT INTO departments (department_name,over_head_costs)
VALUES ("Clothing",200000);

INSERT INTO departments (department_name,over_head_costs)
VALUES ("Music",400000);


-- Aerial Department Products (1-2)
INSERT INTO products (product_name,department_id,department_name,price,stock_quantity,product_sales)
VALUES ("Jetpack - Flyaway 2000",1,"Aerial",9999,100,0);

INSERT INTO products (product_name,department_id,department_name,price,stock_quantity,product_sales)
VALUES ("Little Tikes Flying Car",1,"Aerial",19999,105,0);

-- Music Department Products (3-5)
INSERT INTO products (product_name,department_id,department_name,price,stock_quantity,product_sales)
VALUES ("Kazoo",2,"Music",2,10000,0);

INSERT INTO products (product_name,department_id,department_name,price,stock_quantity,product_sales)
VALUES ("Recorder",2,"Music",2,5000,0);

INSERT INTO products (product_name,department_id,department_name,price,stock_quantity,product_sales)
VALUES ("Ultimate Air Guitar",2,"Music",100,450,0);

-- Clothing Department Products (6-10)
INSERT INTO products (product_name,department_id,department_name,price,stock_quantity,product_sales)
VALUES ("Polka Dot Shirt with Polka Pants",3,"Clothing",25,1200,0);

INSERT INTO products (product_name,department_id,department_name,price,stock_quantity,product_sales)
VALUES ("Keyboard Neck Tie",3,"Clothing",30,1500,0);

INSERT INTO products (product_name,department_id,department_name,price,stock_quantity,product_sales)
VALUES ("Spandex Overalls",3,"Clothing",40,200,0);

INSERT INTO products (product_name,department_id,department_name,price,stock_quantity,product_sales)
VALUES ("Batman Cape",3,"Clothing",100,20,0);

INSERT INTO products (product_name,department_id,department_name,price,stock_quantity,product_sales)
VALUES ("Zebra Zubaz",3,"Clothing",15,20000,0);
