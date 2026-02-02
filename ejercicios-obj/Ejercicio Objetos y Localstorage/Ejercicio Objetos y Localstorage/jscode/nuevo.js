window.onload = () => {
    const btnSubmit = document.querySelector('input[type=button]');
    btnSubmit.addEventListener('click', (e) => {
        const formu = document.forms[0];
        let titulo = formu.titulo.value;
        let isbn = formu.isbn.value;
        let pag = formu.numpaginas.value;
        let genero = formu.genero.value;
        let año = formu.anio.value;
        let portada = formu.cover.value;
        let autor = formu.autor.value;
        let sinopsis = formu.resumen.value;
        
        
    });

}