window.onload = () => {
    


    document.querySelector('input[type=button]').addEventListener('click', (e) => {
        e.preventDefault();
        fetch('https://dog.ceo/dog-api/breeds/image/random')
        .then(response => {
            if (!response.ok) throw new Error('Error al obtener la imagen');
            return response.json();
        })
        .then(data => {
            console.log(data);
            
        })
    })
}