//Review Node
var a = parseInt(process.argv[2]);
var b = parseInt(process.argv[3]);

if (a === b) {
    console.log(true);
} else {
    console.log(false);
}

if ((a % 7) === 0 && (b % 7) === 0) {
    console.log(true)
} else {
    console.log(false)
}


//Read and Write File Example
var fs = require("fs");

fs.readFile("movies.txt","utf8",function(error,data) {
    if (error) {
        return console.log(error);
    }
    console.log(data);

    var dataArr = data.split(",");

    console.log(dataArr);
})

fs.writeFile("movies.txt","Inception, DieHard", function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("movies.txt was updated!")
})

