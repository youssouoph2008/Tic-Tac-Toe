const TicTacToe = (() => {
    const player = (name, symbol) => ({ name, symbol });
    const player1 = player("Player 1", "X");
    const player2 = player("Player 2", "O");

    let currentPlayer = player1;
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    const resultDisplay = document.getElementById("result");

    function switchPlayer() {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    function makeMove(index) {
        if (gameBoard[index] === "") {
            gameBoard[index] = currentPlayer.symbol;
            document.getElementById(`cell-${index}`).innerText = currentPlayer.symbol;

            if (checkWin()) {
                resultDisplay.innerText = `${currentPlayer.name} wins!`;
                return;
            } else if (checkDraw()) {
                resultDisplay.innerText = "It's a draw!";
                return;
            } else {
                switchPlayer();
            }
        }
    }

    function checkWin() {
        const winConditions = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];
        return winConditions.some(condition =>
            condition.every(index => gameBoard[index] === currentPlayer.symbol)
        );
    }

    function checkDraw() {
        return gameBoard.every(cell => cell !== "");
    }

    function resetGame() {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
        currentPlayer = player1;
        resultDisplay.innerText = "";
    }

    return { makeMove, resetGame };
})();

// --- Event listeners ---
document.querySelectorAll(".cell").forEach((cell, index) => {
    cell.addEventListener("click", () => TicTacToe.makeMove(index));
});
document.getElementById("reset-button").addEventListener("click", () => TicTacToe.resetGame());