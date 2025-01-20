import renderNotes from "./renderNotes";
import storeNotes from "./storeNotes.js";

const displayDeleteModal = (subject, id) => {
  const deleteModal = document.querySelector(".delete-modal");
  const deleteMessage = document.querySelector(".delete-modal__text");
  deleteModal.classList.add("display-modal");
  deleteMessage.textContent = `Are you sure you want to delete ${subject}`;
  const confirmDeleteButton = document.querySelector(
    ".delete-modal__confirm-button"
  );
  confirmDeleteButton.addEventListener("click", () => {
    confirmDelete(id);
  });
};

const closedModal = () => {
  const deleteModal = document.querySelector(".delete-modal");
  deleteModal.classList.remove("display-modal");
};

const initializeCloseModal = () => {
  const cancelDeleteButton = document.querySelector(
    ".delete-modal__cancel-button"
  );
  cancelDeleteButton.addEventListener("click", closedModal);
};
initializeCloseModal();

const confirmDelete = (id) => {
  const notesList = JSON.parse(localStorage.getItem("notes"));
  const filteredArray = notesList.filter((note) => note.id !== id);
  storeNotes(filteredArray);
  renderNotes();
  closedModal();
};

export { displayDeleteModal, closedModal };
