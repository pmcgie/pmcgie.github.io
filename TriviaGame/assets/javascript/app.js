//Create Variables
var questions
var timer

var content = '<h1>Message Header!</h1>';


//Initial Trivia Countdown

//Testing out fade, but eventually will be fade out and countdown into the game from 5,4,3,2,1, Trivia Time!
$(window).keypress(function(e){
    if(e.keyCode == 32){
        $('body').fadeOut(1000,function() {
            $('body').replaceWith(content);
        });
    }
});