//Initial Variables
var Wins = 0;
var Losses = 0;
var userTotal;
var targetNum;

//Functions.................................................
//Initial Game Kickoff
function StartGame () {

    //Set Target Number
    targetNum =  Math.floor(Math.random() * 120) + 19;
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

        userTotal = userTotal + valNum;
        $("#User-Number").html("Total Score: " + userTotal);


        //Create conditional statements to update game status

            //Add one to win or loss
            if (userTotal===targetNum) {
                Wins++;
                $("#Wins").html("Wins: " + Wins);
                StartGame();
            } else if (userTotal>targetNum) {
                Losses++;
                $("#Losses").html("Losses: " + Losses);
                StartGame();
            }

    }
)
});