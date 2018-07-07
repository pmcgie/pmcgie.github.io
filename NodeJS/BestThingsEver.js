//read and pull out lines from file
var fs = require("fs");

fs.readFile("best_things_ever.txt","utf8",function(error,data) {
    if (error) {
        return console.log(error);
    }
    console.log(data);

    var dataArr = data.split(",");

    for (i=0; i < dataArr.length;i++) {
        console.log(dataArr[i])
    }
})