//Need to autoplay indy song
//Change font styles (use google fonts)

//Initial Variables
var Wins = 0;
var Losses = 0;
var totalClicks = 0;
var userTotal;
var targetNum;
var numClicks;
var aveClicks;


//Functions.................................................
//Initial Game Kickoff
function StartGame () {

    //Set Target Number
    targetNum =  Math.floor(Math.random() * 120) + 19;
    numClicks = 0;
    $("#Target-Number").html("Number to Guess: " + targetNum);
    
    //Reset total score
    userTotal = 0;
    $("#User-Number").html("Total Score: ");

    //Set Gem Values
    document.getElementById("ruby").value= Math.floor(Math.random() * 12) + 1;
    document.getElementById("emerald").value= Math.floor(Math.random() * 12) + 1;
    document.getElementById("sapphire").value= Math.floor(Math.random() * 12) + 1;
    document.getElementById("gold").value= Math.floor(Math.random() * 12) + 1;

}

//Trigger Events and GamePlay...............................
$(document).ready(function(){

    StartGame();

    //Trigger event once button clicked
    $(".btn").click(function() {

        //Get value and convert to int
        var clickedVal = $(this).attr("value");
        var valNum = parseInt(clickedVal);

        numClicks++;
        totalClicks++;
        $("#totalClicks").html("Total Clicks: " + totalClicks);
        $("#gameClicks").html("Game Clicks: " + numClicks);

        userTotal = userTotal + valNum;
        $("#User-Number").html("Total Score: " + userTotal);


        //Create conditional statements to update game status

            //Add one to win or loss
            if (userTotal===targetNum) {
                Wins++;
                $("#Wins").html("Wins: " + Wins);
                aveClicks = totalClicks/(Wins + Losses);
                $("#aveClicks").html("Ave Clicks Per Game: " + aveClicks);
                StartGame();

            } else if (userTotal>targetNum) {
                Losses++;
                $("#Losses").html("Losses: " + Losses);
                aveClicks = totalClicks/(Wins + Losses);
                $("#aveClicks").html("Ave Clicks Per Game: " + aveClicks);
                StartGame();
            }

    }
)
});