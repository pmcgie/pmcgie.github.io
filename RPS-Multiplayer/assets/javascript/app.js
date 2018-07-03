// Initialize Firebase''''''''''''''''''''''''''''''''''''''
var config = {
  apiKey: "AIzaSyCsOzDKSbPN2PJarxOu_hlwrdEIJyUVwjY",
  authDomain: "rps-game-feb2f.firebaseapp.com",
  databaseURL: "https://rps-game-feb2f.firebaseio.com",
  projectId: "rps-game-feb2f",
  storageBucket: "rps-game-feb2f.appspot.com",
  messagingSenderId: "340686582166"
};
firebase.initializeApp(config);


//Global Variables'''''''''''''''''''''''''''''''''''''''''''
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
var playerRef;
var curWinsList;
var curLostList;

//Set database
var database = firebase.database();

//reset session  storage
sessionStorage.clear();
sessionStorage.setItem("player",0)


//Set up game on load'''''''''''''''''''''''''''''''''''''''
database.ref().on("value",function(snapshot) {

  //Grab User Information
  curUserList = snapshot.val().UserInformation.UserList;
  curPasswordList = snapshot.val().UserInformation.PasswordList;
  curWinsList = snapshot.val().UserInformation.WinsList;
  curLostList = snapshot.val().UserInformation.LossesList;

  //Check Game information
  P1_Player = snapshot.val().Game.PlayerOne.Name;
  P1_Status = snapshot.val().Game.PlayerOne.status;
  P2_Player = snapshot.val().Game.PlayerTwo.Name;
  P2_Status = snapshot.val().Game.PlayerTwo.status;

  //Record Information
  P1_Wins = snapshot.val().Game.PlayerOne.Wins;
  P1_Losses = snapshot.val().Game.PlayerOne.Losses;
  P2_Wins = snapshot.val().Game.PlayerTwo.Wins;
  P2_Losses = snapshot.val().Game.PlayerTwo.Losses;

  //Game Choice
  P1_Choice = snapshot.val().Game.PlayerOne.play;
  P2_Choice = snapshot.val().Game.PlayerTwo.play;

  //User ID
  P1_ID = snapshot.val().Game.PlayerOne.Index;
  P2_ID = snapshot.val().Game.PlayerTwo.Index;


  //Populate Current Players information
  if (P1_Status === "None") {
    $("#P1_Name").text('Waiting on Player')
    $("#P1_Record").hide()
  } else {
    $("#P1_Record").show()
    $("#P2_Record").show()
    $("#P1_Name").text(P1_Player);
    $("#P1_Record").text("Wins: " + P1_Wins + " Losses: " + P1_Losses)
  }

  if (P2_Status === "None") {
    $("#P2_Name").text('Waiting on Player')
    $("#P2_Record").hide()
  } else {
    $("#P1_Record").show()
    $("#P2_Record").show()
    $("#P2_Name").text(P2_Player);
    $("#P2_Record").text("Wins: " + P2_Wins + " Losses: " + P2_Losses)
  }

  if (P1_Choice !="None") {
    $("#P1_Options").hide()
    $("#P1_Record").hide()
    $("#P1_Decision").show()
    $("#P1_Decision").text("player one has submitted response, waiting for player two")
  }

  if (P2_Choice !="None") {
    $("#P2_Options").hide()
    $("#P2_Record").hide()
    $("#P2_Decision").show()
    $("#P2_Decision").text("player two has submitted response, waiting for player one")
  }

  if (P1_Choice !="None" && P2_Choice !="None") {

    var WinnerOutome = decideWinner(P1_Choice,P2_Choice);

    //reset play choices for players
    database.ref("Game/PlayerOne/play").set("None")
    database.ref("Game/PlayerTwo/play").set("None")
    
    //Update Records and show outcomes
    if (WinnerOutome === 1) {
        $("#WinnerReveal").text("Player One Wins!")
        var totalWins = P1_Wins + 1
        var totalLosses = P2_Losses + 1

        database.ref("Game/PlayerOne/Wins").set(totalWins)
        database.ref("Game/PlayerTwo/Losses").set(totalLosses)

        database.ref("UserInformation/WinsList/" + P1_ID).set(totalWins)
        database.ref("UserInformation/LossesList/" + P2_ID).set(totalLosses)


    } else if (WinnerOutome === 2) {
        $("#WinnerReveal").text("Player Two Wins!")
        var totalWins = P2_Wins + 1
        var totalLosses = P1_Losses + 1

        database.ref("Game/PlayerTwo/Wins").set(totalWins)
        database.ref("Game/PlayerOne/Losses").set(totalLosses)

        database.ref("UserInformation/WinsList/" + P2_ID).set(totalWins)
        database.ref("UserInformation/LossesList/" + P1_ID).set(totalLosses)

    } else {
      $("#WinnerReveal").text("Tie Game.")
    }

    setTimeout("$('#WinnerReveal').text('New Game will Start in 2 Seconds')",2000);
    setTimeout(resetOptions,4000)
    
  }

})

//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

//Reset Game options
function resetOptions() {
  $('#WinnerReveal').text('')
  $("#P1_Options").show()
  $("#P1_Record").show()
  $("#P2_Options").show()
  $("#P2_Record").show()
  $("#P1_Decision").hide()
  $("#P2_Decision").hide()
}


