// Supervisor View of Bamazon which will list a set of menu options
    // 1. View Product Sales by Department
    // 2. Create New Department

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

supervisorChoices();

// Initial Menu
function supervisorChoices() {
    // Create Menu Prompt for Supervisor
    inquirer
    .prompt([
        // Here we give the user a list to choose from.
        {
        type: "list",
        message: "Manager View: Choose from options below:",
        choices: ["View Product Sales by Department", "Create New Department","Log Out"],
        name: "SupervisorView"
        }
    ])
    .then(function(answer) {

        // Have switch statement and functions for possible options
        switch(answer.SupervisorView) {

            case "View Product Sales by Department":
                product_sales_department();
            break;

            case "Create New Department":
                create_new_dept();
            break;

            case "Log Out":
                console.log("\nYou are now logged out of your session.");
                connection.end();
            break;
        }

    });
}


// When a supervisor selects View Product Sales by Department, the app should display a summarized table.
function product_sales_department() {

    // instantiate
    /*var table = new Table({
        head: ['department_id', 'department_name','over_head_costs','product_sales','total_profit']
    });*/
    var table = new Table({
        head: ['ID','Department','Overhead','Total Sales','Profit']
    })

    // SQL JOIN & GORUP & SUM
        // departments - dept id, dept name, overhead
        // products - sales
    var query = "SELECT departments.id, departments.department_name, departments.over_head_costs, SUM(products.product_sales) AS Total_Sales ";
    query += "FROM departments LEFT JOIN products ON departments.id = products.department_id ";
    query += "GROUP BY departments.id ORDER BY Total_Sales DESC";

    connection.query(query, function(err, res) {
        
        for (var i = 0; i < res.length; i++) {

            // Create variables to add to table
            var deptNum = res[i].id
            var deptName = res[i].department_name
            var overhead = '$'+commaNumber(res[i].over_head_costs)
            var sales = '$'+commaNumber(res[i].Total_Sales)
            var profit = commaNumber((parseFloat(res[i].Total_Sales) - parseFloat(res[i].over_head_costs)).toFixed(0));

            table.push(
                [deptNum,deptName,overhead,sales,profit]
            )
        } 

        //Show Table Result
        console.log('\n' + table.toString() + "\n");

        supervisorChoices();
    });
}

// Allows user to add a new department''''''''''''''''''''''''''''''''''''''''
function create_new_dept() {

    // Inquire about dept name and overhead
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the new deparment name",
            name: "deptName"
        },
        {
            type: "input",
            message: "What is the cost of overhead to department",
            name: "Overhead"
        }
    ])
    .then(function(answer) {

        // set variables
        var deptName = answer.deptName;
        var Overhead = answer.Overhead;

        // Show user output
        console.log("\nNew Department Name: " + deptName)
        console.log("Assigned Product Overhead: " + '$'+commaNumber(Number(Overhead).toFixed(2)) + "\n")

        // Check Validation on Overhead
        if (Overhead >=0) {

            // confirm and add entry
            confirm_and_Add_New(deptName,Overhead)

        } else {
            console.log("Invalid entry occurred. Check number assigned for overhead cost.");
            supervisorChoices();
        }
    })
}

// Confirmation to add new department
function confirm_and_Add_New(deptName,Overhead) {

    inquirer.prompt([{
        type: 'confirm',
        name: 'reviewNewEntry',
        message: 'Do you want to proceed with new Entry?'
      }]).then(function(answer) {
        
        // If answer is "no" then go back to main menu
        if (answer.reviewNewEntry === false) {
            console.log("No Entry was added\n")
            supervisorChoices();
        } else {
            
            // Insert new department into  SQL database
            console.log("New Department has been added.\n");

            connection.query(
                "INSERT INTO departments SET ?",
                {
                    department_name: deptName,
                    over_head_costs: Overhead
                }
            )

            supervisorChoices();
        }
    });

}