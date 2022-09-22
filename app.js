//* Selectors */

const addBtn = document.querySelector("#todo-button");
const todoInput = document.querySelector("#todo-input");
const todoUl = document.getElementById("todo-ul");

//! Locale Storage

let todos = [];

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") {
    alert("Please enter todo");
  } else {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
    };

    //! Yeni bir li elementi oluşturup bunu DOM'a bas
    createListElement(newTodo);

    //? yeni oluşturulan todo'yu diziye sakla

    todos.push(newTodo);

    localStorage.setItem("TODOS", JSON.stringify(todos));
    console.log(todos);
    todoInput.value = "";
  }
});

const createListElement = (newTodo) => {
  const { id, completed, text } = newTodo; //!destruction
  //? yeni bir li elementi oluştur ve bu elementi obje içerisindeki
  //? id değerine ve completed clasına ata
  const li = document.createElement("li");
  // li.id=newTodo.id;

  //   newTodo.completed ? li.classList.add("completed") : "";
  //short sirküt yöntemi
  completed && li.classList.add("checked");
  console.log(li);

  //? ok ikonu oluştur ve li elementine bağla
  li.setAttribute("id", id);
  const okIcon = document.createElement("i");
  okIcon.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon);
  console.log(li);
  todoUl.appendChild(li);
  const p = document.createElement("p");
  const pTextNode = document.createTextNode(text);
  // const pTextNode = document.createTextNode(newTodo.text); destruction dan dolayı newTodo.text yerine direkt text kullanılabilir
  p.appendChild(pTextNode);
  li.appendChild(p);

  //? delete ikonu oluştur ve li elementine bağla
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(deleteIcon);
};

//! CAPTURİNG
todoUl.addEventListener("click", (e) => {
  // console.log(e.target);
  //! Event delete butobundan geldi ise
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
  }

  //! Event, okey butonundan geldi ise
  if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.classList.toggle("checked");
  }
});

//? Enter tuşuna basıldığında ekleme yapılabilmesi için enter tuşu addBtn nin click fonksiyoununa bağlandı
todoInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addBtn.click();
  }
});

window.onload = function () {
  todoInput.focus();
};

//! body capturing used
/* const body = document.querySelector("body");
body.addEventListener("click", (e) => {
  console.log(e.target);
});*/
