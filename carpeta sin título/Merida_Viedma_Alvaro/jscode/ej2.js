window.onload = () => {
    const btnPush = document.querySelectorAll("input")[0];
    const btnClear = document.querySelectorAll("input")[1];
    const container = document.querySelector("#contenedor");

    btnPush.addEventListener('click', () => {
        btnClear.disabled = false;
        let ruta = "../img/";
        let foto = prompt("Inserta el nombre de la foto añadir");
        let newFoto = document.createElement("img");

        if (foto != "")
            newFoto.src = ruta + foto + ".jpg";
        else
            newFoto.src = ruta + "terra.jpg";

        container.appendChild(newFoto);
    });

    btnClear.addEventListener('click', () => {
        let childs = container.querySelectorAll("img");
        childs.forEach(el => {
            el.parentNode.removeChild(el);
        });
    });
    
}