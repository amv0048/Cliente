let carrito = {};

window.onload = () => {
    const btnAdd = document.querySelector('#btnAñadir');

    btnAdd.addEventListener('click', (e) => {
        e.preventDefault();
        const producto = document.querySelector('#productos').value || "";
        if (producto.length !== ''){
            carrito[producto] = producto;
            localStorage.setItem(producto, JSON.stringify(producto));
            const listaCompra = document.querySelector('#lista-carrito');
            
            let info = document.createElement('p');
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                let data = localStorage.getItem(key);
                info.textContent += data+",";
                
            }
            console.log(localStorage);
            info.id = 'lista';
            listaCompra.appendChild(info)
        }  
    });

    document.querySelector('#btnPagar').addEventListener('click', (e) => {
        e.preventDefault();
        if (document.querySelector('#lista') && document.querySelector('#lista').textContent.length != 0){
            location.href = "./pasarela.html";
        }
        else alert('No hay nada en el carrito');
    })
}