const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoItems = document.querySelector("#todo-items");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    if (!todoInput.value) {
        return;
    }

    const todo = document.createElement("li");
    todo.textContent = todoInput.value;

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
});