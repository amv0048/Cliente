window.onload = () => {
    crearTitulo();
    mostrarBiblioteca();

}

const crearTitulo = () => {
    let tam = library.length;
    document.querySelector('h1').textContent = `Hay ${tam} libros en la biblioteca`;

}

const mostrarBiblioteca = () => {
    for (const libro of library) {
        let art = document.createElement('article');
        art.classList = 'presentacion';
        let h3 = document.createElement('h3');
        h3.textContent = libro.title;
        let img = document.createElement('img');
        img.src = libro.cover;

        art.appendChild(h3)
        art.appendChild(img)
        document.querySelector('section').appendChild(art);

        img.addEventListener('click', () => {
            sessionStorage.setItem("libro",JSON.stringify(libro));
            location.href = 'mostrar.html';
        });
    }

}