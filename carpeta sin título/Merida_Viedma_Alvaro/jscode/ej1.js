window.onload = () => {

    const btnGen = document.querySelectorAll("input")[0];
    const leftDiv =  document.querySelector("#ladoIzq");
    const rightDiv =  document.querySelector("#ladoDer");
    const btnCom = document.querySelectorAll("input")[1];
    const salida = document.querySelector("#salida");
    let inter;


    btnGen.addEventListener('click', () => {
        inter = setInterval(() => {
            leftDiv.textContent = Math.round(Math.random() * 50 + 1);
            rightDiv.textContent = Math.round(Math.random() * 50 + 1);
        }, 1000);
        
        btnGen.disabled = true;
        btnCom.disabled = false;
        salida.textContent = "";
    });


    btnCom.addEventListener('click', () => {
        clearInterval(inter);
        let mayor;
        let left = parseInt(leftDiv.textContent);
        let right = parseInt(rightDiv.textContent);

        left >= right ? mayor = left : mayor = right;
        salida.textContent = mayor;
        btnGen.disabled = false;
    });
}