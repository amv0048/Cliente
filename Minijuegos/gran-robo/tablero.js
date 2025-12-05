 export const crearTablero = (container) => {
    const tablero = [];
    for (let i = 0; i < 8; i++) {
        tablero[i] = [];
        for (let j = 0; j < 8; j++) {
            const celda = document.createElement("div");
            celda.classList.add("cell");
            tablero[i][j] = celda;
            container.appendChild(celda);
        }
    }
    return tablero;
}

export const iniTablero = (tablero) => {
    const items = ["M", "L", "Y"];
    tablero[0][0].textContent = "W";
    for (const p of items) {
        let set = false;
        do {
            const row = rand(0,8)[0];
            const col = rand(0,8)[1];
            if (tablero[row][col].textContent === ''){
                tablero[row][col].textContent = p;
                set = true;
            }
        } while (!set);
    }
}

export const rand = (min,max) => {
    return [Math.floor(Math.random() * max + min),
        Math.floor(Math.random() * max + min)];
}