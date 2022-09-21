//* Selectors */

const addBtn = document.querySelector("#todo-button");
const todoInput = document.querySelector("#todo-input");
const todoUl = document.getElementById("todo-ul");

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") {
    alert("Please enter todo");
  } else {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
    };
    createListElement(newTodo);
  }
});

const createListElement = (newTodo) => {
  const li = document.createElement("li");
  // li.id=newTodo.id;

  //? ok ikonu oluştur ve li elementine bağla
  li.setAttribute("id", newTodo.id);
  const okIcon = document.createElement("i");
  okIcon.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon);
  console.log(li);
  todoUl.appendChild(li);
  const p = document.createElement("p");
  const pTextNode = document.createTextNode(newTodo.text);
  p.appendChild(pTextNode);
  li.appendChild(p);

  //? delete ikonu oluştur ve li elementine bağla
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(deleteIcon);
};
