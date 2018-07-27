//Using the previous example as a guide, create an app that has two web servers.
//One that listens on port 7000 and one that listens on port 7500.
//The one listening on port 7000 will always tell the user something good about themselves.
//The one listening on 7500 will always tell the user something bad about themselves.

var http = require("http");
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var PORT_One = 7000;
var PORT_Two = 7500;

function handleRequest(request,response) {
    response.end("Server received a request");
}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

server1.listen(PORT_One,function() {
    console.log("You are a rockstar!")
    randomTweet();
})

server2.listen(PORT_Two,function() {
    console.log("You might need to work on a few things")
    randomTweet();
})




//Bonus
//Look for other ways to expand what your server can do. As possibilities:
//Generate the good/bad phrase randomly from a list of predefined phrases
//Use the twitter package inside the response to also return a random tweet
// Twitter - "my-tweets"

//within handler function
/*
fs.readfile(__dirname + "/index.html",function(err,data) {
    res.writeHead(200, {"Content-Type":"text/html"})
    res.end(data);
})*/