// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCsOzDKSbPN2PJarxOu_hlwrdEIJyUVwjY",
    authDomain: "rps-game-feb2f.firebaseapp.com",
    databaseURL: "https://rps-game-feb2f.firebaseio.com",
    projectId: "rps-game-feb2f",
    storageBucket: "rps-game-feb2f.appspot.com",
    messagingSenderId: "340686582166"
  };
  firebase.initializeApp(config);


//reset local storage for game
localStorage.setItem("playerName","None");
localStorage.setItem("playerStatus","None");

//Global Variables
  //Array Variables (associated with Firebase)
  var curUserList;
  var passwordList;
  var winsList;
  var lostList;
  var curplayerList;
  var P1_Status;
  var P2_Status;
  var storedStatus;
  var user = "unknown";

  //Set
  var database = firebase.database();


//Grab User List
database.ref().on("value",function(snapshot) {

  //Grab User Information
  curUserList = snapshot.val().UserInformation.UserList;
  curPasswordList = snapshot.val().UserInformation.PasswordList;
  curWinsList = snapshot.val().UserInformation.WinsList;
  curLostList = snapshot.val().UserInformation.LossesList;

  //Check Game information
  P1_Player = snapshot.val().Game.PlayerOne.Name;
  P2_Player = snapshot.val().Game.PlayerTwo.Name;
  P1_Status = snapshot.val().Game.PlayerOne.status;
  P2_Status = snapshot.val().Game.PlayerTwo.status;

})

//Sign up - create new user account
$("#Signup").on("click",function(event) {

  //User Name and Password values
  var user = $("#username").val();
  var password = $("#password").val();
  var wins = 0;
  var losses = 0;

  //Clear inputs after submittal
  $("#username").val('');
  $("#password").val('');

  //Check to see if ID is taken...also verify password
  if (curUserList.includes(user)) {
    alert("User ID is already taken. Try another ID.")
  } else if (user == '' || password == '') {
    alert("Need to enter a user name and password")
  } else {

    //Add New User information
    curUserList.push(user);
    curPasswordList.push(password);
    curWinsList.push(wins);
    curLostList.push(losses);

    //Move to Firebase
    database.ref("UserInformation").set ({
      UserList: curUserList,
      PasswordList: curPasswordList,
      WinsList: curWinsList,
      LossesList: curLostList
    })

  }

});

//User Login Action'''''''''''''''''''''''''''''''''''''''''''''''
$("#Login").on("click", function (event) {

  //User Name and Password values
  var user = $("#username").val();
  var password = $("#password").val();

  //Clear inputs after submittal
  $("#username").val('');
  $("#password").val('');

  var storedName = localStorage.getItem("playerName")
  storedStatus = localStorage.getItem("playerStatus")

  if (storedStatus ==="In-Play") {

    } else {


    if (curUserList.includes(user)) {

      //Find Index of user
      var indexNum = curUserList.findIndex(userID => userID ===user)

      if (curPasswordList[indexNum]===password) {

          //Change Player One Status and other Validations
          if (P1_Status ==="None") {
            P1_Status = "In-Play";

            //Change Player One Game Info in Firebase
            database.ref("Game/PlayerOne").set ({
              Name: user,
              status: P1_Status
            })

            //Update Player One DOM
            $("#P1_Name").empty();
            $("#P1_Record").empty();

            $("#P1_Name").text(user);
            $("#P1_Record").text("Wins: " + curWinsList[indexNum] + " Losses: " + curLostList[indexNum])
          
            //Update Local Storage for P1
            localStorage.setItem("playerName",user);
            localStorage.setItem("playerStatus",P1_Status);


          //Change Player Two Status and Other Validation
          } else if (P2_Status ==="None" && user !=P2_Player) {
            P2_Status = "In-Play";
            P2_Status = user;

            //Change Player Two Game Info in Firebase
            database.ref("Game/PlayerTwo").set ({
              Name: user,
              status: P2_Status
            })

            //Update Player Two DOM
            $("#P2_Name").empty();
            $("#P1_Record").empty();

            $("#P2_Name").text(user);
            $("#P2_Record").text("Wins: " + curWinsList[indexNum] + " Losses: " + curLostList[indexNum])
          
            //Update Local Storage for P2
            localStorage.setItem("playerName",user);
            localStorage.setItem("playerStatus",P2_Status);


          } else if(user ===  P2_Player) {
            alert("User can not play itself. Need another user to join.")

          } else {
            alert("Two Players are already playing this game, you will need to wait until one exits.")        
          }

      
      //If password does not match with user this message appears
      } else {
        alert("Invalid Account. Try again or create new account.")
      }
      
    //If person is logging and user name does not exist
    } else {
      alert("Invalid Account. Try again or create new account.")
    }
  }

});

//Need command that when user leaves browser it will change local storage status and kick them out of game
// Execute a function when the user releases a key on the keyboard
$("#message").keypress(function(e) {
  if(e.which == 13) {
    addMessage() 
  }
});

//Post Message
$("#sendMessage").on("click", function (event) {
  addMessage() 
});

function addMessage() {
    
  //Set up for adding row to table
    var tableBody = $("tbody");
    var tRow = $("<tr>");
    var tdUser = $("<td>").text(user);
    var tdMessage = $("<td>").text($("#message").val());
  
    tRow.append(tdUser, tdMessage);
    tableBody.append(tRow);

    $("#message").val('');
}




