const loginForm = document.querySelector(".login");
const loginInput = document.querySelector(".login__input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "userName"
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", loginSubmitHandler)
} else {
    //show the greetings
    paintGreeting(savedUserName);
}

function loginSubmitHandler(event) {
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting(userName)
}

loginForm.addEventListener("submit", loginSubmitHandler);

function paintGreeting(userName) {
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerHTML = `Hello ${userName}!`
}



