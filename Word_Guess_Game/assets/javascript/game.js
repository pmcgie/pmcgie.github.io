//Create Initial Variables
var Wins;
var Movie;
var Guesses_Remaining;
var Guesses_Correct;
var Guesses_Wrong;
var Letters_Guessed;
var MovieNum;

//This initializes game
function StartGame () {
    MovieNum = Math.floor(Math.random() * MovieList.length)
    Movie = MovieList[MovieNum].Title;
    Guesses_Remaining = 13;
    Letters_Guessed = [];
    Guesses_Correct = [];
    Guesses_Wrong = [];
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
StartGame();
var Movie_Str = Movie.toLowerCase();

document.onkeyup = function(event) {
    
    //User Enters Letter
    var userGuess = event.key;
    
    //Check to see if is a letter and has already been guessed
    if (Letters_Guessed.includes(userGuess)==false && isLetter(userGuess)) {
        Letters_Guessed.push(userGuess)
        
        console.log(Letters_Guessed);
        console.log(userGuess);
        
        //Checks to see if letter is contained in Movie Title
        if (Movie.includes(userGuess)) {
            alert("You got one");
        }

    }

    //Populate Entry into HTML
    var LetterUsed = Letters_Guessed

    var RemainingGuesses = 
        "<p>Remaining Guesses: ";

    //Populate Entries
    document.querySelector("#LettersUsed").innerHTML = LetterUsed;
    document.querySelector("#RemainingGuess").innerHTML = RemainingGuesses;

}