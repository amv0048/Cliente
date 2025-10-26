const tabla = ((num) => {
    if (num < 2)
        return "Error";
    let matriz = [];
    let contador = 1;

    for (let i = 0; i < num; i++) {
        matriz[i] = [];
        for (let j = 0; j < num; j++) {
            matriz[i][j] = (contador++) * num;
        }
    }

    let filaStr = "";
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            let n = matriz[i][j];
            
            if (n < 10) n = "0" + n;
            filaStr += n + " ";
        }
        console.log(filaStr.trim());
    }

});

console.log(tabla(1));
console.log(tabla(3));