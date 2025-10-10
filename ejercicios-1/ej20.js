let matrizUser = [];
for (let i = 0; i < 4; i++) {
    matrizUser[i] = [];
    for (let j = 0; j < 5; j++) {
        matrizUser[i][j] = "*";
    }
    
}

const tablero = (() => {
    const x = 4;
    const y = 5;
    let matriz = [];
    for (let i = 0; i < x; i++) {
        matriz[i] = [];
        for (let j = 0; j < y; j++) {
            matriz[i][j] = '*';
        }
    }
    rellenar(x,y,matriz);
    return matriz;
});

const rellenar = ((x,y,matriz) => {
    let minas = 3;
    let tesoro = false;
    do{
        let rand1 = Math.floor(Math.random() * x);
        let rand2 = Math.floor(Math.random() * y);
        
        if (matriz[rand1][rand2] !== 'B'){
            matriz[rand1][rand2] = 'B';
            minas--;
        }
    } while(minas > 0);
    do{
        let rand1 = Math.floor(Math.random() * x);
        let rand2 = Math.floor(Math.random() * y);

        if (matriz[rand1][rand2] !== 'B'){
            matriz[rand1][rand2] = 'T';
            tesoro = true;
        }
    }while(!tesoro);
});


const jugar = (() => {
    let num1, num2;
    let vivo = true;
    let ganar = false;
    let matriz = tablero();
    do{
        do{
            num1 = parseInt(prompt("Introduce un numero 0-3"));
            num2 = parseInt(prompt("Introduce un numero 0-4"));
    
        }while(num1 < 0 || num2 < 0);
        switch(true){
            case matriz[num1][num2] == 'B':
                matriz[num1][num2] = 'X';
                vivo = false;
                break; 
            case matriz[num1][num2] == 'T':
                matriz[num1][num2] = '€';
                ganar = true;
            default: 
                matrizUser[num1][num2] == '_'; 
        }
    mostrarUser(matrizUser);
    }while(vivo && !ganar)
    if (!vivo) console.log("Has pisado una bomba");
    else console.log("Has ganado, tesoro encontrado");
    finish(matriz, 4, 5);
});

const mostrarUser = ((matrizUser) => {
    let res = "";
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            res += "[" + matrizUser[i][j] + "]";
        }
        res += "\n";
    }
    console.log(res);
});

const finish = ((matriz,x,y) => {
    let res = "";
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            res += "["+ matriz[i][j] + "]";
        }
        res += "\n";
    }
    console.log(res);
})

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById("btn-jugar");
    btn.addEventListener('click', jugar);
});

