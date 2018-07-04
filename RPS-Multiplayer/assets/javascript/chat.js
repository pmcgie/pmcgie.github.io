//Global Variables --- COPY APP.JS AND HAVE IT REPLICATE APP.JS
var userName
var curChat
var curMessageUser = [];
var curMessage = [];

//Set up game on load'''''''''''''''''''''''''''''''''''''''
database.ref().on("value",function(snapshot) {

    //User ID's
    P1_ID = snapshot.val().Game.PlayerOne.Name;
    P2_ID = snapshot.val().Game.PlayerTwo.Name;

})

database.ref("Chat").on("value",function(snapshot){

})

//On enter kicks off events and generates message
$("#message").keypress(function(e) {
    if(e.which == 13) {
      assignUser();
      postComment();
    }
});    


function assignUser() {

    //Need player reference number (which is stored in session storage)
    var playerNum = sessionStorage.getItem('player')
    
    if (playerNum == 1) {
        userName = P1_ID;

    } else if(playerNum == 2) {
        userName = P2_ID

    } else {
        userName = "No Name"
    }
}

function postComment() {

    //convert Firebase Time
    var timeStamp = new Date()
    var convertedTime = moment(timeStamp).format('MMMM Do YYYY, h:mm:ss a');
    
  
    var tableBody = $("tbody");
    var tRow = $("<tr>");
    var tdUser = $("<td>").text(convertedTime + "     "+ userName);
    var tdMessage = $("<td>").text($("#message").val());

    tRow.prepend(tdUser, tdMessage);
    tableBody.prepend(tRow);

    curMessageUser.push(tdUser);
    curMessage.push(tdMessage);


}