const loginForm = document.querySelector(".login");
const loginInput = document.querySelector(".login__input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmitHandler(event) {
    event.preventDefault(); //prevent submit automatically
    loginForm.classList.add(HIDDEN_CLASSNAME); //to add class hidden to make form disappear 
    const user = loginInput.value;//to save the input value
    localStorage.setItem(USERNAME_KEY, user)//save username in localStorage
    paintGreeting(user);
}

function paintGreeting(user) {
    greeting.innerHTML = `Hi ${user}`;//it will show hi with the user's name
    greeting.classList.remove(HIDDEN_CLASSNAME); //to show greeting item after the form is gone
}  //those two lines were repeated. so make it a function and replace repeating in loginSubmit to this function

const savedUsername = localStorage.getItem(USERNAME_KEY);
//to get the localStorage item
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmitHandler);
} else {
    paintGreeting(savedUsername);
}
