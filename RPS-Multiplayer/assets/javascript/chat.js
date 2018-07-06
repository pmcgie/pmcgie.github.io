//Global Variables
var curMessage = [];
var P1_Player;
var P2_Player;
var userName;


//Store Messages Firebase
database.ref().on("value",function(snapshot) {

    //players current messages
    var playerMessage = snapshot.val().Chat.CurMessage;

    P1_Player = snapshot.val().Game.PlayerOne.Name;
    P2_Player = snapshot.val().Game.PlayerTwo.Name;


    //Message from player 1 will now be saved to Chat Array
    if (playerMessage !="None") {

        var playerMessage = snapshot.val().Chat.CurMessage;

        //Change Firebase
        database.ref("Chat/CurMessage").set("None")

        //push dialogue to array and into Firebase
        curMessage.push(playerMessage);
        database.ref("Chat/ChatString").set(curMessage);

        //Post on message board
        $("#chatDisplay").empty();
        $("#chatDisplay").prepend(curMessage)

    }

})


//On enter kicks off events and generates message
$("#message").keypress(function(e) {
    if(e.which == 13) {
      assignUser();
      $("#message").val('');
    }
});    

//Assign User Name for Message
function assignUser() {
    
    //User ID's
    var playerNum = sessionStorage.getItem('player')

    if (playerNum == 1) {
        userName = P1_Player;
        postComment()

    } else if(playerNum == 2) {
        userName = P2_Player;
        postComment()

    } else {
        userName = "No Name";
        database.ref("Chat/CurMessage").set("None")
    }
}

//Post Comment and save in Firebase "current message"
function postComment() {

    //convert Firebase Time
    var timeStamp = new Date()
    var convertedTime = moment(timeStamp).format('MMMM Do YYYY, h:mm:ss a');
    
    //create new div w/ message
    var Message = $("#message").val();
    var storedMessage = ("<div style=margin-left:5px;>" + convertedTime + "  " +  userName +  " : " + Message + "</div>");
    
    //Change in firebase current message
    database.ref("Chat/CurMessage").set(storedMessage);

}