const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoItems = document.querySelector("#todo-items");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    if (!todoInput.value) {
        return;
    }

    const todo = document.createElement("li");
    const todoText = document.createElement("span");
    todoText.textContent = todoInput.value;
    todo.appendChild(todoText)

    const btnsDiv = document.createElement("div");
    btnsDiv.id = "btns";
    
    const completeBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    completeBtn.classList.add("complete");
    completeBtn.textContent = "✔";
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "x";

    btnsDiv.appendChild(completeBtn);
    btnsDiv.appendChild(deleteBtn);

    todo.appendChild(btnsDiv);
    todoItems.appendChild(todo);

    todoInput.value = "";
});

todoItems.addEventListener("click", (e) => {
    // Check if the element the user clicked have this class
    if (e.target.classList.contains("complete")) {
        // Return the closest parent given a condition in this case is the tag
        const todo = e.target.closest("li");
        const todoBtns = todo.lastElementChild;
        todo.removeChild(todoBtns);
        todo.classList.add("completed");
    }

    if (e.target.classList.contains("delete")) {
        const todo = e.target.closest("li");
        todo.remove();
    }
});