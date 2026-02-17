import toDo from "./todo.js";

export default class Project {
    #todos = [];

    constructor(name) {
        if (name && typeof name === "string") {
            this.name = name.trim();
        }
    }

    create(name) {
        if (!name || typeof name !== "string" || name.trim() === "") {
            throw new Error("Invalid name");
        }
        const project = new Project(name);
        return project;
    }

    toString(){
        return this.name;
    }

    getTodos() {
        return this.#todos;
    }

    addTodo(todoItem) {
        if (!(todoItem instanceof toDo)) {
            throw new Error("Invalid toDo");
        }
        this.#todos.push(todoItem);
    }

    removeTodo(todoName){
        for (let i = 0; i < this.#todos.length; i++) {
            if (this.#todos[i] === todoName) {
                this.#todos.splice(i, 1);
                return true;
            }
        }
        return false;
    }
}