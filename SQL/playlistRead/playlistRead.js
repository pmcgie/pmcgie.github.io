var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  createSong();
});

function createSong() {
  console.log("Inserting a new song(s)...\n");
  var query = connection.query(
    "INSERT INTO songs SET ?",
    {
      title: "Crazy Train",
      artist: "Ozzy Ozourne",
      genre: "rock"
    },
    function(err, res) {
      console.log(res.affectedRows + " song inserted!\n");
      // Call updatesong AFTER the INSERT completes
      updateSong();
    }
  );
    // logs the actual query being run
    console.log(query.sql);
}

function updateSong() {
  console.log("Updating Artist Name...\n");
  var query = connection.query(
    "UPDATE songs SET ? WHERE ?",
    [
      {
        artist: "Ozzy Ozbourne"
      },
      {
        artist: "Ozzy Ozourne"
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " song(s) updated!\n");
      deleteSong();
    }
  )
  console.log(query.sql)
}

function deleteSong() {
  console.log("Deleting song(s) \n")
  var query = connection.query(
    "DELETE FROM songs WHERE ?",
    {
      title: "Sunshine"
    },

  function(err,res) {
    console.log(res.affectedRows + " song(s) deleted!\n")
    queryAllSongs();
    queryDanceSongs();
  }
  )
  // Call query of songs AFTER the DELETE completes
  console.log(query.sql)
}

function queryAllSongs() {
  connection.query("SELECT * FROM songs", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
  });
}

function queryDanceSongs() {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
  });

  // logs the actual query being run
  console.log(query.sql);

  //Optional - better not to if you are running multiple queries
  connection.end()
}
