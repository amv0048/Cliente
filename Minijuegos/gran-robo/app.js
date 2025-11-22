import { crearTablero, iniTablero } from "./tablero.js";
import { moveUp, moveDown, moveLeft, moveRight, walidPos } from "./moves.js";
import { mariaSeMueveRico, mariaPos, lauraMove, lauraPos, gameOver } from "./delegadas.js";

const game = () => {
    setControls();
    const container = document.getElementById('container');
    let tablero = crearTablero(container);
    iniTablero(tablero);

    const up = document.getElementById('up');
    up.addEventListener('click', () => {
        gameOver(tablero);
        moveUp(tablero);
        mariaSeMueveRico(tablero);
        lauraMove(tablero);
    });
    const down = document.getElementById('down');
    down.addEventListener('click', () => {
        gameOver(tablero);
        moveDown(tablero);
        mariaSeMueveRico(tablero);
        lauraMove(tablero);
    });
    const left = document.getElementById('left');
    left.addEventListener('click', () => {
        gameOver(tablero);
        moveLeft(tablero);
        mariaSeMueveRico(tablero);
        lauraMove(tablero);
    });
    const right = document.getElementById('right');
    right.addEventListener('click', () => {
        gameOver(tablero);
        moveRight(tablero);
        mariaSeMueveRico(tablero);
        lauraMove(tablero);
    });
}

const setControls = () => {
    const up = document.createElement("button");
    up.id = "up";
    const down = document.createElement("button");
    down.id = "down";
    const left = document.createElement("button");
    left.id = "left";
    const right = document.createElement("button");
    right.id = "right";
    const BtnContainer = document.getElementById('btn-container');
    BtnContainer.appendChild(up);
    BtnContainer.appendChild(down);
    BtnContainer.appendChild(left);
    BtnContainer.appendChild(right);
}

window.onload = () => {
    let init = document.getElementById('init');
    init.addEventListener('click', () => {
        game();
        init.disabled = true;
    });
}