const todoForm = document.querySelector(".todo__form");
const todoInput = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");

const TODOS_KEY = "todos";
let todos = [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos)); //to save todo items in localSrotage as an array shape
}
function deleteTodo(event) {
    const li = event.target.parentElement; // to delete, target the parent of the button 
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo) {
    const todoLi = document.createElement("li");
    todoLi.id = newTodo.id;
    const todoSpan = document.createElement("span");
    todoSpan.innerText = newTodo.text;
    const todoBTN = document.createElement("button");
    todoBTN.innerText = "x";
    todoBTN.addEventListener("click", deleteTodo);
    todoLi.appendChild(todoSpan); // to add todoSpan in todoLi as a child
    todoLi.appendChild(todoBTN); // to add todoButton in todoLi as a child
    todoList.appendChild(todoLi); //// to add list item in todoList as a child
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value; // target the input's value and save it to the variable
    todoInput.value = ""; //empty the input
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj); //it will add newTodo to the todos Array 
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(paintTodo);// to print the items in localStorage on the browser
}

