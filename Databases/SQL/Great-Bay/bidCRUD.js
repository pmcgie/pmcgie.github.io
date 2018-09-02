// set up inquirer and mysql
var inquirer = require("inquirer");
var mysql = require("mysql");

// create connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bid_DB"
})


// Determine Path - Bid or Post
inquirer
  .prompt([
    // Ask for user's name
    {
        type: "input",
        message: "What is your name?",
        name: "username"
      },

    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "Do you want to bid or post an item?",
      choices: ["bid", "post","Neither"],
      name: "bid_or_post"
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.bid_or_post === "bid") {
      console.log("\nWelcome " + inquirerResponse.username);
      console.log("You have chosen to " + inquirerResponse.bid_or_post + " an item!\n");
    } else if (inquirerResponse.bid_or_post === "post") {
        console.log("\nWelcome " + inquirerResponse.username);
        console.log("You have chosen to " + inquirerResponse.bid_or_post + " an item!\n");  
        createBidItem();
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });



//
function createBidItem() {


// items, tasks, jobs, or projects
inquirer
  .prompt([
    // Ask for user's name
    {
        type: "list",
        message: "What kind of item do you want to post?",
        choices: ["item", "task","job","project"],
        name: "bidType"
      },
    {
        type: "input",
        message: "What is your item name?",
        name: "bidItem"
      },

    // Here we give the user a list to choose from.
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.bid_or_post === "bid") {
      console.log("\nWelcome " + inquirerResponse.username);
      console.log("You have chosen to " + inquirerResponse.bid_or_post + " an item!\n");
    } else if (inquirerResponse.bid_or_post === "post") {
        console.log("\nWelcome " + inquirerResponse.username);
        console.log("You have chosen to " + inquirerResponse.bid_or_post + " an item!\n");  
        createBidItem();
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });

}

// Query all bids
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    queryAllBids();
})



// query and show user list of items
function queryAllBids() {
    var query = connection.query("SELECT * FROM bidlist", function(err,res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].bidtype + " | " + res[i].biditem + " | " + res[i].bidPrice + " | " + res[i].curBidder);
          }
    });
}