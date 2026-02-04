window.onload = () => {
    localStorage.clear();
    fetch('https://dragonball-api.com/api/characters')
    .then(response => response.json())
    .then(data => {
        for (const info in data) {
            if (info == 'items'){
                let arr = data[info];
                for (const key in arr) {
                    let container = document.createElement('article');
    
                    let h2 = document.createElement('h2');
                    h2.textContent = arr[key].name;
    
                    let img = document.createElement('img');
                    img.src = arr[key].image;
    
                    let p = document.createElement('p');
                    p.textContent = arr[key].maxKi;
    
                    container.appendChild(h2);
                    container.appendChild(img);
                    container.appendChild(p);
                    document.querySelector('section').appendChild(container);

                    container.addEventListener('click', () => {
                        let player = {
                            id: arr[key].id,
                            title: arr[key].name,
                            image: arr[key].image,
                            description : arr[key].description
                        }
                        
                        
                        localStorage.setItem("player",JSON.stringify(player));
                        
                        location.href= 'player.html';
                    })
                }
            }
        }
    });
}