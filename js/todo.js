const TODO_FORM_ID = "todo-form";
const TODO_LIST_ID = "todo-list";
const todoForm = document.querySelector(`#${TODO_FORM_ID}`);
const todoInput = document.querySelector(`#${TODO_FORM_ID} input`);
const todoList = document.querySelector(`#${TODO_LIST_ID}`);

const TODOS_KEY = "todos";
const MAX_TODO_ITEM_SIZE = 5;

let todosInStorage = [];

function loadFromStorage() {
  todosInStorage = JSON.parse(localStorage.getItem(TODOS_KEY)) ?? [];
}

function writeToStorage(todo) {
  if (todosInStorage.length >= MAX_TODO_ITEM_SIZE) {
    alert("Life is SHORT. Finish existing tasks first!");
    return;
  }

  todosInStorage.push(todo);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todosInStorage));
}

function replaceStorage(todos) {
  localStorage.setItem(TODOS_KEY, todos);
}

function doneTodo(event) {
  event.preventDefault();

  const doneTodoId = event.target.parentElement.id;

  replaceStorage(
    JSON.stringify(
      todosInStorage.filter((todo) => todo.id !== parseInt(doneTodoId))
    )
  );

  displayTodos();
}

function displayTodos() {
  loadFromStorage();

  todoList.querySelectorAll("li").forEach((li) => {
    li.remove();
  });

  todosInStorage.forEach((todoObj) => {
    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "✅";
    doneBtn.addEventListener("click", doneTodo);

    const todoText = todoObj.text;
    const todoTextSpan = document.createElement("span");
    todoTextSpan.innerHTML = todoText;

    const todoLi = document.createElement("li");
    todoLi.id = todoObj.id;
    todoLi.appendChild(doneBtn);
    todoLi.appendChild(todoTextSpan);

    todoList.appendChild(todoLi);
  });
}

function addTodo(event) {
  event.preventDefault();

  const todoText = todoInput.value;
  todoInput.value = "";

  writeToStorage({ id: Date.now(), text: todoText });

  displayTodos();
}

todoForm.addEventListener("submit", addTodo);

displayTodos();
