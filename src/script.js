const addTaskBtn = document.querySelector(".add-task-btn");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todoList = document.querySelector(".todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getInputValue();
});

const getInputValue = function () {
    const val = input.value;
    if(!val) return;
createTodoList(val);
input.value = '';
  console.log(val);

};

// addTaskBtn.addEventListener('click', getInputValue);
// getInputValue();

const createTodoList = function (todoText) {

    // create li html element
  const taskList = document.createElement("li");
  taskList.textContent = todoText;

  // create button html element
  const removeTaskBtn = document.createElement("button");
  removeTaskBtn.textContent = "Remove";

  // adding class to the created li and btn
  taskList.setAttribute('class', 'task-li');
  removeTaskBtn.setAttribute('class', 'remove-task-btn');

//   removeTaskBtn.addEventListener('click', function() {
//     todoList.removeChild(taskList);
// });

  // adding the created li to html ul as a child
  todoList.appendChild(taskList);

  //adding the created btn to html li as a child
  taskList.appendChild(removeTaskBtn);

  console.log(todoList);
  
};



/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Text Example</title>
</head>
<body>

<div id="editableText" contenteditable="false">
  This text is not editable by default. Click "Edit" to enable editing.
</div>
<button id="editBtn">Edit</button>
<button id="saveBtn" style="display:none;">Save</button>

<script>
  const editableText = document.getElementById('editableText');
  const editBtn = document.getElementById('editBtn');
  const saveBtn = document.getElementById('saveBtn');

  // Enable editing when the "Edit" button is clicked
  editBtn.addEventListener('click', function() {
    editableText.contentEditable = 'true';
    editableText.focus();
    editBtn.style.display = 'none';
    saveBtn.style.display = 'inline';
  });

  // Disable editing and potentially save the text when "Save" is clicked
  saveBtn.addEventListener('click', function() {
    editableText.contentEditable = 'false';
    editBtn.style.display = 'inline';
    saveBtn.style.display = 'none';
    
    // Optionally, you can save the edited text here
    const editedText = editableText.textContent;
    console.log('Saved text:', editedText);
  });
</script>

</body>
</html>



*/