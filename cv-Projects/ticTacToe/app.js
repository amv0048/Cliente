let container;
let turnCounter = 0;
let gameBoard = [];

document.addEventListener("DOMContentLoaded", function () {
    let player1;
    let player2;

    const form = document.createElement("div");
    form.classList.add("book-form");

    form.innerHTML = `
        <h3>Welcome to the Game</h3>
        <label>Player 1 name: <input type="text" id="name1" required></label><br>
        <label>Player 2 name: <input type="text" id="name2" required></label><br>
        <button type="submit" id="submit-book">Start Game</button>
    `;
    document.body.appendChild(form);

    document.querySelector("#submit-book").addEventListener("click", function () {
        const name1 = document.querySelector("#name1").value.trim();
        const name2 = document.querySelector("#name2").value.trim();

        if (!name1 || !name2) return;

        player1 = new Player(name1);
        player1.symbol = "X";
        player2 = new Player(name2);
        player2.symbol = "O";

        form.remove();

        container = document.createElement("div");
        container.classList.add("container");
        document.body.appendChild(container);

        for (let i = 0; i < 9; i++) {
            gameBoard[i] = document.createElement("button");
            container.appendChild(gameBoard[i]);

            gameBoard[i].addEventListener("click", function () {
                // Evita sobreescritura
                if (gameBoard[i].innerHTML !== "") return;

                const currentPlayer = turn() ? player1 : player2;
                gameBoard[i].innerHTML = currentPlayer.symbol;

                const gameEnded = endGame(gameBoard, currentPlayer.symbol, currentPlayer);

                if (!gameEnded && turnCounter >= 9) {
                    const draw = document.createElement("h1");
                    draw.innerHTML = "It's a draw!";
                    document.body.appendChild(draw);
                }
            });
        }
    });
});

const turn = () => {
    const isPlayer1 = turnCounter % 2 === 0;
    turnCounter++;
    return isPlayer1;
};

function endGame(b, symbol, object) {
    const winner = document.createElement("h1");
    winner.innerHTML = `The winner is ${object.name}`;

    if (
        (b[0].innerHTML === symbol && b[1].innerHTML === symbol && b[2].innerHTML === symbol) ||
        (b[3].innerHTML === symbol && b[4].innerHTML === symbol && b[5].innerHTML === symbol) ||
        (b[6].innerHTML === symbol && b[7].innerHTML === symbol && b[8].innerHTML === symbol) ||
        (b[0].innerHTML === symbol && b[3].innerHTML === symbol && b[6].innerHTML === symbol) ||
        (b[1].innerHTML === symbol && b[4].innerHTML === symbol && b[7].innerHTML === symbol) ||
        (b[2].innerHTML === symbol && b[5].innerHTML === symbol && b[8].innerHTML === symbol) ||
        (b[0].innerHTML === symbol && b[4].innerHTML === symbol && b[8].innerHTML === symbol) ||
        (b[2].innerHTML === symbol && b[4].innerHTML === symbol && b[6].innerHTML === symbol)
    ) {
        document.body.appendChild(winner);
        container.innerHTML = "";
        return true;
    }
    return false;
}

function Player(name) {
    this.name = name;
    this.symbol = "";
}
