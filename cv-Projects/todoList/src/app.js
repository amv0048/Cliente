import Project from "./project.js";
import toDo from "./todo.js";

const userProjects = []
let currentProject = null;

function initDefaultProject() {
    const toExample1 = new toDo("lessons", "my own lessons", "4/9/2026", "high");
    const toExample2 = new toDo("Exams", "Calendary", "4/9/2026", "medium");

    const base = new Project("init");
    base.addTodo(toExample1);
    base.addTodo(toExample2);
    
    const todoList = document.createElement('div');
    todoList.classList.add('todoList');
    base.getTodos().forEach(element => {
        const todo = document.createElement('div');
        todo.classList.add('card');
        todo.innerHTML = element.toString();
        todoList.appendChild(todo);
    });
    userProjects.push(base);
    currentProject = base;
}

function setupEventListeners(){
    const newTodo = document.querySelector('.newTodo');
    const newProject = document.querySelector('.newProject');

    newTodo.addEventListener('click', () => {
        const todoForm = document.createElement('form');
        todoForm.innerHTML = `
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required />
            <br/>

            <label for="description">Description:</label>
            <textarea id="description" name="description"></textarea>
            <br/>

            <label for="dueDate">Due Date:</label>
            <input type="date" id="dueDate" name="dueDate" />
            <br/>

            <label for="priority">Priority:</label>
            <select id="priority" name="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            </select>
            <br/>

            <button id="submitTodo" type="submit">Submit</button>`;

        document.body.appendChild(todoForm);
        todoForm.addEventListener("submit", (e) => {
            e.preventDefault()
            const title = document.querySelector("#title").value.trim();
            const text = document.querySelector("#description").value.trim();
            const pages = document.querySelector("#dueDate").value;
            const priority = document.querySelector("#priority").value;

            const newTodo = new toDo(title, text, pages, priority);
            currentProject.addTodo(newTodo);
            todoForm.remove();
            render();
        });
        
    })
     newProject.addEventListener('click', () => {
        const projectForm = document.createElement('form');
        projectForm.innerHTML = `
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <button id="submitProject" type="submit">Submit</button>`;

        document.body.appendChild(projectForm);
        projectForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.querySelector("#name").value.trim();

            const newProject = new Project(name);
            userProjects.push(newProject);
            projectForm.remove();
            render();
        });
        
    })
}

function render() {
    document.body.innerHTML = '';

    if (userProjects.length === 0 && !currentProject)
        initDefaultProject();

    // Sidebar
    const sidebar = document.createElement('nav');
    sidebar.classList.add('sidebar');
    document.body.appendChild(sidebar);

    const listBtn = document.createElement('ul');
    sidebar.appendChild(listBtn);

    // Crear li fijos con botones
    for (let i = 1; i <= 2; i++) {
        const li = document.createElement('li');
        li.setAttribute('id', i);
        listBtn.appendChild(li);
    }

    const newTodo = document.createElement('button');
    newTodo.textContent = "New Todo";
    newTodo.classList.add('newTodo');

    const newProject = document.createElement('button');
    newProject.textContent = "New Project";
    newProject.classList.add('newProject');

    document.getElementById('1').appendChild(newTodo);
    document.getElementById('2').appendChild(newProject);

    // Insertar proyectos empezando con id=3
    userProjects.forEach((project, index) => {
        const li = document.createElement('li');
        li.id = (index + 3).toString();
        li.textContent = project.toString();

        // Listener para seleccionar proyecto
        li.addEventListener('click', () => {
            currentProject = project;
            render();
        });
        listBtn.appendChild(li);
    });

    // Mostrar los todos del proyecto activo
    if (!currentProject && userProjects.length > 0) {
        currentProject = userProjects[0];
    }
    
    const content = document.createElement('div');
    content.classList.add('content')
    document.body.appendChild(content);

    if (currentProject) {
        const title = document.createElement('h3');
        title.textContent = currentProject.toString();
        content.appendChild(title);

        const todoList = document.createElement('div');
        todoList.classList.add('todoList');

        currentProject.getTodos().forEach(todo => {
    		const todoDiv = document.createElement('div');
    		todoDiv.classList.add('card');

    		if (todo.isComplete) {
        		todoDiv.classList.add('completed');
    		}

    		const todoText = document.createElement('span');
    		todoText.innerHTML = todo.toString();
    		todoDiv.appendChild(todoText);

    		setUpBtn(todoDiv, todo);

    		todoList.appendChild(todoDiv);
		});

        content.appendChild(todoList);
    }
    setupEventListeners();
}

function setUpBtn(todoDiv, todo) {
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    todoDiv.appendChild(btnContainer);

    const doneCheckbox = document.createElement('input');
    doneCheckbox.type = 'checkbox';
    doneCheckbox.checked = todo.isComplete;
    btnContainer.appendChild(doneCheckbox);

    doneCheckbox.addEventListener('change', () => {
        todo.toggleComplete();
        // Solo togglea la clase en ese div.card individual
        todoDiv.classList.toggle('completed', todo.isComplete);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    btnContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        if (currentProject.removeTodo(todo)) {
            render();
        }
    });
}

document.addEventListener('DOMContentLoaded',() => {
    render();
})