//Decide Winner'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
function decideWinner(P1_Choice,P2_Choice) {
if (P1_Choice =="Rock" && P2_Choice =="Scissors") {
    return 1;

} else if (P1_Choice == "Scissor" && P2_Choice == "Rock") {
    return 2;

} else if (P1_Choice == "Paper" && P2_Choice == "Rock") {
    return 1;

} else if (P1_Choice == "Rock" && P2_Choice == "Paper") {
    return 2;

} else if (P1_Choice == "Scissors" && P2_Choice == "Paper") {
    return 1;

} else if (P1_Choice == "Paper" && P2_Choice == "Scissors") {
    database.ref("GameWinner").set(2);
    return 2;
  
} else {
    return 0;
}
}

//player Submits Choice (updates user choice in Firebase)''''''''''''''''''''''''''''''''''''''
$("#P1_Rock").on("click",function (event){
  var check = sessionStorage.getItem('player')
  if (P1_Status == "In-Play" && check == 1) {
    playerplayRef = playerRef.child('play')
    playerplayRef.set ("Rock")
  }
})

$("#P1_Paper").on("click",function (event){
var check = sessionStorage.getItem('player')
if (P1_Status == "In-Play" && check == 1) {
  playerplayRef = playerRef.child('play')
  playerplayRef.set ("Paper")
  }
})

$("#P1_Scissors").on("click",function (event){
var check = sessionStorage.getItem('player')
if (P1_Status == "In-Play" && check == 1) {
  playerplayRef = playerRef.child('play')
  playerplayRef.set ("Scissors")
}
})

$("#P2_Rock").on("click",function (event){
var check = sessionStorage.getItem('player')
if (P2_Status == "In-Play" && check == 2) {
  playerplayRef = playerRef.child('play')
  playerplayRef.set ("Rock")
}
})

$("#P2_Paper").on("click",function (event){
var check = sessionStorage.getItem('player')
if (P2_Status == "In-Play" && check == 2) {
  playerplayRef = playerRef.child('play')
  playerplayRef.set ("Paper")
}
})

$("#P2_Scissors").on("click",function (event){
var check = sessionStorage.getItem('player')
if (P2_Status == "In-Play" && check == 2) {
  playerplayRef = playerRef.child('play')
  playerplayRef.set ("Scissors")
}
})


//User Login'''''''''''''''''''''''''''''''''''''''''''''''
$("#Login").on("click", function (event) {

//User Name and Password values
var user = $("#username").val();
var password = $("#password").val();

//Clear inputs after submittal
$("#username").val('');
$("#password").val('');


  if (curUserList.includes(user)) {

    //Find Index of user
    var indexNum = curUserList.findIndex(userID => userID ===user)

    var Wins = curWinsList[indexNum];
    var Losses = curLostList[indexNum];

    if (curPasswordList[indexNum]===password) {

        //Change Player One Status and other Validations
        if (P1_Status ==="None") {
          P1_Status = "In-Play";
          loadRecords()
          $("#P1_Record").show()
          $("#P2_Record").show()

          //Set session  storage to identify player
          sessionStorage.setItem("player", 1);

          playerRef = database.ref("Game/PlayerOne");

          //Change Player One Game Info in Firebase
          playerRef.set ({
            Name: user,
            status: P1_Status,
            Wins: Wins,
            Losses: Losses,
            play: "None",
            Index: indexNum
          })

          playerRef.onDisconnect().set ({
            Name: "None",
            status: "None",
            Wins: 0,
            Losses: 0,
            play: "None",
          })


        //Change Player Two Status and Other Validation
        } else if (P2_Status ==="None" && sessionStorage.getItem('player')!=1) {
          P2_Status = "In-Play";
          loadRecords()
          $("#P1_Record").show()
          $("#P2_Record").show()

          //Set session  storage to identify player
          sessionStorage.setItem("player", 2);

          //Change Player Two Game Info in Firebase
          playerRef = database.ref("Game/PlayerTwo");

          playerRef.set ({
            Name: user,
            status: P2_Status,
            Wins: Wins,
            Losses: Losses,
            play: "None",
            Index: indexNum
          })

          playerRef.onDisconnect().set ({
            Name: "None",
            status: "None",
            Wins: 0,
            Losses: 0,
            play: "None",
          })

        } else {
          alert("(1)Two Players are already playing this game, you will need to wait until one exits or (2) You are trying to play against yourself which is not allowed.")        
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

);


//Create Logoff option while in window''''''''''''''''''''''''''''''''''''''''''''''
$("#Logout").on("click",function(event) {

  //reset
  try {playerRef.set ({
    Name: "None",
    status: "None",
    Wins: 0,
    Losses: 0,
    play: "None",
  })} catch(err) {
  }

})

//Reset Entire Game of Users''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$("#Kickoff").on("click",function(event) {

//reset database players in game
database.ref("Game/PlayerOne").set ({
  Name: "None",
  status: "None",
  Wins: 0,
  Losses: 0,
  play: "None"
})
database.ref("Game/PlayerTwo").set ({
  Name: "None",
  status: "None",
  Wins: 0,
  Losses: 0,
  play: "None"
})

sessionStorage.setItem("player", 0);

resetOptions()
$("#P1_Record").hide()
$("#P2_Record").hide()

})

function loadRecords() {
  $("#P1_Record").text("Wins: " + P1_Wins + " Losses: " + P1_Losses)
  $("#P2_Record").text("Wins: " + P2_Wins + " Losses: " + P2_Losses)
}


//Sign up - ability to create user account''''''''''''''''''''''
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
//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''