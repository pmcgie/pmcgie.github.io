// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "seinfield_db"
  });
  
  // Initiate MySQL Connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

// Routes - Get All Characters
app.get("/cast", function(req,res) {

    connection.query("SELECT * FROM characters", function(err,result) {
        var html = "<h1> Seinfield Characters </h1>"

        html += "<ul>";

        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p> Name: " + result[i].ch_name + "</p>";
            html += "<p> Coolness: " + result[i].Coolness + "</p>";
            html += "<p> Attitude: " + result[i].Attitude + "</p>";
        }

        html += "</ul>";

        res.send(html);

    });

});

// Routes - All Characters order by coolness
app.get("/coolness-chart", function(req,res) {

    connection.query("SELECT * FROM characters ORDER BY Coolness DESC", function(err,result) {
        var html = "<h1> Seinfield Characters: Order by Coolness </h1>"

        html += "<ul>";

        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p> Name: " + result[i].ch_name + "</p>";
            html += "<p> Coolness: " + result[i].Coolness + "</p>";
            html += "<p> Attitude: " + result[i].Attitude + "</p>";
        }

        html += "</ul>";

        res.send(html);

    });

});

// Routes - All Characters order by coolness
app.get("/attitude-chart/:att", function(req,res) {

    var attitudeSelected = req.params.att;

    connection.query("SELECT * FROM characters WHERE Attitude = ?", [attitudeSelected], function(err,result) {
        var html = "<h1> Seinfield Characters </h1>"

        html += "<ul>";

        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p> Name: " + result[i].ch_name + "</p>";
            html += "<p> Coolness: " + result[i].Coolness + "</p>";
            html += "<p> Attitude: " + result[i].Attitude + "</p>";
        }

        html += "</ul>";

        res.send(html);

    });

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
  