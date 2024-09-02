# To-Do List Application

## Overview

This is a simple yet functional To-Do List application built with vanilla JavaScript, HTML, and CSS. The app allows users to manage their tasks by adding, editing, completing, and deleting items. It features persistent storage using `localStorage` to save and load tasks between sessions.

## Features

- **Add Tasks:** Users can input and add new tasks to the list.
- **Edit Tasks:** Tasks can be edited by toggling their editable state.
- **Complete Tasks:** Users can mark tasks as completed, which applies a strikethrough effect.
- **Delete Tasks:** Tasks can be removed from the list.
- **Filter Tasks:** Tasks can be filtered based on their completion status:
  - **All:** Displays all tasks.
  - **Completed:** Shows only completed tasks.
  - **Uncompleted:** Shows only tasks that are not completed.
- **Persistent Storage:** Tasks are saved in `localStorage`, so they persist across page reloads.

## Installation

1. **Clone the repository:** git clone https://github.com//estheroluwabuyi/to-do-list-app.git

2. **Navigate to the project directory:** cd to-do-list-app

3. **Open the `index.html` file in your browser:** Simply open the `index.html` file in your preferred web browser to see the application in action.

## Usage

1. **Add a Task:**
   - Type a task into the input field and press Enter or click the submit button to add it to the list.

2. **Edit a Task:**
   - Click the edit button (a pencil icon) to toggle the task’s editable state. Edit the task and click the edit button again to save changes.

3. **Complete a Task:**
   - Click the check button (a checkmark icon) to mark a task as completed. The task will have a strikethrough effect.

4. **Delete a Task:**
   - Click the delete button (a trash bin icon) to remove a task from the list.

5. **Filter Tasks:**
   - Use the options dropdown to filter tasks:
     - **All:** Show all tasks.
     - **Completed:** Show only tasks marked as completed.
     - **Uncompleted:** Show only tasks that are not completed.

## Code Overview

- **HTML (`index.html`):** Defines the structure of the application.
- **CSS (`styles.css`):** Styles the application and defines the layout.
- **JavaScript (`script.js`):** Contains the logic for managing tasks, handling user interactions, and storing data in `localStorage`.

## Local Storage

- **Saving Tasks:** When tasks are added, edited, or deleted, the `storeCode` function updates `localStorage` with the current list of tasks.
- **Loading Tasks:** On page load, the `loadCode` function retrieves tasks from `localStorage` and populates the list.

## Preview
[https://todo-list-app-thecodegal-estheroluwabuyis-projects.vercel.app/](https://todo-list-app-thecodegal-estheroluwabuyis-projects.vercel.app/)

## License

This project is licensed under the MIT License, allowing for free and open-source use, modification, and distribution.
