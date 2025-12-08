window.onload = () => {
    const btn = document.querySelector("input");
    btn.addEventListener('click', () => {
        let filas = 0;
        let cols = 0;
        const container = document.querySelector("div");
        do {
            filas = parseInt(prompt("Ingrese un numero de filas"));
            cols = parseInt(prompt("ingrese un numero de columnas"));
                
            
        } while (filas > 10 || cols > 10 || isNaN(filas) || isNaN(cols));


        const tabla = document.createElement("table");
        tabla.classList = "tabla";
        for (let i = 0; i < filas; i++) {
            let tr = document.createElement("tr");
            tabla.appendChild(tr);
            for (let j = 0; j < cols; j++) {
                let cell = document.createElement("td");
                cell.textContent = i;
                tr.appendChild(cell);
            }
        }
        container.appendChild(tabla);
    });
}