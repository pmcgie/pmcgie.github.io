// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

// Grab the movieName which will always be the third node argument.
var movieName = process.argv[2];

// Then run a request to the OMDB API with the movie specified
var queryUrl = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=77fae8a8";
//var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + movieName + "&api_key=DX02zQ16zROY7j7IgKA3WD33lOlEJYaj&limit=10"; //assigns limit of search responses

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Release Year: " + JSON.parse(body).Year);
  } else {
    console.log(error);
  }
});
