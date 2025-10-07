Tic Tac Toe Game 🎮
A simple and classic Tic Tac Toe game built using HTML, CSS, and JavaScript. This project is a great example of a basic interactive web application that demonstrates DOM manipulation and fundamental game logic.

✨ Features
Classic Gameplay: Play a standard 3x3 game of Tic Tac Toe.

Player Turns: The game alternates between "X" and "O" players.

Win/Draw Detection: The game automatically detects and announces a winner or a draw.

Reset Functionality: A "Restart Game" button allows you to play a new round at any time.

Responsive Design: The game board and interface are designed to look good on various screen sizes.

Clean UI: A sleek, dark-themed design with smooth transitions and color-coded players.

🛠️ Technologies Used
HTML: For the game's structure and layout.

CSS: For styling the game board, cells, and overall look and feel.

JavaScript: For handling the game's core logic, including player moves, win conditions, and UI updates.

🚀 How to Play
Clone the Repository:

Bash

git clone https://github.com/Rohitdeshmukh3/Prodigy-Infotech.git
Open the Game: Open the index.html file in your web browser.

Start Playing: Click on any cell to place your mark ("X" or "O").

Restart: Click the "Restart Game" button to clear the board and start a new game.

📁 Project Structure
├── index.html       // The main structure of the game
├── style.css        // The styles for the game board and elements
└── script.js        // The JavaScript logic for gameplay
💡 How it Works
The game's logic is powered by a few key JavaScript functions:

cellClicked(): This function is called every time a player clicks on a cell. It updates the game board array and the cell's content.

checkWinner(): After each move, this function iterates through a predefined list of winPatterns to check if the current player has won. It also checks for a draw if no empty cells are left.

restartGame(): This function resets the board to its initial state, clearing the cells and variables to start a new game.

![image alt](https://github.com/Rohitdeshmukh3/Prodigy-Infotech/blob/4d8c788e70471df67d8066de525c7a0ff34177cc/prodigy_wd_03/image.png)
