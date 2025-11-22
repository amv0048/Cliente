import { walidPos } from "./moves.js";
import { rand } from "./tablero.js";

export const mariaSeMueveRico = (tablero) => {
    const walid = walidPos(tablero);
    const maria = mariaPos(tablero);

    const manhattan = [walid[0] - maria[0], walid[1] - maria[1]];
    let nextMove = [0,0];

    if (manhattan[0] > 0) nextMove[0] = 1;
    else if (manhattan[0] < 0) nextMove[0] = -1;
    else{
        //EJE J
        if (manhattan[1] > 0) nextMove[1] = 1;
        else if (manhattan[1] < 0) nextMove[1] = -1;
    }
    
    const mariaMoved = [maria[0] + nextMove[0], maria[1] + nextMove[1]];

    if (tablero[mariaMoved[0]][mariaMoved[1]].textContent !== "L"){
        tablero[maria[0]][maria[1]].textContent = "";
        tablero[mariaMoved[0]][mariaMoved[1]].textContent = "M";
    }
}

export const lauraMove = (tablero) => {
    let laura = lauraPos(tablero);
    let lauraNewPos = [];
    let intentos = 0;
    do{
        let random = rand(0,50)[0];
        if (random <= 12) lauraNewPos = [laura[0]-1, laura[1]]; // arriba
        else if (random <= 25) lauraNewPos = [laura[0]+1, laura[1]]; // abajo
        else if (random <= 37) lauraNewPos = [laura[0], laura[1]-1]; // izquierda
        else lauraNewPos = [laura[0], laura[1]+1]; // derecha
        intentos++;

    }while(lauraNewPos[0] < 0 ||
        lauraNewPos[0] >= tablero.length ||
        lauraNewPos[1] < 0 ||
        lauraNewPos[1] >= tablero[0].length ||
        (tablero[lauraNewPos[0]][lauraNewPos[1]].textContent === "M" && intentos < 100));
    
    tablero[lauraNewPos[0]][lauraNewPos[1]].textContent = "L";
    tablero[laura[0]][laura[1]].textContent = "";

}

export const mariaPos = (tablero) => {
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j].textContent == "M")
                return [i,j];
        }
    }
}

export const lauraPos = (tablero) => {
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j].textContent == "L")
                return [i,j];
        }
    }
}

export const gameOver = (tablero) => {
    let walid = walidPos(tablero);
    if (!walid){
        let btn = document.getElementById('init');
        let cells = document.querySelectorAll('.cell');
        alert("Te han pillado amego, no mas segarro para ti, deportando a Morocco...");
        for (const cell of cells) {
            cell.parentNode.removeChild(cell);
        }
        const BtnContainer = document.getElementById('btn-container');
        let btns = Array.from(BtnContainer.children);
        for (const btn of btns) {
            BtnContainer.removeChild(btn);
        }
        btn.disabled = false;
    }
}
