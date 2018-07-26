// With all of your data successfully imported into the database, begin working on a Node console application which will allow you to collect more specialized pieces of data. 
//For example...
    // A query which returns all data for songs sung by a specific artist
    // A query which returns all artists who appear within the top 5000 more than once
    // A query which returns all data contained within a specific range
    // A query which searches for a specific song in the top 5000 and returns the data for it


// HINT: There are some MySQL queries which could make some of these tasks even easier to accomplish. Feel free to look at MySQL's documentation to find some of them

var mysql = require("mysql");

// Could use inquirer as a more user-friendly alternative
// Set up node args
var action = process.argv[2];
var search = process.argv.slice(3).join(" ");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "music_db"

})


// BETTER ALTERNATIVE WOULD BE TO USE INQUIRER AND PROMPT!!!

// Check action
switch(action) {

    // A query which returns all data for songs sung by a specific artist
    case "ArtistSongs":
    artistSongs(search);
    break;

    // A query which returns all artists who appear within the top 5000 more than once
    case "Multiple":
    multipleSongs();
    break;

}


// A query which returns all data for songs sung by a specific artist
function artistSongs(search) {
    connection.query("SELECT * FROM topsongs WHERE artist=?",[search],function(err,res) {
        console.log("Artist | Title | Rank | Year")
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].artist + " | " + res[i].title + " | " + res[i].ranking + " | " + res[i].songYear)
        }
    })
}

// A query which returns all artists who appear within the top 5000 more than once
function multipleSongs() {
    
}