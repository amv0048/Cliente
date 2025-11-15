const palabras = [
    "computadora","javascript","programacion",
    "teclado","pantalla","internet",
    "servidor","variable","funcion",
    "objeto","clase","modulo",
    "sintaxis","algoritmo","frontend",
    "backend","desarrollador","compilador",
    "debug","terminal","framework",
    "libreria","navegador","router",
    "consulta","matriz","cadena",
    "proceso","memoria","archivo"
];

let random = Math.floor(Math.random() * palabras.length);
const WORD = palabras[random];
let wordDisplay = [];
for (let i = 0; i < WORD.length; i++) {
    wordDisplay.push("_");
}


window.onload = () => {
    let cont = 1;
    let wordInput = document.getElementById("word");
    const play = document.getElementById("submitBtn");
    let letter = document.getElementById("letter");
    let used = document.getElementById("usedWords");
    let img = document.getElementById("img-game");
    wordInput.value = wordDisplay.join(" ");
    
    play.addEventListener('click', () => {

        let fallo = true;
        
        for (let i = 0; i < WORD.length; i++) {
            if (WORD[i] === letter.value) {
                wordDisplay[i] = letter.value;
                fallo = false;
            }
        }
        if (fallo){
            used.value += letter.value+"- ";
            cont++;
            img.src = `img/ahor${cont}.png`;
        }
        wordInput.value = wordDisplay.join(" ");
        letter.value = "";

        let word = wordDisplay.join("");
        if (WORD === word){
            alert("HAS GANADO");
            wordInput.value = "";
            img.src = `img/ahor1.png`;
            used.value = "";
        }
        else if (cont == 8){
            alert("Has perdido");
        }
    });    
};