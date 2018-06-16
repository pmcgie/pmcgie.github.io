//Setting up variables
var initialTopics = ["The Matrix", "basketball", "dancing","home"];


renderButtons();



    // Function for displaying topic data
    function renderButtons() {

        // Looping through the array of movies
        for (var i = 0; i < initialTopics.length; i++) {

            // Then dynamicaly generating buttons for each movie in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var tag = $("<button>");
            // Adding a class of movie-btn to our button
            tag.addClass("topic-btn");
            // Adding a data-attribute
            tag.attr("data-name", initialTopics[i]);
            // Providing the initial button text
            tag.text(initialTopics[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(tag);
        }
    }
    
    //trigger event to generate gifs
    $("button").on("click", function() {
        var topic = $(this).attr("data-name"); //this looks at current object (You've clicked on button, so current button is this)
        console.log(topic)

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=DX02zQ16zROY7j7IgKA3WD33lOlEJYaj&limit=10"; //assigns limit of search responses

        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            var results = response.data;
  
            for (var i = 0; i < results.length; i++) {
              var gifDiv = $("<div class='item'>");
  
              var rating = results[i].rating;
  
              var p = $("<p>").text("Rating: " + rating);
  
              var topicImage = $("<img>");
              topicImage.attr("src", results[i].images.fixed_height.url);
  
              gifDiv.prepend(p);
              gifDiv.prepend(topicImage);
  
              $(".gif-reveal").prepend(gifDiv);
            }

        });
    });    
