export default class toDo {
    constructor(title, description, dueDate, priority){
        this.title = title.trim();
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isComplete = false;
    }

    toggleComplete(){
        this.isComplete = !this.isComplete;
    }

    update(todo){
        this.title = todo.title || this.title;
        this.description = todo.description || this.description;
        this.dueDate = todo.dueDate || this.dueDate;
        this.priority = todo.priority || this.priority;
    }

    toString(){
        return `<h4>${this.title}</h4> <br>
                ${this.description} <br>
                ${this.dueDate} <br>
                ${this.priority} <br>`;
    }
}

