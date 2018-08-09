// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...


// Then create a request to the queryUrl
var request = require("request")

// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = "Avengers";
// ...


// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);



// If the request is successful
request(queryUrl,function(error,response,data) {
    if(!error) {
        console.log(data);
    } else {
        console.log(error)
    }
})

// Then log the Release Year for the movie
// ...
