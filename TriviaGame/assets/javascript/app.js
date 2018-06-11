//Create Global Variables
var questions
var count = 6; 
var startit;
var counter;
var intervalId;
var nextQuestion = '<div style="text-align:center; padding:20px;">'+
  '<button id="nextQuestion" type="button" class="btn btn-primary">Click Here for Another Question</button>'+
  '</div>';
var timeDisplay;
var questionNum;
var questionHeader;
var questionChoices;
var rightAnswer;

//Create Question Objects'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
var questionBank = [ 
    {
        Question: 'How many different sports has the dog "Air Bud" played in (in the movies)?',
        QuestionResponses: ["3","4","5","6"],
        Correct: 2
        }
    ,
    {
        Question: 'What country are the islands of Islay, Mull, and St. Kilda located?',
        QuestionResponses: ["Ireland","Scotland","Iceland","Fiji"],
        Correct: 2
    },
    {
        Question: 'What is the capital of Nebraska?',
        QuestionResponses: ["Lincoln","Des Moine","Bernard","Lars"],
        Correct: 0
    },
    {
        Question: 'How many NBA Championships did Michael Jordan win?',
        QuestionResponses: ["4","5","6","7"],
        Correct: 2
    },

    {
        Question: 'What programming language does Excel use?',
        QQuestionResponses: ["VBA","Python","Java","Bombay"],
        Correct: 0
    },

    {
        Question: 'In the 1979 NFL Draft, Joe Montana was selected with what number pick in the draft?',
        QuestionResponses: ["5","22","40","82"],
        Correct: 3
    },

    {
        Question: 'Which song was not released in the 80s?',
        QuestionResponses: ["B-52's: Love Shack","Tom Petty: Into the Great Wide Open","Michael Jackson: Billy Jean","Prince: When Doves Cry"],
        Correct: 1
    },

    {
        Question: 'Which one is not a cryptocurrency?',
        QuestionResponses: ["Bitcoin","Mintcoin","Swiftcoin","Potcoin"],
        Correct: 1
    },

    {
        Question: 'Which character is not a marvel comic books character?',
        QuestionResponses: ["Frog-Man","Owl","Aqua Man","Iron Man"],
        Correct: 2
    },

    {
        Question: 'What year was the first Apple iPhone Introduced?',
        QuestionResponses: ["2005","2010","2001","2007"],
        Correct: 3
    }

]
//End Question Objects''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


//  This code will run as soon as the page loads.
window.onload = function() {

    //  Click events are done for us:
    $("#nextQuestion").click(timer.start);
  
  };

//Create Timer Object'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
var timer = {

    time:0,

    //Kicks off timer and grabs question for interval
    start: function() {

        //Grab important question information
        timer.time = 5;
        questionNum =  Math.floor(Math.random() * questionBank.length);
        questionHeader = questionBank[questionNum].Question;
        questionChoices = questionBank[questionNum].QuestionResponses;
        rightAnswer = questionBank[questionNum].Correct;


        $("#question").html(questionHeader);

        //Format question
        $("#questionChoices").css("background-color", "white");
        $("#questionChoices").css("border", "10px solid black");
        $("#questionChoices").css("border-radius", "10px");
        $("#nextQuestion").empty();
        $("#questionChoices").empty();

        //Create Choices
        for (i=0; i<4; i++) {
            $("#questionChoices").append("<form><input type='radio'>" + questionChoices[i] + "<br></form>")
        }

        intervalId = setInterval(timer.count,1000);
    },

    //Decrease time by 1
    count: function() {
        timeDisplay = timer.time--;
        console.log(timeDisplay);
        $("#timer").html(timeDisplay)

        if (timeDisplay<=0) {
            clearInterval(intervalId);
            $("#questionChoices").empty();
            $("#question").empty();
            $("#timer").html(" ");
            $("#question").css("border", "0px solid black");
            $("#triviaStartup").css("border", "0px solid black");
            $("#questionChoices").css("border", "0px solid black");
            $("#nextQuestion").html(nextQuestion);
        }
    },
}
//End Timer Objects and Methods''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

//Starting the Game''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$('.questionmark').click(function(){
    
    //$("#myAudio")[0].play();
    $("#instruction").empty();
    $("#instruction").removeAttr('id');

    setTimeout(getReady,1000*2);
    setTimeout(playTime,1000*12);
    setTimeout(startQuestions,1000*14);
    setTimeout(startInterval,1000);
});


//Hype up message/introduction messages''''''''''''''''''''''''''''''''''''''''''''''''''

    //Function for interval
    function startInterval() {
        intervalId = setInterval(function(){InitialTimer()},1500)
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
            clearInterval(intervalId);
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

    //Remove ridiculous question mark and other things
    $('.questionmark').empty();
    $('.questionmark').removeClass('.questionmark');
    $("#myAudio")[0].pause();
    
    timer.start();
}
//Question Timer and generate random question from question banks''''''''''''''''''''''''

//Need to give conditions of % of success