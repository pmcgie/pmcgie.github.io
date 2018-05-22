//Create Initial Variables
var Wins;
var Movie;
var Guesses_Remaining;
var Guesses_Correct;
var Guesses_Wrong;
var Letters_Guessed;
var MovieNum;
var WordChar;
var WordDisplay = ' ';

//This initializes game
function StartGame () {
    MovieNum = Math.floor(Math.random() * MovieList.length)
    Movie = MovieList[MovieNum].Title;
    Guesses_Remaining = 10;
    Letters_Guessed = [];
    Guesses_Correct = [];
    Guesses_Wrong = [];
    console.log(Movie);

    for (i=0;i < Movie.length;i++) {
        WordChar = Movie.charAt(i);

        if (WordChar === ' ') {
            WordDisplay = WordDisplay + '&nbsp &nbsp &nbsp';
        } else {
            WordDisplay = WordDisplay + "_ ";
        }
    }
    console.log(WordDisplay);
}

function Correct(Movie,userGuess) {
    for (i=0;i < Movie.length;i++) {
        
    }
}

//Multidimensional Movie List
var MovieList = [
    {
        Title: "Jurassic Park",
        Link: "",
        }
    , {
        Title: "Avengers",
        Link: "",
        }
    , {
        Title: "Star Wars",
        Link: "",
        }
    , {
        Title: "The Lion King",
        Link: "",
        }
    , {
        Title: "Inception",
        Link: "",
        }
    , {
        Title: "The Fifth Element",
        Link: "",
        }
    , {
        Title: "The Shawshank Redemption",
        Link: "",
        }
    , {
        Title: "Gravity",
        Link: "",
    }
    , {
        Title: "Back to the Future",
        Link: "",
    }
    , {
        Title: "Saving Private Ryan",
        Link: "",
    }
    , {
        Title: "Chocolat",
        Link: "",
    }
    , {
        Title: "Forrest Gump",
        Link: "",
    }
    , {
        Title: "The Dark Knight",
        Link: "",
    }
    , {
        Title: "The Matrix",
        Link: "",
    }
    , {
        Title: "War of the Worlds",
        Link: "",
    }
    , {
        Title: "Arrival",
        Link: "",
    }
    , {
        Title: "Avatar",
        Link: "",
    }
    , {
        Title: "Planet of the Apes",
        Link: "",
    }
    , {
        Title: "Ex Machina",
        Link: "",
    }
    , {
        Title: "Looper",
        Link: "",
    },
];

//Function to check if entry is a letter
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

//Runs Script once browser opens
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        StartGame();
        Playtime();
    }
}

function Playtime() {
    document.onkeyup = function(event) {
        
        //User Enters Letter
        var userGuess = event.key;
        
        //Check to see if is a letter and has already been guessed
        if (Letters_Guessed.includes(userGuess)==false && isLetter(userGuess)) {
            Letters_Guessed.push(userGuess)
            
            //Checks to see if letter is contained in Movie Title
            if (Movie.includes(userGuess)) {
                Correct(Movie,userGuess);
            } else {
                Guesses_Remaining--;
            }
        }

        //Populate Guesses into HTML
        var Guesses = 
            "<p>Below are all the letters that have been used:</p>"+
            Letters_Guessed +
            "<br>" +
            "<br>" +
            "<p>Remaining Guesses: " + Guesses_Remaining + "</p>" +
            "<br>" +
            "<br>" + 
            "<p>Try to guess word: " + WordDisplay + "</p>";

        //Populate Entries
        document.querySelector("#Guesses").innerHTML = Guesses;
    }
}