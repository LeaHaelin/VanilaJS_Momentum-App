const todoForm = document.querySelector(".todo__form");
const todoInput = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");

const TODOS_KEY = "todos";
const todos = [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    const todoLi = document.createElement("li");
    const todoSpan = document.createElement("span");
    todoSpan.innerText = newTodo;
    const todoBTN = document.createElement("button");
    todoBTN.innerText = "x";
    todoBTN.addEventListener("click", deleteTodo);
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(todoBTN);
    todoList.appendChild(todoLi);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value; // target the input's value and save it to the variable
    todoInput.value = ""; //empty the input
    todos.push(newTodo); //it will add newTodo to the todos Array 
    paintTodo(newTodo);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);
const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(saveTodos);