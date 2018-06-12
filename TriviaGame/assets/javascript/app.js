//Create Global Variables
var questions
var count = 6; 
var startit;
var counter;
var intervalId;
var timeDisplay;
var questionNum;
var questionHeader;
var questionChoices;
var rightAnswer;
var optionSelected;
var pullGifNum;
var pullGif;
var gifMessage;
var usedQuestions;
var nextQuestion = '<div style="text-align:center; padding:20px;">'+
  '<button id="nextQuestion" type="button" class="btn btn-primary">Click Here for Another Question</button>'+
  '</div>';
var submit = '<div style="text-align:center; padding:20px;">'+
'<button id="submit" type="button" class="btn btn-primary">Click Here to Submit Response</button>'+
'</div>';

//Create Question Objects'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
var questionBank = [ 
    {Question: 'How many different sports has the dog "Air Bud" played in (in the movies)?',QuestionResponses: ["3","4","5","6"],Correct: 2},
    {Question: 'What country are the islands of Islay, Mull, and St. Kilda located?',QuestionResponses: ["Ireland","Scotland","Iceland","Fiji"],Correct: 2},
    {Question: 'What is the capital of Nebraska?',QuestionResponses: ["Lincoln","Des Moine","Bernard","Lars"],Correct: 0},
    {Question: 'How many NBA Championships did Michael Jordan win?',QuestionResponses: ["4","5","6","7"],Correct: 2},
    {Question: 'What programming language does Microsoft Excel use?',QuestionResponses: ["VBA","Python","Java","Bombay"],Correct: 0},
    {Question: 'In the 1979 NFL Draft, Joe Montana was selected with what number pick in the draft?',QuestionResponses: ["5","22","40","82"],Correct: 3},
    {Question: 'Which song was not released in the 80s?',QuestionResponses: ["B-52's: Love Shack","Tom Petty: Into the Great Wide Open","Michael Jackson: Billy Jean","Prince: When Doves Cry"],Correct: 1},
    {Question: 'Which one is not a cryptocurrency?',QuestionResponses: ["Bitcoin","Mintcoin","Swiftcoin","Potcoin"],Correct: 1},
    {Question: 'Which character is not a marvel comic books character?',QuestionResponses: ["Frog-Man","Owl","Aqua Man","Iron Man"],Correct: 2},
    {Question: 'What year was the first Apple iPhone Introduced?',QuestionResponses: ["2005","2010","2001","2007"],Correct: 3},
    {Question: 'In Psychology, what term is used when your brain is incapable of creating a link between information that you tell it and the short or long-term memory?',QuestionResponses: ["Drive Reduction","Encoding Failure","Hercules Theory","Superego"],Correct: 1},
    {Question: 'Who said this: "Being sober on a bus is, like, totally different than being drunk on a bus."',QuestionResponses: ["Gwen Stefani","Stevie Nicks","Kanye West","Ozzy Ozbourne"],Correct: 3},
    {Question: 'Who said this: "If life gives you lemons, make some kind of fruity juice"',QuestionResponses: ["Flavor Flav","Conan O'Brien","Barbara Bush","Meryl Streep"],Correct: 1},
    {Question: 'Turophobia is the fear of what?',QuestionResponses: ["falling asleep","clowns","cheese","trees"],Correct: 2},
    {Question: 'What is the world record for the longest beard (in meters)?',QuestionResponses: ["5.33","6.21","7.82","9.11"],Correct: 0},
    {Question: 'What is: ((((10*10)+100)/25)*4)+3?',QuestionResponses: ["38","48","30","35"],Correct: 3},
    {Question: 'Who won the 1980 SuperBowl?',QuestionResponses: ["Green Bay Packers","Dallas Cowboys","New England Patriots","Pittsburgh Steelers"],Correct: 3},
    {Question: 'Which of these companies invented Ethernet?',QuestionResponses: ["Apple","Xerox","Cisco","AT&T"],Correct: 1},
    {Question: 'What is the largest freshwater lake in the world (in terms of volume)?',QuestionResponses: ["Lake Victoria","Lake Superior","Lake Baikal","Caspian Sea"],Correct: 2},
    {Question: 'In the game Monopoly, how much do you collect for finishing second in the beauty contest?',QuestionResponses: ["$10","$40","$100","$150"],Correct: 0},
    {Question: 'What does the term "piano" mean?',QuestionResponses: ["To be played softly","friendly music","to inspire","to be played in front of a large audience"],Correct: 0},
    {Question: 'As of the year 2017, which state has the most bars per capita?',QuestionResponses: ["Alabama","New York","North Dakota","Wisconsin"],Correct: 3},
    {Question: 'What state do you get sales tax on "cut" bagels versus no sales tax on "uncut" bagels?',QuestionResponses: ["New York","Texas","Mississippi","Montana"],Correct: 0},
]
//End Question Objects''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

