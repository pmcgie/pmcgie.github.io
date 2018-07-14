
//With Constructors''''''''''''''''''''''''''''''''''''''''''''''
function programmerConstructor(name,title,age,program_language) {
    this.name = name;
    this.title = title;
    this.age = age;
    this.program_language = program_language;
    this.printInfo = function() {
        console.log(JSON.stringify(this,null,2))
    }
}

var programmerBob = new programmerConstructor("Bob","Full-Stack",30,"Java")

programmerBob.printInfo()


// Load the NPM Package inquirer
var inquirer = require("inquirer");
var count = 0;
var progammerArr = [];

var askQuestion = function() {

    if (count < 5) {
    //With Prompts
    inquirer.prompt([
        {
            name: "name",
            message: "What is your name?"
        }, {
            name: "position",
            message: "What is your current position?"
        }, {
            name: "age",
            message: "How old are you?"
        }, {
            name: "language",
            message: "What is your favorite programming language?"
        }
    ]).then(function(answers){
        var newProgrammer = new programmerConstructor(answers.name, answers.position, answers.age,answers.language)
        //newProgrammer.printInfo()
        count++;

        progammerArr.push(newProgrammer);
        console.log(progammerArr)

        askQuestion();

    })
    } else {
        for (var x = 0; x < progammerArr;x++) {
            progammerArr[x].printInfo();
        }
        console.log("All questions asked.")
    }
}

askQuestion();  