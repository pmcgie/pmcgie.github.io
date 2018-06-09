//Create Global Variables
var questions
var count = 6;
var startit;
var counter;
var questionUsed;

//Create Question Objects'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
var questionBank = [ 
    {
        Question: 'How many different sports has the dog "Air Bud" played in (in the movies)?',
        QuestionResponses = ["3","4","5","6"],
        Correct: 2
        }
    ,
    {
        Question: 'What country are the islands of Islay, Mull, and St. Kilda located?',
        QuestionResponses = ["Ireland","Scotland","Iceland","Fiji"],
        Correct: 2
    },
    {
        Question: 'What is the capital of Nebraska?',
        QuestionResponses = ["Lincoln","Des Moine","Bernard","Lars"],
        Correct: 0
    },
    {
        Question: 'How many NBA Championships did Michael Jordan win?',
        QuestionResponses = ["4","5","6","7"],
        Correct: 2
    },

    {
        Question: 'What programming language does Excel use?',
        QuestionResponses = ["VBA","Python","Java","Bombay"],
        Correct: 0
    },

    {
        Question: 'In the 1979 NFL Draft, Joe Montana was selected with what number pick in the draft?',
        QuestionResponses = ["5","22","40","82"],
        Correct: 3
    },

    {
        Question: 'Which song was not released in the 80s?',
        QuestionResponses = ["B-52's: Love Shack","Tom Petty: Into the Great Wide Open","Michael Jackson: Billy Jean","Prince: When Doves Cry"],
        Correct: 1
    },

    {
        Question: 'Which one is not a cryptocurrency?',
        QuestionResponses = ["Bitcoin","Mintcoin","Swiftcoin","Potcoin"],
        Correct: 1
    },

    {
        Question: 'Which character is not a marvel comic books character?',
        QuestionResponses = ["Frog-Man","Owl","Aqua Man","Iron Man"],
        Correct: 2
    },

    {
        Question: 'When year was the Apple iPhone Introduced?',
        QuestionResponses = ["2005","2010","2001","2007"],
        Correct: 3
    }

]

//End Question Objects''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

//Create Timer Object'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
var timer = {

    startTime: 30,

    //Kicks off timer
    start: function() {
        intervalId = setInterval(timer.count,1000);
        clockRunning = true;
    },

    //Times up Next Question
    stop: function() {
        clearInterval(intervalId);
        $("#timer").text("Times up");
    },

    //Decrease time by 1
    count: function() {
        $("#timer").html(timer.time--)
    },
}
//End Timer Objects and Methods''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

//Starting the Game''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$('.questionmark').click(function(){
    
    //$("#myAudio")[0].play();
    $("#instruction").empty();
    $("#instruction").removeAttr('id');

    setTimeout(getReady,1000*2);
    setTimeout(playTime,1000*13);
    setTimeout(startQuestions,1000*14);
    var counter = setTimeout(startInterval,1000);
});


//Hype up message/introduction messages''''''''''''''''''''''''''''''''''''''''''''''''''

    //Function for interval
    function startInterval() {
        setInterval(function(){InitialTimer()},1500)
    }

    //Countdown to game start
    function InitialTimer(){
        if(count > 0){
            $(".questionmark").fadeOut('slow', function(){
                $(".questionmark").text(count);
                $(".questionmark").fadeIn();
                count--;
            });
        }
        if(count === 0){
            clearInterval(counter);
        } 
    }

    function getReady() {
        $(".questionmark").html("<h2>Get Ready to Play the Game!</h2>").fadeOut(2000);
    }
    function playTime() {
        $('.questionmark').html("<h2 style:'text-align: center;'>It's Time to Play Trivia!<h2>")
    }
//end of section'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

//Question Time'''''''''''''''''''''''''''''''''''''''''''''''''''''''''
function startQuestions(){

    //Remove ridiculous question mark so user can never play ridiculous by clicking it now
    $('.questionmark').empty();
    $('.questionmark').removeClass('.questionmark');
    $("#myAudio")[0].pause();
    questionUsed = [];
    
    //loop through questions
    for (i=0;i<10;i++) {
        var tid = setInterval(mycode, 1000);
    }
}
//Question Timer and generate random question from question banks''''''''''''''''''''''''