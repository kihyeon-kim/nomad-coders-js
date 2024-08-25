const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const USER_KEY = "user";
const HIDDEN_CLASS = "hidden";

const loginUser = localStorage.getItem(USER_KEY);

function displayGreetings(loginUser) {
  greeting.innerHTML = `Hello, ${loginUser}!!!`
  loginForm.classList.add(HIDDEN_CLASS)
  greeting.classList.remove(HIDDEN_CLASS);
}

if (loginUser) {
  displayGreetings(loginUser);
} else {
  loginForm.classList.remove(HIDDEN_CLASS);
}

function processLogin(event) {
  event.preventDefault();

  const newUser = loginInput.value;
  localStorage.setItem(USER_KEY, newUser);
  displayGreetings(newUser)
}

loginForm.addEventListener("submit", processLogin);
