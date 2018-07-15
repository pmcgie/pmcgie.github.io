var dotenv = require("dotenv").config();

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var liriCommand = process.argv[2];

