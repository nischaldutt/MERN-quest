const backendURL = "https://sum-server.100xdevs.com/todos";
let id = 1;
let oldState = [];

const container = document.getElementById("container");
document.getElementById("submit").onclick = addTodo;

// this is what react-dom does
function pushNewTodos(newTodo) {
  const todoElement = document.createElement("div");
  todoElement.setAttribute("class", "todoContainer");
  todoElement.setAttribute("id", newTodo.id);

  const taskElement = document.createElement("div");
  taskElement.innerHTML = newTodo.title;
  const descElement = document.createElement("div");
  descElement.innerHTML = newTodo.description;
  const markCompleteBtn = document.createElement("button");
  markCompleteBtn.innerHTML = newTodo.completed ? "done" : "Mark as done";

  todoElement.appendChild(taskElement);
  todoElement.appendChild(descElement);
  todoElement.appendChild(markCompleteBtn);

  container.appendChild(todoElement);
}

function removeTodo(todo) {
  const node = document.getElementById(todo.id);
  node?.parentElement.removeChild(node);
}

function updateTodo(todo) {
  const element = document.getElementById(todo.id);
  element.children[0].innerHTML = todo.title;
  element.children[1].innerHTML = todo.title;
}

function isTodoUpdated(oldTodo, newTodo) {
  return (
    oldTodo.title !== newTodo.title ||
    oldTodo.description !== newTodo.description
  );
}

// this is what react library does
function updateState(newState) {
  // calculate the difference b/w old and current state
  console.log({ oldState, newState });
  let added = [];
  let updated = [];
  let noChange = [];

  newState.forEach((newTodo) => {
    const oldTodo = oldState.find((oldTodo) => oldTodo.id === newTodo.id);

    if (oldTodo === undefined) {
      added.push(newTodo);
    } else if (oldTodo && isTodoUpdated(oldTodo, newTodo)) {
      updated.push(newTodo);
    } else noChange.push(newTodo);
  });

  let deleted = [];
  oldState.map((oldTodo) => {
    if (newState.find((newTodo) => oldTodo.id === newTodo.id) === undefined) {
      deleted.push(oldTodo);
    }
  });

  console.log({ added, deleted, updated, noChange });

  added.forEach((todo) => pushNewTodos(todo));
  deleted.forEach((todo) => removeTodo(todo));
  updated.forEach((todo) => updateTodo(todo));

  oldState = [...newState];
}

// this is what dev does
async function addTodo() {
  const response = await fetch(backendURL);
  const data = await response.json();
  updateState(data.todos);
}
