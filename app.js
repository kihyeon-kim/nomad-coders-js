const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

function handleSubmit(e) {
  e.preventDefault();
  console.dir(e);
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", handleSubmit);
