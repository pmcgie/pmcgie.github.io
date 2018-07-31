// Manager View of Bamazon which will list a set of menu options:
    // 1. View Products for Sale
    // 2. View Low Inventory
    // 3. Add to Inventory
    // 4. Add New Product

// Load NPM Packages
var mysql = require("mysql");
var inquirer = require("inquirer");
var commaNumber = require('comma-number')

// set up for table
var Table = require('cli-table2');

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

// Global Variables
var product_ID_Max = 0;
var depArr = [];

//Run initial choices for manager
departmentArr();
managerChoices();
totalChoices();

//Creates an array of department options
function departmentArr() {
    var query = "SELECT * FROM departments"

    connection.query(query, function(err,res){
        for (var i = 0; i < res.length; i++) {

            var ID = res[i].id
            var Name = res[i].department_name

            var LoggedName = ID + ". " + Name

            depArr.push(LoggedName)
        }
    })
}

//Check to see how many product options exist;
function totalChoices() {
    
    var query = "SELECT * FROM products";

    connection.query(query, function(err, res) {
        product_ID_Max = res.length + 1
        
    });
}

// Display manager options
function managerChoices () {
    // Create Menu Prompt for Manager
    inquirer
    .prompt([
        // Here we give the user a list to choose from.
        {
        type: "list",
        message: "Manager View: Choose from options below:",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory","Add New Product","Log Out"],
        name: "ManagerView"
        }
    ])
    .then(function(answer) {

        // Have switch statement and functions for possible options
        switch(answer.ManagerView) {

            case "View Products for Sale":
                viewProducts();
            break;

            case "View Low Inventory":
                lowInventory();
            break;

            case "Add to Inventory":
                addInventory();
            break;

            case "Add New Product":
                createProduct();
            break;

            case "Log Out":
                console.log("\nYou are now logged out of your session.");
                connection.end();
            break;
        }

    });
}


// If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.
function viewProducts() {

    // instantiate
    var table = new Table({
        head: ['ID', 'Product','Price','Quantity']
    });

    // Run query to display all ID's, names, prices and quantities
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res) {

        product_ID_Max = res.length + 1

        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].id,res[i].product_name,'$'+commaNumber(res[i].price),commaNumber(res[i].stock_quantity)]
            );
        }

        //Show Table Result
        console.log('\n' + table.toString());

        //Ask manager if they want to see main menu again
        managerChoices()

    });

} 

// If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.
function lowInventory() {

    // instantiate
    var table = new Table({
        head: ['ID', 'Product','Price','Quantity']
    });

    // Run query to display all ID's, names, prices and quantities
    var query = "SELECT * FROM products WHERE stock_quantity < 5";
    connection.query(query, function(err, res) {

        product_ID_Max = res.length + 1

        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].id,res[i].product_name,'$'+commaNumber(res[i].price,2),commaNumber(res[i].stock_quantity)]
            );
        }

        //Show Table Result
        console.log('\n' + table.toString());

        //Ask manager if they want to see main menu again
        managerChoices()

    });

}

// If a manager selects Add to Inventory, 
    // your app should display a prompt that will let the manager "add more" of any item currently in the store.
function addInventory() {

    // Create prompt to allow user to enter value to update inventory
    inquirer
    .prompt([
        {
            type: "input",
            message: "Enter product ID:",
            name: "prodID"
        },
        {
            type: "input",
            message: "Enter the additional amount of inventory you want to add:",
            name: "addInventory"
        }
    ]).then(function(answer) {

        //set inventory variable
        var inventory = parseInt(answer.addInventory);
        var ID = parseInt(answer.prodID);

        // Check to see valid ID entry
        if (ID <= product_ID_Max) {

        // Run SQL Query to get the following: current inventory and product name
        var query = "SELECT * FROM products WHERE id=" + ID;

        connection.query(query, function(err, res) {
            var productInventory = res[0].stock_quantity
            var productName = res[0].product_name

            // Tell user of changes and ask for confirmation
            console.log("Product ID: " + ID);
            console.log("Product Name: " + productName);
            console.log("Current Inventory: " + commaNumber(productInventory));
            console.log("Inventory to add: " + commaNumber(inventory) + "\n");
            
            // Check validation First - Needs to be numeric values for price and quantity
            if (ID>=0 && Number.isInteger(ID) === true && inventory>=0) {
                
                // confirm entry and add entry
                confirm_and_update_inventory(ID,productName,productInventory,inventory)

            } else {
                console.log("Invalid Entries occurred. Ensure that you enter numeric values for inventory values.\n")
                managerChoices();
            }
        });

        } else {
            console.log("Invalid Entries occurred. Ensure that you enter numeric values for price and stock quantity.\n")
            managerChoices();
        }
    })
}

