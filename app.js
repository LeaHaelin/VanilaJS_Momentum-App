const loginForm = document.querySelector(".login");
const loginInput = document.querySelector(".login__input");

console.log(loginInput)

function loginSubmitHandler(event) {
    event.preventDefault();
    const userName = loginInput.value;
    console.log(event)
}

loginForm.addEventListener("submit", loginSubmitHandler);