//Create GIF Objects''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
var gifs = {
    Winner: ["<img src='assets/images/win01.gif' alt='Winner Image'>","<img src='assets/images/win02.gif' alt='Winner Image'>",
                "<img src='assets/images/win03.gif' alt='Winner Image'>","<img src='assets/images/win04.gif' alt='Winner Image'>",
                "<img src='assets/images/win05.gif' alt='Winner Image'>"],

    Loser: ["<img src='assets/images/lose01.gif' alt='Loser Image'>","<img src='assets/images/lose02.gif' alt='Loser Image'>",
                "<img src='assets/images/lose03.gif' alt='Loser Image'>","<img src='assets/images/lose04.gif' alt='Loser Image'>",
                "<img src='assets/images/lose05.gif' alt='Loser Image'>"]
}
//End GIF Objects'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


//  This code will run as soon as the page loads.
window.onload = function() {
    //  Click events are done for us:
    $("#nextQuestion").click(timer.start);
    $("#submit").click(timer.stop);
  };


function responsiveButton(i) {
    document.getElementById('option'+i).onclick = function() {
        optionSelected = $("input[name='option']:checked").val();
      }
}

function responseSubmit() {

    //Right Answer
    if (rightAnswer==optionSelected) {
        pullGifNum =  Math.floor(Math.random() * gifs.Winner.length);
        pullGif = gifs.Winner[pullGifNum];
        gifMessage = "<h2 style='color: aliceblue;'>You Won!</h2>" + pullGif
    }
    //Wrong Answer
    else {
        pullGifNum =  Math.floor(Math.random() * gifs.Loser.length);
        pullGif = gifs.Loser[pullGifNum];
        gifMessage = "<h2 style='color: aliceblue;'>You Lost!</h2>" + pullGif
    }

    $("#gifImage").append(gifMessage);

}

//Create Timer Object'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
var timer = {

    time:0,

    //Kicks off timer and grabs question for interval
    start: function() {

        //Grab important question information
        timer.time = 30;
        optionSelected = -1;
        questionNum =  Math.floor(Math.random() * questionBank.length);

        //Reduce repeat questions - recalculate num
        if (usedQuestions.includes(questionNum)) {
            while (usedQuestions.includes(questionNum) && usedQuestions.length<=10) {
                questionNum =  Math.floor(Math.random() * questionBank.length);
            }
        }   
        
        //Clear out array once length is 10
        if (usedQuestions.length === 10) {
            usedQuestions = [];
        }

        usedQuestions.push(questionNum); //modify array

        questionHeader = questionBank[questionNum].Question;
        questionChoices = questionBank[questionNum].QuestionResponses;
        rightAnswer = questionBank[questionNum].Correct;

        //Set up question and submit button
        $("#question").html(questionHeader);
        $("#submit").html(submit);

        //Format question
        $("#questionChoices").css("background-color", "white");
        $("#questionChoices").css("border", "5px solid black");
        $("#questionChoices").css("border-radius", "10px");
        $("#nextQuestion").empty();
        $("#questionChoices").empty();
        $("#gifImage").empty();

        //Create Question Choices
        for (i=0; i<4; i++) {
            $("#questionChoices").append("<input id='option" + i + "' type='radio' name='option'" + " value=" + i +  " style='margin-left:5px;'/>" + questionChoices[i] + "<br>")
            responsiveButton(i);
        }   

        intervalId = setInterval(timer.count,1000);
    },

    stop: function() {
        //Clear items out
        clearInterval(intervalId);
        $("#questionChoices").empty();
        $("#question").empty();
        $("#submit").empty();
        $("#timer").html(" ");

        //Temporary formatting and next question button
        $("#question").css("border", "0px solid black");
        $("#triviaStartup").css("border", "0px solid black");
        $("#questionChoices").css("border", "0px solid black");

        //Check response to see if correct or false
        responseSubmit();

        //Create to allow user to go to next question
        $("#nextQuestion").html(nextQuestion);
    },

    //Decrease time by 1
    count: function() {
        timeDisplay = timer.time--;
        console.log(timeDisplay);
        $("#timer").html(timeDisplay)

        //Clear everything for next question
        if (timeDisplay<=0) {
            timer.stop();
        }
    },
}
//End Timer Objects and Methods''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

//Starting the Game''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$('.questionmark').click(function(){
    
    $("#myAudio")[0].play();
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
    usedQuestions = [];
    $('.questionmark').empty();
    $('.questionmark').removeClass('.questionmark'); //for future use and reference use .hide
    $("#myAudio")[0].pause();
    
    timer.start();
}