// Spotify and Twitter Keys
var dotenv = require("dotenv").config();

// Keys File
var keys = require("./keys.js")

// Include the request npm package (for OMDB)
var request = require("request");

// Twitter NPM
var Twitter = require('twitter');

// Spotify NPM
var Spotify = require("node-spotify-api"); 

// Used to read file
var fs = require("fs");

// Argument 2 (initiates Case) - Which function/action to run
var liriCommand = process.argv[2];

//Argument 3 (passes addition argument) - Which Movie and Which Song
var searchDetail = process.argv[3];

// Run Node Response
// Make it so liri.js can take in one of the following commands:
// "my-tweets","spotify-this-song","movie-this","do-what-it-says"
runRequest(liriCommand, searchDetail);

// Function to run request (need to know action to run as well as other search param for movie and song)
function runRequest(liriCommand, searchDetail) {

    // Run function based on user input
    switch (liriCommand) {

        //This will show your last 20 tweets and when they were created at in your terminal/bash window.
        case "my-tweets": // Tested - Works
            recentTweets();
        break;

        // This will show the following information about the song in your terminal/bash window
        // Shows the following: Artist, song name, preview link, album
        case "spotify-this-song": // Tested - Works
            songInfo(searchDetail);
        break;
        
        // This will show movie information: Title, Year, Rating, RT Rating, Country Produced, Movie Language, Plot, Actors
        case "movie-this": // Tested - Works
            movieInfo(searchDetail);
        break;

        // Runs process where takes text inside of random.txt file and then use it to call of one LIRI commands
        case "do-what-it-says": // Tested - Works
            justdoIt();
        break;

        // If user does not run the proper command
        default:
            console.log("You need to enter one of the following commands:")
            console.log("'my-tweets','spotify-this-song','movie-this','do-what-it-says'")
        break;
    }  
}

// Twitter - "my-tweets"
function recentTweets() {

    // get twitter keys from file
    var client = new Twitter(keys.twitter);
    var params = {count: 20};

    // grab tweets
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {

            //console.log(JSON.stringify(response))
            //console.log(tweets);

            // Loop and log tweets
            tweets.forEach(tweet => {
                console.log("User: " + tweet.user.name);
                console.log("Time: " + tweet.created_at);
                console.log("Content: " + tweet.text);
                
            });

        } else {
            console.log("There are no tweets.")
        }
    });
}

// Spotify - "spotify-this-song"
function songInfo(searchDetail) {

    // get spotify keys from file
    var spotify = new Spotify(keys.spotify);
    var defaultSong = "The Sign Ace of Base"

    // Undefined song - set to default song
    if (searchDetail === undefined) {
        searchDetail = defaultSong;
    }

    //Need to pass through 'search' arg in query and log song information
    spotify.search({ type: 'track', query: searchDetail, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error: ' + err);
        } else {

            //console.log(data.tracks.items[0].album);

            //artist, song name, preview link, album
            console.log("Artist: " + data.tracks.items[0].album.artists[0].name)
            console.log("Song Name: "  + data.tracks.items[0].name)
            console.log("Preview Link: " + data.tracks.items[0].preview_url)
            console.log("Album: " + data.tracks.items[0].album.name)
        }
    });
}


// IMDB - "this-movie"
function movieInfo(searchDetail) {
    
    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "https://www.omdbapi.com/?t=" + searchDetail + "&y=&plot=short&apikey=77fae8a8";

    request(queryUrl, function(error, response, body) {

        /*If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
        If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
        It's on Netflix!*/
        if (searchDetail === undefined) {
            console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/")
            console.log("It's on Netflix!")
        
        } else if (!error && response.statusCode === 200) {
        
            // Parse the body of the site
            var response = JSON.parse(body)

            //console.log(response)

            // Log Details: Title, Year, Rating, RT Rating, Country Produced, Movie Language, Plot, Actors
            console.log("Title: " + response.Title);
            console.log("Year: " + response.Year);
            console.log("Rating: " + response.imdbRating);
            console.log("RT Rating: " + response.Ratings[1].Value);
            console.log("Country Produced: " + response.Country);
            console.log("Movie Language: " + response.Language);
            console.log("Plot: " + response.Plot);
            console.log("Actors: " + response.Actors);

        } else {
            console.log(error);
        }
        
    });
}

// Text File - "do-what-it-says"
function justdoIt() {

    // (1) Read File Contents (2) Split up file contents and (3) Pass back through funciton to perform LIRI request
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        } else {
            var dataArr = data.split(",");
            runRequest(dataArr[0], dataArr[1]);
        }
    });
}
