window.onload = () => {
    let libro = sessionStorage.getItem('libro');
    const tableInfo = document.createElement('table');
    let librocheto = JSON.parse(libro);

    for(data in librocheto){
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const tdInfo = document.createElement('td');
        
        td.textContent = data;
        tdInfo.textContent = librocheto[data];
        tr.appendChild(td);
        tr.appendChild(tdInfo);
        tableInfo.appendChild(tr);   
    }


    document.querySelector('section').appendChild(tableInfo);
    
}