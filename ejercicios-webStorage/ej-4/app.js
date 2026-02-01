window.onload = () => {
    document.querySelector('input[type=submit]').addEventListener('click', (e) => {
        e.preventDefault();

        const form = document.forms[0];
        let name = form.name.value;
        let ape = form.ape.value;
        let edad = form.edad.value;
        let email = form.email.value;

        const cards = JSON.parse(localStorage.getItem('cards')) || [];
        
        cards.push({
            Nombre: name,
            Apellidos: ape,
            Edad: edad,
            Email: email
        });
        console.log(cards);
        
        localStorage.setItem("cards",JSON.stringify(cards));
        console.log(localStorage);
        
    });

    document.querySelector('input[value=Borrar]').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.clear();
    });

    document.querySelector('input[value=Recargar]').addEventListener('click', (e) => {
        e.preventDefault();
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            const cards = JSON.parse(value);
            console.log(cards);
            
            for (const card of cards) {
                crearSection(card.Nombre, card.Apellidos, card.Edad, card.Email);
            }
        }
    })

}
function crearSection(name, ape, edad, email){
    const sec = document.createElement('section');
    let nombre = document.createElement('h6');
    nombre.textContent = name;
    sec.appendChild(nombre);
    let apellidos = document.createElement('h6');
    apellidos.textContent = ape;
    sec.appendChild(apellidos);
    let edades = document.createElement('h6');
    edades.textContent = edad;
    sec.appendChild(edades);
    let imail = document.createElement('h6');
    imail.textContent = email;
    sec.appendChild(imail);
    document.body.appendChild(sec);
}