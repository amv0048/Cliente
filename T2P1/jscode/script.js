window.onload = () => {
    //Funcionalidad 1

    const formu = document.forms[0];
    const email = formu.email;
    const copiaEmail = formu.remail;
    
    email.addEventListener('keydown', () => {
        copiaEmail.value = email.value;
    })
    

    const afiText = document.querySelector("#afiText");
    const af1 = formu.af1;
    const af2 = formu.af2;
    const af3 = formu.af3;
    
    let lista = [af1, af2, af3];

    lista.forEach(el => {
        el.addEventListener('change', () => {
            afiText.textContent = checked(lista);
        });
    });

    const checked = (lista) => {
        let res = '';
        for (const el of lista) {
            if (el.checked)
                res += el.value+"\n";
        }
        return res;
    }


    //Funcionalidad 2
    const submit = document.querySelector('input[type=submit]');
    
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        validar();
        
    })
    
    const validar = () => {
        //Validacion nombre
        const nombre = formu.nombre;
        if (nombre.value == ''){
            mostrarError(nombre, 'El campo no puede estar vacio');
            return;
        }
        else{
            borrarError(nombre, nombre.name);
        }
        
        //Validacion clave
        const clave = formu.clave;
        
        const replicaClave = document.querySelectorAll('input[type=password]')[1];

        if (clave.value == ''){
            mostrarError(clave, 'La clave no puede estar vacia');
            return;
        }
        else if (clave.value.length < 8){
            mostrarError(clave, "Longitud minima de 8 caracteres");
            return;
        }
        else if (clave.value == nombre.value){
            mostrarError(clave, "La clave y el nombre deben ser diferentes");
            return;
        }
        else if (clave.value != replicaClave.value){
            clave.value = '';
            replicaClave.value = '';
            mostrarError(clave, "La claves no coinciden");
            return;
        }
        else{
            borrarError(clave, clave.name)
        }


        //Validar pregunta
        const listaSlc = formu.elements[3];
        if (listaSlc.selectedIndex == 0){
            mostrarError(listaSlc, 'Debe haber alguna pregunta seleccionada');
            return;
        }
        else{
            borrarError(listaSlc, listaSlc.name)
        }

        //Validar Respuesta
        const resp = formu.respuesta;
        if (resp.value == ''){
            mostrarError(resp, 'El campo no debe estar vacio');
            return;
        }
        else if (resp.value.length < 6){
            mostrarError(resp, 'La respuesta debe contener al menos 6 caracteres');
            return;
        }
        else{
            borrarError(resp, resp.name)
        }
        
        
        //Validar radio
        const radios = formu.sexo;
        let flag = false;

        for (const r of radios) {
            if (r.checked) flag = true;
        }
        if (!flag){
            mostrarError(radios[0], 'Debe haber alguna respuesta seleccionada');
            return;
        }
        else{
            borrarError(radios[0], radios[0].name);
        }

          
        //Validar edad
        const edad = formu.edad;
        if (edad.value == ''){
            mostrarError(edad, 'El campo no puede estar vacio');
        }
        else if (parseInt(edad.value) < 3 || parseInt(edad.value) > 99) {
            mostrarError(edad, 'La edad debe ser mayor de 3 y menos de 99');
            return;
        }
        else{
            borrarError(edad, edad.name);
        }


        //Validar palabra de seguridad
        const word = formu.elements[15];
        
        if (word.value == ''){
            mostrarError(word, 'El campo no puede estar vacio');
            return;
        }
        else if (word.value.toUpperCase() != "QGPHJD"){
            mostrarError(word, 'El catpcha no coincide');
            word.value = '';
            return;
        }
        else{
            borrarError(word, word.name);
        }
        
        //Validar condiciones de uso
        const cond = formu.elements[17];
        if (!cond.checked){
            mostrarError(cond, 'Se deben aceptar las condiciones para enviar');
            return;
        }
        else{
            borrarError(cond, cond.name);
        }

        
        //Si todo ha ido genial, mando el formulario
        //Si no ha ido todo bien no llega hasta aqui por los return
        formu.submit()
        
    }

    function mostrarError(input, text){
        let error = input.previousElementSibling;
        if (!error || !error.classList.contains(`error-${input.name}`)){
            error = document.createElement('p');
            error.style.fontSize = '12px';
            error.className = `error-${input.name}`;
            error.style.color = 'red';
            error.id = 'error';
            input.parentNode.insertBefore(error, input);
        }
        error.textContent = text;
        input.style.border = '2px solid red';
        input.focus();
    }

    function borrarError(input, nombre){
        const errors = document.querySelectorAll(`.error-${nombre}`)
        .forEach(el => { 
            
            input.style.border = '1px solid black';
            el.remove();
        });
        

        
    }

    
}