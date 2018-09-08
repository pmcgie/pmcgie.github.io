// Your assignment is to define the routes below. Good luck!

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongojs = require("mongojs");

// Initialize Express
var app = express();

// Configure our app for morgan and body parser
app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Static file support with public folder
app.use(express.static("public"));

// Mongojs configuration
var databaseUrl = "warmup";
var collections = ["books"];

// Hook our mongojs config to the db var
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Routes
// ======

// TODO: Fill in each route so that the server performs
// the proper mongojs functions for the site to function
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Post a book to the mongoose database
app.post("/submit", function(req, res) {
  // Save the request body as an object called book
  var book = req.body;

  // If we want the object to have a boolean value of false,
  // we have to do it here, because the ajax post will convert it
  // to a string instead of a boolean
  book.read = false;

  // Save the book object as an entry into the books collection in mongo
  db.books.save(***TODO***, function(error, saved) {
    // Show any errors
    if (error) {
      console.log(error);
    }
    else {
      // Otherwise, send the response to the client (for AJAX success function)
      res.send(***TODO***);
    }
  });
});

// Find all books marked as read
app.get("/read", function(req, res) {
  // Go into the mongo collection, and find all docs where "read" is true
  db.books.find({ ***TODO***:***TODO*** }, function(error, found) {
    // Show any errors
    if (error) {
      console.log(error);
    }
    else {
      // Otherwise, send the books we found to the browser as a json
      res.json(***TODO***);
    }
  });
});

// Find all books marked as unread
app.get("/unread", function(req, res) {
  // Go into the mongo collection, and find all docs where "read" is false
  db.***TODO***.find({ ***TODO***: ***TODO*** }, function(error, ***TODO***) {
    // Show any errors
    if (error) {
      console.log(error);
    }
    else {
      // Otherwise, send the books we found to the browser as a json
      res.json(found);
    }
  });
});

// Mark a book as having been read
app.get("/markread/:id", function(req, res) {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))

  // Update a doc in the books collection with an ObjectId matching
  // the id parameter in the url
  db.books.update(
    {
      _id: mongojs.ObjectId(***TODO***)
    },
    {
      // Set "read" to true for the book we specified
      $set: {
        ***TODO***: ***TODO***
      }
    },
    // When that's done, run this function
    function(error, edited) {
      // show any errors
      if (error) {
        console.log(error);
        res.send(error);
      }
      else {
        // Otherwise, send the result of our update to the browser
        console.log(edited);
        res.send(edited);
      }
    }
  );
});

// Mark a book as having been not read
app.get("/markunread/:id", function(req, res) {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))

  // Update a doc in the books collection with an ObjectId matching
  // the id parameter in the url
  db.books.update(
  
   // Set "read" to false for the book we specified
     
   

  );
});

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
