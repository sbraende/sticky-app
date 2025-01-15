import { v4 as uuidv4 } from "uuid";

// Math.random() * (Max - min +1) + min
export const generateRandomNumber = () =>
  Math.floor(Math.random() * (10 - -10 + 1) + -10);

const addNotes = (subject, date, text) => {
  const notesArray = JSON.parse(localStorage.getItem("notes")) || [];
  const note = {
    id: uuidv4(),
    subject: subject.value.trim(),
    date: date.value.trim(),
    text: text.value.trim(),
    rotation: generateRandomNumber(),
  };
  console.log(note);

  notesArray.push(note);
  // storeNotes();
  console.log(notesArray);
};

export default addNotes;
