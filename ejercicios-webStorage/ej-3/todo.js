import { initTodos } from "./localtodos.js";

window.onload = () => {
    if (localStorage.length > 0){
       for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            const todos = JSON.parse(value);
            
            for (const todo of todos) {
                addTodo(todo.name, todo.description, todo.complete)
            }
        }
    }

    //Borrar todos las Tareas
    document.querySelector('input[name=dlt]').addEventListener('click',(e) => {
        e.preventDefault();
        let seguro = confirm('¿Estas seguro de que quieres borrarlos todos?')
        if (seguro){
            localStorage.clear();
            location.reload();
        }
    });

    document.querySelector('input[value=Recargar]').addEventListener('click', (e) => {
        e.preventDefault();
        initTodos();
        location.reload();
    });

    document.querySelector('input[name=newTodo]').addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.forms[0];
        addTodo(form.title.value, form.description.value, false);

        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.push({
            name: form.title.value,
            description: form.description.value,
            complete: false
        })
        localStorage.setItem("todos", JSON.stringify(todos));
        
    });
     
}

function addTodo(name, description, complete){
    const newTodo = document.createElement('div');
    newTodo.classList = 'todo';

    const title = document.createElement('h3');
    title.textContent = name;

    const text = document.createElement('p');
    text.textContent = description;

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.checked = complete;

    newTodo.appendChild(title);
    newTodo.appendChild(text);
    newTodo.appendChild(check);
    document.querySelector('.todos').appendChild(newTodo);
}