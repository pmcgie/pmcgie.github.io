//read and pull out lines from file
var fs = require("fs");

var textFile = process.argv[2];
var newStuff = process.argv[3];

fs.appendFile(textFile,newStuff,function(err) {

    if (err) throw err;
    console.log("The data has been added to file")

})