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
  
            for (var i = 0; i < results.length; i++) {
              var gifDiv = $("<div>");
  
              var rating = results[i].rating;
  
              var p = $("<p style='margin-left:10px;'>").text("Rating: " + rating);
  
              var topicImage = $("<img  class='animatedGif'>");
              topicImage.attr("src", results[i].images.fixed_height.url);
  
              gifDiv.prepend(p);
              gifDiv.prepend(topicImage);
  
              $(".gif-reveal").prepend(gifDiv);
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

$(document).on("click", ".topic-btn", displayTopicInformation);

// Calling the renderButtons function to display the intial buttons
renderButtons();