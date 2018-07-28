//Running this application will first display all of the items available for sale. 
//Include the ids, names, and prices of products for sale.

// set up mysql and inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");
var commaNumber = require('comma-number')

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


//Global Variables
var product_ID_Max = 0;
var productInventory = 0;
var productName = '';
var productID = 0;
var productPrice = 0;
var quantityPurchased = 0;

//Run initial Display of Products for consumer
displayProducts();

//Function to display all products
function displayProducts() {
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res) {

        product_ID_Max = res.length + 1

        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].id,res[i].product_name,'$'+commaNumber(res[i].price)]
            );
        }
        //Show Table Result
        console.log('\n' + table.toString());
        //run function to ask user what product they want to buy
        buyProduct();
        });
}

//The app should then prompt users with two messages.
    //The first should ask them the ID of the product they would like to buy.
    //The second message should ask how many units of the product they would like to buy.

function buyProduct() {

    inquirer
    .prompt({
      name: "product",
      type: "input",
      message: "What product do you want to buy (enter id #)?"
    })
    .then(function(answer) {

        productID = parseInt(answer.product);

        //Check to see if valid product ID response
        if (productID >=1 && productID <= product_ID_Max) {
            console.log("\n")
            howMuch(productID);
        } else {
             console.log("Invalid Product Number. \n");
             buyProduct();
        }
      });
}

function howMuch(productID) {

    //Look up name and current inventory
    var query = "SELECT * FROM products WHERE id=" + productID;
    
    //create variables
    connection.query(query, function(err, res) {
        productInventory = res[0].stock_quantity;
        productName = res[0].product_name;
        productPrice = res[0].price;
    })

    // Ask Quantity
    inquirer
    .prompt({
      name: "quantity",
      type: "input",
      message: "How much do you want of product?"
    })
    .then(function(answer) {

        //Check to see if valid product ID response
        quantityPurchased = parseInt(answer.quantity);

        //Inform user of how much they ordered
        console.log("You have ordered " + quantityPurchased + " of " + productName +  "\n")

        //Ensure valid entry
        if (quantityPurchased >=1 && Number.isInteger(quantityPurchased) === true) {
            
            //Check to see if there is sufficient inventory
            if (quantityPurchased > productInventory) {
                console.log("Insufficient quantity!")
                howMuch(productID);
            } else {
                var totalSale = quantityPurchased * productPrice
                console.log("Your total purchase comes to $" + commaNumber(totalSale))
                updateInventory(answer);
            }
            
        } else {
             console.log("Need to enter whole number. \n");
             howMuch(productID);
        }

      });
}


//Update quantity after customer purchase
function updateInventory() {

    //Need to update remaining quantity after purchase
    var remainingQuantity = productInventory - quantityPurchased;

    var query = connection.query(
        'UPDATE products SET ? WHERE ?',
        [
            {
                stock_quantity: remainingQuantity
            },
            {
                id: productID
            }
        ]
    )
}