// If a manager selects Add New Product, 
    // it should allow the manager to add a completely new product to the store.
function createProduct() {

    // inquire about (1) new product name, (2) Department, (3) price, (4) stock_quantity
    inquirer
    .prompt([
      // Here we create a basic text prompt.
      {
        type: "input",
        message: "What is product name?",
        name: "prodName"
      },
      {
        type: "list",
        message: "What department do you want to place product in?",
        choices: depArr,
        name: "prodDepartment"
      },
      {
        type: "input",
        message: "Enter price of product:",
        name: "prodPrice"
      },
      {
        type: "input",
        message: "Enter stock quantity:",
        name: "prodQuantity"
      }
    ])
    .then(function(answer) {

        //set variables
        var product = answer.prodName;
        var departmentDetails = answer.prodDepartment;
        var departSplit = departmentDetails.split(". ",2);
        var department = departSplit[1];
        var price = parseFloat(answer.prodPrice);
        var quantity = parseInt(answer.prodQuantity);
        var deptNum = parseInt(departmentDetails.split(".",1))

        // Show user output
        console.log("\nNew Product Name: " + product);
        console.log("Assigned Product Department: " + department);
        console.log("Product Price: " + '$'+commaNumber(Number(price).toFixed(2)));
        console.log("Stock Quantity: " + commaNumber(quantity) + "\n");
        

        // Check validation First - Needs to be numeric values for price and quantity
        if (quantity>=0 && Number.isInteger(quantity) === true && price>=0) {
            
            // confirm entry and add entry
            confirm_and_Add_New(product,deptNum,department,price,quantity);

        } else {
            console.log("Invalid Entries occurred. Ensure that you enter numeric values for price and stock quantity.\n")
            managerChoices();
        }

    });
}


// Confirms New Entries
function confirm_and_Add_New(product,deptNum,department,price,quantity) {

    inquirer.prompt([{
        type: 'confirm',
        name: 'reviewNewEntry',
        message: 'Do you want to proceed with new Entry?'

      }]).then(function(answer) {
        
        // If answer is "no" then go back to main menu
        if (answer.reviewNewEntry === false) {
            console.log("No Entry was added\n");
            managerChoices();

        } else {

            connection.query(
                "INSERT INTO products SET ?",
                {
                    product_name: product,
                    department_id: deptNum,
                    department_name: department,
                    price: price,
                    stock_quantity: quantity,
                    product_sales: 0.00
                }
            );

            totalChoices();
            managerChoices();
        }
    });
}

// Confirms the udpate in inventory
function confirm_and_update_inventory(ID,productName,productInventory,inventory) {
    inquirer.prompt([{
        type: 'confirm',
        name: 'reviewNewEntry',
        message: 'Do you want to proceed with new Entry?'
      }]).then(function(answer) {
        
        // If answer is "no" then go back to main menu
        if (answer.reviewNewEntry === false) {
            console.log("No inventory was added")
            managerChoices();
        } else {     

            var totalInventory = productInventory + inventory;

            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                    stock_quantity: totalInventory
                    },
                    {
                    id: ID
                    }
                ],
            );

            console.log('You now have ' + totalInventory + ' units of ' + productName + ".\n")
            managerChoices();
        }
    });
}