// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)


// Take in the command line arguments
var geocoder = require('geocoder');

var city = process.argv[2];
var state = process.argv[3];

var address = city +"," + state

console.log(process.argv[0])
console.log(process.argv[1])
console.log(process.argv[2])
console.log(process.argv[3])
console.log(address)

 
// Geocoding
geocoder.geocode(address, function (err,data ) {
  
  console.log("hello")

  if (err) {
    console.log(err)
  }
  // do something with data
  console.log(JSON.stringify(data,null,2))

});



// Build your address as an array or string




// Then use Geocoder NPM to geocode the address
