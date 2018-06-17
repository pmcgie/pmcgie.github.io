//Setting up variables
var allTopics = ["The Matrix", "basketball", "dancing","home"];

    // Function for displaying topic data
    function renderButtons() {

        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < allTopics.length; i++) {

            // Then dynamicaly generating buttons for each movie in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var tag = $("<button>");
            // Adding a class of movie-btn to our button
            tag.addClass("topic-btn");
            // Adding a data-attribute
            tag.attr("data-name", allTopics[i]);
            // Providing the initial button text
            tag.text(allTopics[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(tag);
        }
    }
    
    //trigger event to generate gifs
    function displayTopicInformation() {

        $(".gif-reveal").empty();
        var topic = $(this).attr("data-name"); //this looks at current object (You've clicked on button, so current button is this)

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=DX02zQ16zROY7j7IgKA3WD33lOlEJYaj&limit=10"; //assigns limit of search responses

        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            var results = response.data;
  
            //Loop through results
            for (var i = 0; i < results.length; i++) {

                //Create new div for GIF
                var gifDiv = $("<div>");
    
                //Get Rating
                var rating = results[i].rating;
                var p = $("<p style='margin-left:10px;'>").text("Rating: " + rating);
    
                //Two different ways of querying API: animated vs not animated
                var resultsURL_still = results[i].images.fixed_height_still.url;
                var resultsURL_not_still = results[i].images.fixed_height.url;
                
                var topicImage = $("<img  class='animatedGif' data-animate='" + resultsURL_not_still +"'data-still='" + resultsURL_still+"' data-state='still'>");
                topicImage.attr("src", resultsURL_still);

                //Favorites Option
                var addtoFavorites = $("<button>");
                addtoFavorites.addClass("fav-btn");
                addtoFavorites.attr("data-state", "still");
                addtoFavorites.attr("src",resultsURL_still)
                addtoFavorites.text("Click Here to Add to Favorites")
                
                //Prepend Items
                gifDiv.prepend(p);
                gifDiv.prepend(topicImage);
                
                //Change DOM
                $(".gif-reveal").prepend(gifDiv);
                $(".gif-reveal").prepend(addtoFavorites);

            }

        });
    }   

    // This function handles events where one button is clicked
    $("#add-topic").on("click", function(event) {
        event.preventDefault();

        // This line grabs the input from the textbox
        var newTopic = $("#topic-input").val().trim();

        // The movie from the textbox is then added to our array
        allTopics.push(newTopic);
        console.log(allTopics)

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
    });

//Animation Start/Stop
$(document).on('click', ".animatedGif", function() {
    
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");

    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }

});

//Add to Favorites
$(document).on("click", ".fav-btn", function() {

    
    //Create new div for GIF favorites
    var gifDiv = $("<div>");
    var gifName = $(this).attr("src")

    //Create Favorite Image
    var topicImage = $("<img  class='animatedGif'>");
    topicImage.attr("src", gifName);
    topicImage.attr("style", "margin:10px;");

    topicImage.attr("data-state", "still");

    //Prepend Items
    gifDiv.prepend(topicImage);
    
    //Change DOM
    $(".gif-favorites").prepend(gifDiv);

});

//ensures button functionality
$(document).on("click", ".topic-btn", displayTopicInformation);

// Calling the renderButtons function to display the intial buttons
renderButtons();