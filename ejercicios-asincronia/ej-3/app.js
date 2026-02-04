window.onload = () => {
    document.querySelector('input').addEventListener('click', (e) => {
        e.preventDefault();
        e.target.disabled = 'true';
        const img = document.createElement('img');
        document.querySelectorAll('section')[1].appendChild(img);
        
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            for (const info in data) {
                const container = document.createElement('div');
                const p1 = document.createElement('p');
                const p2 = document.createElement('p');

                p1.textContent = "Titulo: "+ data[info].title;
                p2.textContent += "Precio: "+ data[info].price;

                container.appendChild(p1);
                container.appendChild(p2);
                document.querySelector('section').appendChild(container)

                container.addEventListener('mouseenter', (e) => {
                    img.src = data[info].image;
                });
            }
        })
    });
}