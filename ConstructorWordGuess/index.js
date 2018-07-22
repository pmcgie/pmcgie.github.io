//The file containing the logic for the course of the game, which depends on Word.js and:

//Randomly selects a word and uses the Word constructor to store it
//Prompts the user for each guess and keeps track of the user's remaining guesses

//Pseudo Time ---
//Create word game object
    //Objects within Word Game Object:
        //Array of words
        //Wins and Losses for current session
        //guesses left
    //Functions
        //Game Reset
        //Start the game
        //Game Responses
            //Response of true, correct letter guess
            //Response of false, wrong letter guess

//Brief Explanation of Game
console.log("Hangman Game: Constructor Node Edition")
console.log("Guess all the right letters within 8 guesses, you win...else too bad.")
console.log("Word will be drawn from a random word bank of things associated to a house")

//Connect to word.js for word constructor

wordGame = {
    wordList: ['lamp','closet','sofa','couch','kitchen','stove','basement','garage','mancave'],
    Wins: 0,
    Losses: 0,
    guessesLeft: 10,
    Word: '',

    newGame: function(selectedWord) {
        this.resetGame;
        this.selectedWord = new word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)])
    },

    resetGame: function() {
        guessesLeft = 10;
    }
}