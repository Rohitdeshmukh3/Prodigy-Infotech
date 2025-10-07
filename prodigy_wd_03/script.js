const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let running = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Add click listeners
cells.forEach(cell => cell.addEventListener("click", cellClicked));
resetBtn.addEventListener("click", restartGame);

function cellClicked() {
  const index = this.getAttribute("data-index");

  if (board[index] !== "" || !running) return;

  board[index] = currentPlayer;
  this.textContent = currentPlayer;
  this.classList.add(currentPlayer.toLowerCase());

  checkWinner();
}

function checkWinner() {
  let winner = false;

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = true;
      break;
    }
  }

  if (winner) {
    statusText.textContent = `Player ${currentPlayer} Wins! 🎉`;
    running = false;
  } else if (!board.includes("")) {
    statusText.textContent = "It's a Draw! 🤝";
    running = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
  }
}

function restartGame() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  running = true;
  statusText.textContent = `Player ${currentPlayer}'s Turn`;

  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("x", "o");
  });
}
