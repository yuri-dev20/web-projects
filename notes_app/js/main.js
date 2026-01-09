const gridContainer = document.querySelector(".grid-container");
const createNoteBtn = document.querySelector(".create-note-btn");
const createNoteWindow = document.querySelector("#add-note-window");
const addNoteBtn = document.querySelector("#add-note-btn");
const notesContainer = document.querySelector(".notes");

createNoteWindow.addEventListener("click", (e) => {
    if (e.target === createNoteWindow) {
        createNoteWindow.close();
    }
});

createNoteBtn.addEventListener("click", () => {
    createNoteWindow.showModal();
});

addNoteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("#note-title").value;
    const description = document.querySelector("#note-description").value;

    gridContainer.classList.remove("no-notes");
    gridContainer.appendChild(createNote(title, description));
    createNoteWindow.close();
});

function createNote(title, description) {
    const note = document.createElement("div");
    note.classList.add("note");

    const noteHeader = document.createElement("div");
    noteHeader.classList.add("note-header");
    const noteTitle = document.createElement("h4");
    noteTitle.textContent = title;
    const deleteNoteBtn = document.createElement("button");
    deleteNoteBtn.textContent = "X";
    deleteNoteBtn.classList.add("delete-btn");
    noteHeader.appendChild(noteTitle);
    noteHeader.appendChild(deleteNoteBtn);
    
    const noteDescription = document.createElement("p");
    noteDescription.textContent = description;
    const noteDate = document.createElement("span");
    const today = new Date();
    noteDate.textContent = today.toDateString();
    
    note.appendChild(noteHeader);
    note.appendChild(noteDescription);
    note.appendChild(noteDate);

    return note;
}