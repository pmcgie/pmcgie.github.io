//Create Initial Variables
var Wins = 0;
var Losses = 0;
var Movie;
var Guesses_Remaining;
var Guesses_Correct;
var Letters_Guessed;
var MovieNum;
var WordChar;
var WordDisplay;
var userGuess;

//Multidimensional Movie List (future state: movie preview plays if user wins)
var MovieList = [
    {
        Title: "Disturbia",
        Link: "",
        }
    , {
        Title: "A Few Good Men",
        Link: "",
        }
    , {
        Title: "Gattica",
        Link: "",
        }
    , {
        Title: "Aladdin",
        Link: "",
        }
    , {
        Title: "Inception",
        Link: "",
        }
    , {
        Title: "Godzilla",
        Link: "",
        }
    , {
        Title: "Super Troopers",
        Link: "",
        }
    , {
        Title: "Gravity",
        Link: "",
    }
    , {
        Title: "Iron Man",
        Link: "",
    }
    , {
        Title: "Saving Private Ryan",
        Link: "",
    }
    , {
        Title: "Batman Begins",
        Link: "",
    }
    , {
        Title: "King Kong",
        Link: "",
    }
    , {
        Title: "Dangerous Minds",
        Link: "",
    }
    , {
        Title: "Karate Kid",
        Link: "",
    }
    , {
        Title: "Beetle Juice",
        Link: "",
    }
    , {
        Title: "Wizard of Oz",
        Link: "",
    }
    , {
        Title: "Dark City",
        Link: "",
    }
    , {
        Title: "Zoolander",
        Link: "",
    }
    , {
        Title: "Terminator",
        Link: "",
    }
    , {
        Title: "Wedding Crashers",
        Link: "",
    }
    , {
        Title: "Toy Story",
        Link: "",
    }
    , {
        Title: "Ghostbusters",
        Link: "",
    }
    , {
        Title: "Tron",
        Link: "",
    }
    , {
        Title: "Braveheart",
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

//This initializes game
function StartGame () {
    MovieNum = Math.floor(Math.random() * MovieList.length)
    Movie = MovieList[MovieNum].Title.toLowerCase();
    Guesses_Remaining = 5;
    Letters_Guessed = [];
    Guesses_Correct = [];
    WordDisplay = ' ';
    userGuess = '';

    Reveal(Movie,userGuess);
}

//Updates Word Display for Game
function Reveal(Movie,Guesses_Correct) {

    WordDisplay = ' ';
    WordLength = 0;

    for (i=0;i < Movie.length;i++) {

        WordChar = Movie.charAt(i);

        if (Guesses_Correct.includes(WordChar,0)) {
            WordDisplay = WordDisplay + WordChar;
            WordLength++;
        } else if (WordChar === ' ') {
            WordDisplay = WordDisplay + '&nbsp';
            WordLength++;
        } else {
            WordDisplay = WordDisplay + "_ ";
        }
    }

    //If all of the word displays then user wins!
    if (WordLength === Movie.length) {
        Wins++;
        StartGame();
        Playtime();
    }

}

//Game Officially Starts, user can start to enter letters
function Playtime() {
    document.onkeyup = function(event) {
        
        //User Enters Letter
        var userGuess = event.key;
        
        //Check to see if is a letter and has already been guessed
        if (Letters_Guessed.includes(userGuess)==false && isLetter(userGuess)) {
            Letters_Guessed.push(userGuess)
            
            //Checks to see if letter is contained in Movie Title
            if (Movie.includes(userGuess)) {
                Guesses_Correct.push(userGuess);
                Reveal(Movie,Guesses_Correct);
            } else {
                Guesses_Remaining--;
            }
        }

        //Checks to see guesses balance, <=0 means game lost, start again
        if (Guesses_Remaining <= 0) {
            Losses++;
            StartGame();
            Playtime();
        }

        //Update HTML
        var Guesses = 
            "<p>Below are all the letters that have been used:</p>"+
            Letters_Guessed +
            "<br>" +
            "<br>" +
            "<p>Remaining Guesses: " + Guesses_Remaining + "</p>" +
            "<br>" +
            "<br>" + 
            "<p>Try to guess word: &nbsp" + "<br>" +
            WordDisplay + "</p>";
        
        var TrackRecord =
            "<br>" +
            "<br>" +
            "<p>Wins: " + Wins + '&nbsp &nbsp &nbsp &nbsp &nbsp' + "Losses: " + Losses + "</p>";
            

        document.querySelector("#Guesses").innerHTML = Guesses;
        document.querySelector("#TrackRecord").innerHTML = TrackRecord;
    }
}