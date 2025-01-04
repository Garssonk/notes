// Select DOM elements
const noteInput = document.getElementById('noteInput');
const addNoteButton = document.getElementById('addNote');
const notesList = document.getElementById('notesList');

// Array to store notes
let notes = [];

// Function to render notes
function renderNotes() {
  notesList.innerHTML = '';
  notes.forEach((note, index) => {
    const noteItem = document.createElement('li');
    noteItem.textContent = note.text;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', () => {
      deleteNote(index);
    });
    noteItem.appendChild(deleteButton);
    notesList.appendChild(noteItem);
  });
}

// Function to add a new note
function addNote() {
  const noteText = noteInput.value.trim();
  if (noteText) {
    notes.push({ text: noteText, completed: false });
    noteInput.value = '';
    renderNotes();
  }
}

// Function to delete a note
function deleteNote(index) {
  notes.splice(index, 1);
  renderNotes();
}

// Event listeners
addNoteButton.addEventListener('click', addNote);