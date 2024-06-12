const backendURL = "https://dummyjson.com/todos?limit=2&skip=1";
let id = 1;
let state = [];
let oldState = [];
const container = document.getElementById("container");
document.getElementById("submit").onclick = addTodo;

function pushNewTodos(newTodo) {
  const todoElement = document.createElement("div");
  todoElement.setAttribute("class", "todoContainer");
  todoElement.setAttribute("id", newTodo.id);

  const taskElement = document.createElement("div");
  taskElement.innerHTML = newTodo.task;
  const descElement = document.createElement("div");
  descElement.innerHTML = newTodo.desc;
  const markCompleteBtn = document.createElement("button");
  markCompleteBtn.innerHTML = newTodo.completed ? "done" : "Mark as done";
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "delete";
  removeBtn.setAttribute("onclick", `deleteTodo(${newTodo.id});`);

  todoElement.appendChild(taskElement);
  todoElement.appendChild(descElement);
  todoElement.appendChild(markCompleteBtn);
  todoElement.appendChild(removeBtn);

  container.appendChild(todoElement);
}

function removeTodo(todo) {
  const node = document.getElementById(todo.id);
  node?.parentElement.removeChild(node);
}

// function updateTodo(oldTodo, newTodo) {
//   const element = document.getElementById(oldTodo.id);
//   const taskElement = (document.createElement("div").innerHTML = todo.task);
//   const descElement = (document.createElement("div").innerHTML = todo.desc);
// }

function updateState(newState) {
  // calculate the difference b/w old and current state
  console.log({ oldState, newState });
  let added = [];
  newState.forEach((newTodo) => {
    if (oldState.find((oldTodo) => oldTodo.id === newTodo.id) === undefined) {
      added.push(newTodo);
    }
  });

  let deleted = [];
  oldState.map((oldTodo) => {
    if (newState.find((newTodo) => oldTodo.id === newTodo.id) === undefined) {
      deleted.push(oldTodo);
    }
  });

  // let updated = state.map((todo) => {
  //   return oldState.filter((oldTodo) => {
  //     return todo.id === oldTodo.id;
  //   });
  // });

  console.log({ added, deleted });

  added.forEach((todo) => pushNewTodos(todo));
  deleted.forEach((todo) => removeTodo(todo));
  oldState = [...newState];
}

function addTodo() {
  const task = document.getElementById("task").value;
  const desc = document.getElementById("desc").value;
  const todo = {
    task,
    desc,
    completed: false,
    id: id++,
  };

  state.push(todo);
  updateState(state);
}

function deleteTodo(id) {
  const newState = state.filter((todo) => todo.id !== id);
  state = newState;
  updateState(state);
}
