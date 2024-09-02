"use strict";

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todoList = document.querySelector(".todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getInputValue();
});

const getInputValue = function () {
  const val = input.value;
  if (!val) return;
  createTodoList(val);
  input.value = "";
  storeCode();
};

const createTodoList = function (todoText) {
  const markup = `<div class="todo-list-list">
          <p class="todo-list-list__texts" contenteditable="false">${todoText}</p>

          <div class="todo-list-list__btns">
            <button class="btn-icons btn-1">
              <ion-icon name="create-outline">
              </ion-icon>
            </button>

            <button class="btn-icons btn-2">
              <ion-icon name="checkmark-outline"></ion-icon>
            </button>

            <button class="btn-icons btn-3">
              <ion-icon name="trash-bin-outline"></ion-icon>
            </button>
          </div>
        </div>`;
  todoList.insertAdjacentHTML("beforeend", markup);
};

todoList.addEventListener("click", function (e) {
  const target = e.target;
  const todoListList = target.closest(".todo-list-list");
  const todoItemText = todoListList.querySelector(".todo-list-list__texts");
  const editBtn = todoListList.querySelector(".btn-1");
  const checkBtn = todoListList.querySelector(".btn-2");
  const deleteBtn = todoListList.querySelector(".btn-3");
  const iconEl = editBtn.querySelector("ion-icon");

  if (target.closest(".btn-2")) {
    todoItemText.classList.toggle("strikeText");
    todoListList.classList.toggle("transparent");
    editBtn.classList.toggle("hide");
    todoItemText.contentEditable = "false";
    checkBtn.classList.toggle("borderRadius");
    iconEl.setAttribute("name", "create-outline");
    editBtn.classList.remove("bookmarkColor");

    if (todoItemText.textContent.trim() === "") {
      todoItemText.classList.remove("strikeText");
      todoListList.classList.remove("transparent");
      editBtn.classList.remove("hide");
      editBtn.classList.remove("bookmarkColor");
      todoItemText.contentEditable = "true";
      checkBtn.classList.remove("borderRadius");
      todoItemText.focus();
    }
    storeCode();
  }

  if (target.closest(".btn-1")) {
    const isEditable = todoItemText.contentEditable === "true";
    todoItemText.contentEditable = !isEditable;
    todoItemText.focus();

    //to make the focus key be at the end of the input
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(todoItemText);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);

    if (todoItemText.contentEditable === "true") {
      iconEl.setAttribute("name", "bookmark-outline");
      editBtn.classList.add("bookmarkColor");
    } else {
      iconEl.setAttribute("name", "create-outline");
      editBtn.classList.remove("bookmarkColor");
    }
    storeCode();
  }

  if (target.closest(".btn-3")) {
    todoListList.classList.add("delBtn");

    setTimeout(() => {
      todoListList.remove(); // todoListList.classList.add("hide"); wont work because its
      storeCode();
    }, 700);
  }
});

// Options
const selectOptionsBar = document.querySelector(".options");
const selectOptionsBarInput = document.querySelector(".select-icon");

selectOptionsBarInput.addEventListener("change", function (e) {
  const optionsValue = selectOptionsBar.value;

  // Select all todo items
  const todoItems = todoList.querySelectorAll(".todo-list-list");

  // Loop through each todo item and apply the filter
  todoItems.forEach((todoItem) => {
    const todoText = todoItem.querySelector(".todo-list-list__texts");

    switch (optionsValue) {
      case "Completed":
        if (todoText.classList.contains("strikeText")) {
          todoItem.style.display = "grid";
        } else {
          todoItem.style.display = "none";
        }

        break;

      case "Uncompleted":
        if (todoText.classList.contains("strikeText")) {
          todoItem.style.display = "none";
        } else {
          todoItem.style.display = "grid";
        }
        break;

      case "All":
        todoItem.style.display = "grid";
        break;

      default:
        todoItem.style.display = "grid";
        break;
    }
  });
});

// localStorage.clear();

//LocalStorage
function storeCode() {
  // Collect all the todo items
  const todoItems = Array.from(
    todoList.querySelectorAll(".todo-list-list__texts")
  ).map((item) => item.textContent);

  // Store the items in localStorage
  localStorage.setItem("todoList", JSON.stringify(todoItems));
}

function loadCode() {
  // Get the stored items from localStorage
  const storedItems = JSON.parse(localStorage.getItem("todoList"));

  if (storedItems) {
    // Clear the current list
    todoList.innerHTML = "";

    // Recreate the list from stored items
    storedItems.forEach((itemText) => {
      createTodoList(itemText);
    });
  }
}

document.addEventListener("DOMContentLoaded", loadCode);
