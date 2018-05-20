//Create Initial Variables
var Wins;
var Movie;
var Guesses_Remaining;
var Guesses_Correct;
var Guesses_Wrong;
var MovieNum;


function StartGame () {
    MovieNum = Math.floor(Math.random() * MovieList.length)
    Movie = MovieList[MovieNum];
    Guesses_Remaining = 13;
    Guesses_Correct = [];
    Guesses_Wrong = [];
    console.log(Movie);
}

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

StartGame();
