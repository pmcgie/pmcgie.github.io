const fs = require('fs');
const request = require('request');

var TV = function() {
  this.findShow = function(show) {
    console.log('this.findShow');
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

     request(URL, function(error, response, body) {
        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {
          var init = JSON.parse(body);

          var name = init.name;
          var genre = init.genres.join(",");
          var rating = init.rating.average;
          var network = init.network.name 
          var summary = init.summary;

          console.log(" * The name of the show: "+name);
          console.log(" * The show's genre(s): "+genre);
          console.log(" * The show's average rating: "+rating);
          console.log(" * The show's network name: "+network);
          console.log(" * The show's summary: "+summary);
        }
    });

  };
  this.findActor = function(actor) {
     console.log('this.findActor');
    // The following URL can be used to search the TV Maze API for a given show
    var URL = " http://api.tvmaze.com/search/people?q=" + actor;

     request(URL, function(error, response, body) {
        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {
          var init = JSON.parse(body)[0].person;

          var name = init.name;
          var birthday = init.birthday;
          var gender = init.gender;
          var country = init.country;
          var url = init.person;

          console.log(" * The actor’s name: "+name);
          console.log(" * The actor’s birthday: "+birthday);
          console.log(" * The actor’s gender: "+gender);
          console.log(" * The actor’s country: "+country);
          console.log(" * The actor’s TV Maze URL: "+url);

          fs.appendFile("log.txt", 'hey' , function(err) {
            if (err){
              throw err
            }
          });

        }
    });

  };
};

module.exports = TV;
