// Initialize Firebase
var config = {
  apiKey: "AIzaSyA84GS1oU2IlU15sZjzvxa9bWSYkO4O48s",
  authDomain: "bootcampclass-64aad.firebaseapp.com",
  databaseURL: "https://bootcampclass-64aad.firebaseio.com",
  projectId: "bootcampclass-64aad",
  storageBucket: "bootcampclass-64aad.appspot.com",
  messagingSenderId: "530989479291"
};
firebase.initializeApp(config);
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)


// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highPrice = snapshot.val().highPrice
    highBidder = snapshot.val().highBidder

    // Change the HTML to reflect the stored values
    $("#highest-price").text(snapshot.val().highPrice),
    $("#highest-bidder").text(snapshot.val().highBidder)

    // Print the data to the console.
    console.log(highPrice)
    console.log(highBidder)

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-price").text(highPrice),
    $("#highest-bidder").text(highBidder)

    // Print the data to the console.
    console.log(highPrice)
    console.log(highBidder)


  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  bidderName = $("#bidder-name").val().trim();
  bidderPrice = $("#bidder-price").val().trim();

  console.log(highPrice)

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highPrice: bidderPrice,
      highBidder: bidderName
    });


    // Log the new High Price
    console.log(highPrice);

    // Store the new high price and bidder name as a local variable
    highPrice = bidderPrice
    highBidder = bidderName

    // Change the HTML to reflect the new high price and bidder
    $("#highest-price").text(highPrice)
    $("#highest-bidder").text(highBidder)

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
