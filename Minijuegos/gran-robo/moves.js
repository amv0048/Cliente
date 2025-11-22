export const moveUp = (tablero) => {
    let walid = walidPos(tablero);
    let walidI = walid[0] -1;
    let walidJ = walid[1];
    if (walidI >= 0 && tablero[walidI][walidJ].textContent != "L" && tablero[walidI][walidJ].textContent != "M"){
        tablero[walidI][walidJ].textContent = "W";
        tablero[walid[0]][walidJ].textContent = "";
    }
}

export const moveDown = (tablero) => {
    let walid = walidPos(tablero);
    let walidI = walid[0] + 1;
    let walidJ = walid[1];
    if (walidI < tablero.length && tablero[walidI][walidJ].textContent != "L" && tablero[walidI][walidJ].textContent != "M"){
        tablero[walidI][walidJ].textContent = "W";
        tablero[walid[0]][walidJ].textContent = "";
    }
}

export const moveLeft = (tablero) => {
    let walid = walidPos(tablero);
    let walidI = walid[0];
    let walidJ = walid[1] - 1;
    if (walidJ >= 0 && tablero[walidI][walidJ].textContent != "L" && tablero[walidI][walidJ].textContent != "M"){
        tablero[walidI][walidJ].textContent = "W";
        tablero[walidI][walid[1]].textContent = "";
    }
}

export const moveRight = (tablero) => {
    let walid = walidPos(tablero);
    let walidI = walid[0];
    let walidJ = walid[1] + 1;
    if (walidJ < tablero.length && tablero[walidI][walidJ].textContent != "L" && tablero[walidI][walidJ].textContent != "M"){
        tablero[walidI][walidJ].textContent = "W";
        tablero[walidI][walid[1]].textContent = "";
    }
}

export const walidPos = (tablero) => {
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j].textContent == "W")
                return [i,j];
        }
    }
    return false;
}