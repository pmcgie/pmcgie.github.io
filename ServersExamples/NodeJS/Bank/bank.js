var fs = require("fs");

var fileName = 'bank.txt'
var operation = process.argv[2];
var num = parseFloat(process.argv[3]);



//Runs Total
fs.readFile("bank.txt", "utf8", function(error, data){ 

   if (error) {
       return console.log(error);
   }

   if (operation === "total") {

        var totArr = data.split(",");
        var total = 0;

       for (i = 0; i < totArr.length;i++){
           total = total + parseFloat(totArr[i])
           
        }

        console.log("Total " + total)
    } 
    else if (operation === "deposit") {

    }

});


//Adds deposits
if (operation === 'deposit') {

    if (num > 0) {

    fs.appendFile(fileName,", " + num,function(err) {

        if (err) throw err;
        console.log("The data has been added to file")
    
    })

    } else {
        console.log("You can't deposit a negative or zero sum.")
    }
}

//Withdrawal
if (operation === 'withdraw') {

    if (num < 0) {

    fs.appendFile(fileName,", " + num,function(err) {

        if (err) throw err;
        console.log("The data has been added to file")
    
    })

    } else {
        console.log("You can't add money to the bank when you withdraw, add a negative number.")
    }
}

//Lotto
if (operation == 'lotto') {
    num = Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100

    fs.appendFile(fileName,", " + num,function(err) {

        if (err) throw err;
        console.log("The data has been added to file")
    
    })
        console.log("You are one lucky person. You have added a random number to the bank.")
    }

//Switch and do case, and then do function instead for next time