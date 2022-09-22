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
      completed: true,
      text: todoInput.value,
    };
    createListElement(newTodo);
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

//? Enter tuşuna basıldığında ekleme yapılabilmesi için enter tuşu addBtn nin click fonksiyoununa bağlandı
todoInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addBtn.click();
  }
});

window.onload = function () {
  todoInput.focus();
};
