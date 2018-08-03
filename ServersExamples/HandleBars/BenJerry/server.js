// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();


// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Create variable
var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
];


//Using handlebars and express, create a route called /icecream/:name. 
//When the route is hit, it will display the name, price and awesomeness for that specific ice cream.
app.get("/icecream/:name", function(req,res) {

    var iceName = req.params.name;

    for (var i=0;i<icecreams.length;i++) {

        if (icecreams[i].name === iceName) {
            res.render("spec",icecreams[i], {
                foods: icecreams[i]
            })
        }
    }
    

});

//Create an /icecreams route. 
//It will loop over all the ice creams and display them all to the user.
app.get("/icecreams", function(req,res) {
    res.render("all",icecreams);
});