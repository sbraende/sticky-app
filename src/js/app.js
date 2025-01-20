import addNotes, { generateRandomNumber } from "./addNotes.js";
import { editState } from "./editNotes.js";
import renderNotes from "./renderNotes.js";
import storeNotes from "./storeNotes.js";
import validateNotes from "./validateNotes.js";

// Selecting elements
const form = document.querySelector(".form");
const subjectInput = document.querySelector(".form__subject-input");
const dateInput = document.querySelector(".form__date-input");
const noteText = document.querySelector(".form__note-input");

// Inital render
document.addEventListener("DOMContentLoaded", renderNotes);

// Add submit event to form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // If validation fails, prevent form submission
  if (!validateNotes(subjectInput, dateInput, noteText)) {
    return;
  }

  if (!editState.isEditMode) {
    addNotes(subjectInput, dateInput, noteText);
    renderNotes();
  } else {
    const notesList = JSON.parse(localStorage.getItem("notes"));
    const editedNote = {
      id: editState.currentEditId,
      subject: subjectInput.value.trim(),
      date: dateInput.value.trim(),
      text: noteText.value.trim(),
      rotation: generateRandomNumber(),
    };

    const updatedNoteList = notesList.map((note) => {
      return note.id === editState.currentEditId ? editedNote : note;
    });
    storeNotes(updatedNoteList);
    renderNotes();
    editState.currentEditId = null;
    editState.isEditMode = false;
    const submitButton = document.querySelector(".form__submit-button");
    submitButton.classList.remove("note-card--edited");
    submitButton.textContent = "Add note";
  }
});
