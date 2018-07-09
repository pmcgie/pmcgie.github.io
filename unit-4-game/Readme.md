##Description of Problem
Create an interactive game for web browsers. This time, app must dynamically update HTML pages with the jQuery library

##How to Play
1. The player will have to guess the answer. The player will guess with numbers. 
2. There will be four crystals displayed as buttons on the page.
3. The player will be shown a random number at the start of the game.
4. When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
5. Your game will hide this amount until the player clicks a crystal.
6. When they do click one, update the player's score counter.
7. The player wins if their total score matches the random number from the beginning of the game. The player loses if their score goes above the random number.
8. The game restarts whenever the player wins or loses.

##Other Game Notes
- When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

 - The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

##How it was solved
In order for this game to work, you need to id different parts of the html for DOM interaction. Once that is set, I used functions such as math.random to generate random numbers into the "four" crystals as well as update the target number. As the user clicks on the gems, the variable "userTotal" cumulates the total for that session. Once, the user reaches that score or goes over, I used conditional statements to record total sessions wins and losses, and then have logic to generate another random number and restart the game.


##Technical Approach
When I approach a project, I draw the layout by hand. From there, I create the grid and in this case, made sure to tag various id's in specific locations for DOM interaction. After that I created the JavaScript logic. 
