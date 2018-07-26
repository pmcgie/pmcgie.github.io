//Running this application will first display all of the items available for sale. 
//Include the ids, names, and prices of products for sale.

// set up mysql and inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");

//Create Connection
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

// set up for table
var Table = require('cli-table2');
 
// instantiate
var table = new Table({
    head: ['ID', 'Product','Price']
});


//Run initial Display of Products for consumer
displayProducts()

//Function to display all products
function displayProducts() {
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res) {
        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].id,res[i].product_name,'$'+res[i].price]
            );
        }
        //Show Table Result
        console.log('\n' + table.toString());
        });      
}