window.onload = () => {
   fetch('https://jsonplaceholder.typicode.com/comments')
   .then(response => response.json())
   .then(data => {
        data.forEach(obj => {
            let div = document.createElement('div');
            div.textContent = (obj.body);
            document.querySelector('#salida').appendChild(div);   
        });
   })
   .catch(error => console.log(error));
}