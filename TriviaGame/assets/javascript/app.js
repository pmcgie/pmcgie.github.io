//Create Variables
var questions
var count = 5;
var startit;
var counter;

//Click on Question Mark for introduction of Game
$('#questionmark').click(function(){
    
        $("#myAudio")[0].play();
        $("#categories").empty();
        $("#categories").removeAttr('id');

        startit = setTimeout(getReady,1000);
        clearTimeout(startit);
        counter = setInterval(function(){updateTimer()},1500)
        
});

//Initial "Get Ready" Message
function getReady() {
     $("#questionmark").html("<h2>Get Ready to Play the Game in...!</h2>").fadeOut(2000);
}

//Countdown
function updateTimer(){
    if(count > 0){
        $("#questionmark").fadeOut('slow', function(){
        	$("#questionmark").text(count);
            $("#questionmark").fadeIn();
            count--;
        });
    }
    else if(count === 0){
        $("#questionmark").fadeOut('slow', function(){
            $("#questionmark").text(count);
            $("#questionmark").fadeIn();
            clearInterval(counter);
            setTimeout(playTime,1000);
            clearTimeout(setTimeout);
        });
    }
}

//
function playTime() {
    // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
    $('#questionmark').html("<h2>Time to Play Trivia!<h2>")
}