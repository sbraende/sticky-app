// Variables to track the edit mode and the id of the element being edited
const editState = {
  isEditMode: false,
  currentEditId: null,
};

const editForm = (id) => {
  const notesList = JSON.parse(localStorage.getItem("notes"));
  const subjectInput = document.querySelector(".form__subject-input");
  const dateInput = document.querySelector(".form__date-input");
  const textInput = document.querySelector(".form__note-input");

  const noteToEdit = notesList.find((note) => note.id === id);
  subjectInput.value = noteToEdit.subject;
  dateInput.value = noteToEdit.date;
  textInput.value = noteToEdit.text;

  return noteToEdit;
};

const enterEditMode = (id) => {
  const noteToEdit = editForm(id);

  editState.currentEditId = noteToEdit.id;
  editState.isEditMode = true;
};

export { editForm, enterEditMode, editState };
