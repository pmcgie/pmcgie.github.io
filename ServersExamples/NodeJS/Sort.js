//Get arguments
var nodeArg = process.argv;

//Convert to array of numbers (single digits)

var numArray = [];


//Sort Array

for(var i = 2; i <nodeArg.length; i++) {
    numArray.push(parseInt(nodeArg[i]))
}

console.log(numArray.sort(function(a, b){return a - b}));