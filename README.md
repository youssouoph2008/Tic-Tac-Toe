# Tic Tac Toe Game

A simple Tic Tac Toe game you can play in your browser! Built using HTML, CSS, and JavaScript, this project demonstrates modular JavaScript, closures, factory functions, and the module pattern.


## Features
Two-player game: Player 1 (X) vs Player 2 (O)
Clickable 3x3 grid to place marks
Automatically checks for:
Wins (3 in a row horizontally, vertically, or diagonally)
Draws
Switches turns between players
Reset button to start a new game
Clean and responsive interface
## Installation
Clone the repository:
git clone https://github.com/youssouoph2008/tic-tac-toe.git
Open index.html or game.html in your browser.
## How to Play
Open the game in your browser.
Click on any empty square to place your mark (X or O).
The game will automatically detect a win or draw and display the result.
Click Reset Game to play again.
## Project Structure
tic-tac-toe/
├── index.html        # Home page
├── game.html         # Game page
├── rules.html        # Game rules page
├── contact.html      # Contact page
├── styles.css        # CSS for the game and site
├── script.js         # JavaScript logic for the game
└── README.md         # Project documentation
## JavaScript Concepts Used
Module Pattern (IIFE) – encapsulates game logic
Factory Functions – creates player objects
Closures – manages private variables like the current player and game board
Event Listeners – handles user clicks on grid cells
DOM Manipulation – updates the game board and displays results
## Future Improvements
Allow players to enter their names
Highlight winning cells
Add AI opponent
Add animations for moves
Make it mobile-friendly
