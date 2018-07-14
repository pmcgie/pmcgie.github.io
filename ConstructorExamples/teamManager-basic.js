// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function for creating player objects
function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;
  // flips a coin: if the the value is equal to 0 then this.offense goes up by one. if the value is equal to 1
  this.goodGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense++;
      console.log(this.name + "'s offense has gone up!\n----------");
    }
    else {
      this.defense++;
      console.log(this.name + "'s defense has gone up!\n----------");
    }
  };
  this.badGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense--;
      console.log(this.name + "'s offense has gone down!\n----------");
    }
    else {
      this.defense--;
      console.log(this.name + "'s defense has gone down!\n----------");
    }
  };
  this.printStats = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n----------");
  };
}

// arrays used to contain all of our player objects
var starters = [];
var subs = [];
var team = [];
var rounds = [];
var score_Team = 0;

// recursive function which will allow the user to create 5 players and then will print each player's stats afterwards
var createPlayer = function() {
  // if the length of the team array is 5 or higher, no more questions will be asked
  if (starters.length + subs.length < 5) {
    console.log("\nNEW PLAYER!\n");
    inquirer.prompt([
      {
        name: "name",
        message: "Player's Name: "
      }, {
        type: "list",
        name: "position",
        message: "Player's position: ",
        choices: ["Forward", "Back", "Striker","Goalkeeper"]
      }, {
        name: "offense",
        message: "Player's Offensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }, {
        name: "defense",
        message: "Player's Defensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }
    ]).then(function(answers) {
      // runs the constructor and places the new player object into the variable player.
      // turns the offense and defense variables into integers as well with parseInt
      var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
      // adds a player to the starters array if there are less than five player objects in it.
      // otherwise adds the newest player object to the subs array
      if (starters.length < 3) {
        starters.push(player);
        team.push(player);
        console.log(player.name + " added to the starters");
      }
      else {
        subs.push(player);
        team.push(player);
        console.log(player.name + " added to the subs");
      }
      // runs the createPlayer function once more
      createPlayer();
    });
  }
  else {
    // loops through the team array and calls printStats() for each object it contains
    for (var i = 0; i < team.length; i++) {
      team[i].printStats();
    }

    gamePlay();
    
  }
};

var roundNum = 1;

//Play the Game
var gamePlay = function() {

  //Show the round
  if (roundNum < 5) {

    console.log("\nROUND " + roundNum + "\n");

    var oScore_opp = Math.floor((Math.random() * 20) + 1);
    var dScore_opp = Math.floor((Math.random() * 20) + 1);
    var oScore_team = 0;
    var dScore_team = 0;
    

    for (i=0; i < starters.length; i++) {
      oScore_team = oScore_team + parseInt(starters[i].offense)
      dScore_team = dScore_team + parseInt(starters[i].defense)

      console.log(oScore_team)
      console.log(dScore_team)
    }

    //If the first number is lower than the sum of the team’s offensive stat, add one point to the team’s score.
    if (oScore_opp < oScore_team) {
        score_Team++;
    }

    //If the second number is higher than the sum of the team’s defensive stat, remove one point from the team’s score.
    if (dScore_opp> dScore_team) {
      if (score_Team > 0) {
        score_Team--;
      }
    }

    inquirer.prompt([
    {
      type: "confirm",
      message: "do you want to sub a player in:",
      name: "confirm",
      default: true
    }
    ]).then(function(inquirerResponse) {
      if (inquirerResponse.confirm === true) {
        inquirer.prompt([
          {
            type: "list",
            name: "subIn",
            message: "Which player do you want to sub in: ",
            choices: subs
          }
        ]).then(function(inquirerResponse) {

          var substitution = inquirerResponse.subIn

          inquirer.prompt([
            {
              type: "list",
              name: "subOut",
              message: "Which player do you want to sub out: ",
              choices: starters
            }
          ]).then(function(inquirerResponse) {
            var subbedOut = inquirerResponse.subOut

            //Change Arrays according to subin and subout
            

          })
        })
      } 

      // runs the createPlayer function once more
      roundNum++;
      gamePlay();
    });
}

  //Would you like to make a substitution

  /*
  Once your code is functioning properly, move on to create a function called “playGame” which will be run after all of the players have been created and will do the following:

Run 5 times. Each time the function runs:

After the game has finished (been run 5 times):
If the score is positive, run goodGame for all of the players currently within the starters array.
If the score is negative, run badGame for all of the players currently within the starters array.
If the score is equal to zero, do nothing with the starters.
Give the user a message about if they won, and the status of their starters.
After printing the results, ask the user if they would like to play again.
Run playGame from the start once more if they do.
End the program if they don’t.
HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.
*/

}

// calls the function createPlayer() to start the code
createPlayer();
