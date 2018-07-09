## Description of Problem
In this assignment, you'll indeed create another Rock Paper Scissors game. The catch? You're going to make this an online multiplayer game, all with the help of Firebase (and the rest of your web development repertoire)!

1. Only two users can play at the same time.
2. Both players pick either rock, paper or scissors. After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other.
3. The game will track each player's wins and losses.
4. Throw some chat functionality in there! No online multiplayer game is complete without having to endure endless taunts and insults from your jerk opponent.

## How it was solved
In this game, I first had to visualize the Firebase setup and understand what objects make up the game. 

Ultimately, I concluded to have the following structure
- Chat
    - CurMessage (important to see if something was submitted and adds to chat string)
    - ChatString (important as it stores the sessions chat)
