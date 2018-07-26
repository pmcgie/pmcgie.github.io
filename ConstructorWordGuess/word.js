var TV = require("./letter");


//An array of new Letter objects representing the letters of the underlying word
//A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
//A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

//Need to make it such that it loops through all letters in the word using the letter constructor

var word = function(selectedWord) {
    this.selectedWord = selectedWord
    this.letters = letters
}

module.exports = word