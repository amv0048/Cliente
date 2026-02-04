window.onload = () => {
    apiInfo();
}

function apiInfo(){
    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const img = document.createElement('img');
    
    let info = JSON.parse(localStorage.getItem('player'));
    
    h1.textContent = info.title;
    img.src = info.image;
    p.textContent = info.description;

    const id = info.id;
    console.log(id);

    container.appendChild(h1);
    container.appendChild(img);
    container.appendChild(p);
    document.body.appendChild(container);

    fetch('https://dragonball-api.com/api/characters/'+id)
    .then(response => response.json())
    .then(data => {
        for (const info in data) {
            let arr = data[info];
            if (info == 'originPlanet'){
                const container = document.createElement('div');
                const h2 = document.createElement('h2');
                const p = document.createElement('p');
                const img = document.createElement('img');
                img.classList = 'planets';
                h2.textContent = arr.name;
                p.textContent = arr.description;
                img.src = arr.image;
                container.appendChild(h2);
                container.appendChild(img);
                container.appendChild(p);
                document.body.appendChild(container)
            }
            else if (info == 'transformations'){
                console.log(arr);
                const container = document.createElement('div');
                container.classList = 'payaso';
                for (const key in arr) {
                    const div = document.createElement('div');
                    const h2 = document.createElement('h2');
                    const img = document.createElement('img');
                    h2.textContent = arr[key].name;
                    img.src = arr[key].image;
                    div.appendChild(h2)
                    div.appendChild(img)
                    container.appendChild(div)
                    
                }
                document.body.appendChild(container)
            }
            
        }        
        let a = document.createElement('a');
        a.href = 'index.html';
        a.textContent = 'Volver a los personajes';

        document.querySelectorAll('div')[1].appendChild(a);
    });
}