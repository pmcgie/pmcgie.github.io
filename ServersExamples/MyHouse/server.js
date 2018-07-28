// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

    var path = req.url;

    switch(path) {
    
    case "/":
        return displayRoot(path,req,res);

    case "/movies":
        return displayMovies(path,req,res);
    
    case "/frameworks":
        return displayFrameworks(path,req,res);
    
    case "/food":
        return diplayFood(path,req,res);
    }

}

function displayRoot(path,req,res) {
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/index.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function displayMovies(path,req,res) {
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/movies.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function displayFrameworks(path,req,res) {
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/frameworks.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function diplayFood(path,req,res) {

  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/food.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
