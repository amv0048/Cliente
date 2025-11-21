export const moveUp = (tablero) => {
    let moved = false;
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j].textContent === "W" && i-1 >= 0 && tablero[i-1][j].textContent != "L" && tablero[i-1][j].textContent != "M"){
                tablero[i-1][j].textContent = "W";
                tablero[i][j].textContent = "";
                moved = true;
                break;
            }
        }
        if (moved) break;    
    }
}

export const moveDown = (tablero) => {
    let moved = false;
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j].textContent === "W" && i+1 < tablero.length && tablero[i+1][j].textContent != "L" && tablero[i+1][j].textContent != "M"){
                tablero[i+1][j].textContent = "W";
                tablero[i][j].textContent = "";
                moved = true;
                break;
            }
        }
        if (moved) break;
    }
}

export const moveLeft = (tablero) => {
    let moved = false;
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j].textContent === "W" && j-1 >= 0 && tablero[i][j-1].textContent != "L" && tablero[i][j-1].textContent != "M"){
                tablero[i][j-1].textContent = "W";
                tablero[i][j].textContent = "";
                moved = true;
                break;
            }
        }
        if (moved) break;    
    }
}

export const moveRight = (tablero) => {
    let moved = false;
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j].textContent === "W" && j+1 < tablero.length && tablero[i][j+1].textContent != "L" && tablero[i][j+1].textContent != "M"){
                tablero[i][j+1].textContent = "W";
                tablero[i][j].textContent = "";
                moved = true;
                break;
            }
        }
        if (moved) break;    
    }
}