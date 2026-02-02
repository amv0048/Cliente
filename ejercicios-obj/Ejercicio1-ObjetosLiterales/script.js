const tutor = {
    Nombre: 'Jaime',
    Edad: 34,
    Dni: '777555S',
    Titulo: 'Ingeniero de Pacotilla',

    /* mostrar(){
        let res = "";
        for (const clave in this) {
            if (clave !== 'mostrar')
                res += `${clave}: ${this[clave]}<br>`;
        }
        return res+'<br>';
    } */
};


const asignaturas = [
    { nombre: 'cliente', curso: '2ºB', horas_totales: 200
        /* mostrar(){
            let res = "";
            for(let data in this){
                if (data != 'mostrar')
                    res += `${data}: ${this[data]}<br>`;
            }
            return res+"<br>";
        } */
    },
    { nombre: 'servidor', curso: '2ºB', horas_totales: 200
        /* mostrar(){
            let res = "";
            for(let data in this){
                if (data != 'mostrar')
                    res += `${data}: ${this[data]}<br>`;
            }
            return res+"<br>";
        } */
     },
    { nombre: 'lenguajes', curso: '1ºA', horas_totales: 100
        /* mostrar(){
            let res = "";
            for(let data in this){
                if (data != 'mostrar')
                    res += `${data}: ${this[data]}<br>`;
            }
            return res+"<br>";
        } */
     },
    { nombre: 'despliegues', curso: '2ºA', horas_totales: 50
        /* mostrar(){
            let res = "";
            for(let data in this){
                if (data != 'mostrar')
                    res += `${data}: ${this[data]}<br>`;
            }
            return res+"<br>";
        } */
     }
];


const notas = [9, 8, 6, 9, 10];


const alumno = {
    Nombre: 'migue',
    Edad: 80,
    Ciclo: 'DAM',
    Curso: '2ºB',
    Tutor: tutor,
    Asignaturas: asignaturas,
    NotasMedias: notas,

    mostrar(){
        let res = "";
        for (const clave in this) {
            res += clave+': '+this[clave]+'<br>';
        }
        return res;
    }
};

window.onload = () => {
    let personales = document.getElementById('datos-personales');
    for (const propiedad in alumno) {
        if (propiedad !== 'Tutor' && propiedad !== 'Asignaturas' && propiedad !== 'NotasMedias' && propiedad !== 'mostrar' && propiedad !== 'Ciclo'){
            let item = document.createElement('div');
            item.classList = 'item';
            item.innerHTML = propiedad+": "+ alumno[propiedad];

            personales.appendChild(item);
        }
    }

    let academicos = document.getElementById('datos-academicos');
    for (const propiedad in alumno) {
        if (propiedad === 'Ciclo' || propiedad === 'Curso'){
            let item = document.createElement('div');
            item.classList = 'item';
            item.innerHTML = propiedad+": "+ alumno[propiedad];

            academicos.appendChild(item);
        }
    }

    let prof = document.getElementById('datos-tutor');
    for (const propiedad in alumno) {
        if (propiedad === 'Tutor'){
            for (const key in tutor) {
                let item = document.createElement('div');
                item.classList = 'item';
                item.innerHTML = key+": "+tutor[key];
                prof.appendChild(item);
                
            }
            
        }
    }

    let lista = document.getElementById('lista-asignaturas');
    for (const propiedad in alumno) {
        if (propiedad === 'Asignaturas'){
            for (const asignatura of asignaturas) {
                let item = document.createElement('div');
                item.classList = 'item';
                for(let key in asignatura){
                    
                    item.innerHTML += key+": "+asignatura[key]+"<br>";
                }
                lista.appendChild(item);
                
            }   
        }
        else if(propiedad == 'NotasMedias'){

            for (const nota of notas) {
                let item = document.createElement('div');
                item.classList = 'item';
                item.innerHTML = nota
                lista.appendChild(item);
            }
        }
    }
}