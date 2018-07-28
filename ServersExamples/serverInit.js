// Requiring http module (included in Node)
var http = require("http");

//Create a server
var server = http.createServer(function(request,result) {
    //executed on every request to our server
    console.log("Server received a request");

    //writing to our result stream
    result.end("Hello word!");
});

server.listen(7000, function() {
    console.log("Listening on port 7000");
});
