//TODO - remove favorites needs more work

//Setting up variables
var allTopics = ["The Matrix", "Basketball", "Dance","X-Games","sci-fi"];
var favorites_still_List = [];
var favorites_not_still_List = [];
var favoritesRatings = [];
var y;
//localStorage.clear();

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

    //Populate Favorites List that currently exists on local storage
    function renderLocalStorage() {
        if (localStorage.getItem("favoriteItemsStill") === null) {
            y = -1
        } else {

            //Set up initial arrays for loop and to retrieve gifs
            var nonanimatedArray = [];
            var animatedArray = [];

            //get items for still and not still gifs
            curFavStillList = localStorage.getItem("favoriteItemsStill");
            curFavNotStillList = localStorage.getItem("favoriteItemsNotStill")
            
            //Parse local storage and feed into arrays
            nonanimatedArray = JSON.parse(curFavStillList);
            animatedArray = JSON.parse(curFavNotStillList);

            //Loop through array
            for (y=0;y<nonanimatedArray.length;y++) {

                //define variables for animated and not animated url's
                var nonAminated = nonanimatedArray[y];
                var Animated = animatedArray[y];

                //re-populate favorites array
                favorites_still_List.push(nonAminated);
                favorites_not_still_List.push(Animated);

                //Create new div for GIF favorites
                var gifDiv = $("<div>");

                //set up local storage topicImages
                var topicImage = $("<img  class='animatedGif' data-animate='" + Animated +"'data-still='" + nonAminated+"' data-state='still'>");
                topicImage.attr("src", nonAminated);
                topicImage.attr("style", "margin:10px;");

                 //Create "Delete" Button
                var delButton = $("<button>");
                delButton.attr("value",y);
                delButton.addClass("del-btn");
                delButton.text("Click Here to Remove from Favorites");

                //Prepend Items
                gifDiv.prepend(topicImage);
                gifDiv.prepend(delButton);
                
                //Change DOM
                $(".gif-favorites").prepend(gifDiv);

            }
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
            for (var x = 0; x < results.length; x++) {

                //Create new div for GIF
                var gifDiv = $("<div>");
    
                //Get Rating
                var rating = results[x].rating;
                var p = $("<p style='margin-left:10px;'>").text("Rating: " + rating);
    
                //Two different ways of querying API: animated vs not animated
                var resultsURL_still = results[x].images.fixed_height_still.url;
                var resultsURL_not_still = results[x].images.fixed_height.url;
                
                var topicImage = $("<img  class='animatedGif' data-animate='" + resultsURL_not_still +"'data-still='" + resultsURL_still+"' data-state='still'>");
                topicImage.attr("src", resultsURL_still);

                //Favorites Option
                var addtoFavorites = $("<button>");
                addtoFavorites.addClass("fav-btn");
                addtoFavorites.attr("data-state", "still");
                addtoFavorites.attr("src",resultsURL_still);
                addtoFavorites.attr("data-animate",resultsURL_not_still);
                addtoFavorites.text("Click Here to Add to Favorites");
                
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

//Ability to remove from Favs and Local Storage
$(document).on("click",".del-btn", function() {
    
    //Clear Out before populating again
    $(".gif-favorites").empty();

    //reference value which is index value
    var index = $(this).attr("value")
    console.log(index)

    //Remove items/splice
    favorites_still_List.splice(index,1);
    favorites_not_still_List.splice(index,1);

    //Reset array in local storage
    //Add array to local storage
    localStorage.setItem("favoriteItemsStill",JSON.stringify(favorites_still_List));
    localStorage.setItem("favoriteItemsNotStill",JSON.stringify(favorites_not_still_List));

    //render favorites again with new information
    location.reload();

})

//Add to Favorites and store relevant information in local storage
$(document).on("click", ".fav-btn", function() {

    //Create new div for GIF favorites
    var gifDiv = $("<div>");
    var gifName = $(this).attr("src")
    var gifAnimate = $(this).attr("data-animate")

    //Create Favorite Image
    var topicImage = $("<img  class='animatedGif' data-animate='" + gifAnimate +"'data-still='" + gifName+"' data-state='still'>");
    topicImage.attr("src", gifName);
    topicImage.attr("style", "margin:10px;");

    topicImage.attr("data-state", "still");

    //Create "Delete" Button
    var delButton = $("<button>");
    delButton.attr("value",y);
    delButton.addClass("del-btn");
    delButton.text("Click Here to Remove from Favorites");
    y++;

    //Prepend Items
    gifDiv.prepend(topicImage);
    gifDiv.prepend(delButton);

    //Add to array
    favorites_still_List.push(gifName);
    favorites_not_still_List.push(gifAnimate);

    //Add array to local storage
    localStorage.setItem("favoriteItemsStill",JSON.stringify(favorites_still_List));
    localStorage.setItem("favoriteItemsNotStill",JSON.stringify(favorites_not_still_List));

    //Change DOM
    $(".gif-favorites").prepend(gifDiv);

});

//ensures button functionality
$(document).on("click", ".topic-btn", displayTopicInformation);

// Calling the renderButtons function to display the intial buttons
renderButtons();

//on window load pull up gif local storage
renderLocalStorage();