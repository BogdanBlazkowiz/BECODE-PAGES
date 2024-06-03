var player = "x";
var board = ["", "", "", "", "", "", "", "", ""]

function checkWinner() {
    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (i = 0; i< winCombinations.length; i++) {
        if (board[winCombinations[i][0]] == board[winCombinations[i][1]] && board[winCombinations[i][0]] == board[winCombinations[i][2]] && ["x", "o"].includes(board[winCombinations[i][0]])) {
            return(board[winCombinations[i][0]]);
        }
    }
    return false;
}

function playMove(event) {
    cell = event.currentTarget;
    cell.innerText = player;
    board[cell.classList.toString()[7]] = player;
    if (checkWinner()) {
        cell.parentElement.nextSibling.nextSibling.innerText = `The Winner is ${player}!`;
        cells = cell.parentElement.querySelectorAll("div");
        for (i = 0; i < cells.length; i++) {
            cells[i].removeEventListener("click", playMove);
        }
    }
    if (player == "x") {
        player = "o"
    }
    else {
        player = "x";
    }
    cell.removeEventListener("click", playMove)
}

function restart(event) {
    button = event.currentTarget;
    divBoard = button.parentElement.querySelector("div");
    cells = divBoard.querySelectorAll("div");
    for (i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
        cells[i].addEventListener("click", playMove);
        board = ["", "", "", "", "", "", "", "", ""];
        button.previousSibling.previousSibling.innerText = `Message here`;
    }
}

board = document.querySelector("div");
for (i = 0; i < 9; i++) {
    newCell = document.createElement("div");
    newCell.classList += "cell";
    newCell.classList += ` nr${i}`;
    newCell.innerText = "";
    newCell.addEventListener("click", playMove);
    board.appendChild(newCell);
}
document.querySelector("button").addEventListener("click", restart)
