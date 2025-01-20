const validateNotes = (subject, date, text) => {
  const errorParagraph = document.querySelector(".form__error-text");
  const formattedSubject = subject.value.trim();
  const formattedDate = date.value.trim();
  const formattedText = text.value.trim();

  // Validate subject
  if (!formattedSubject) {
    errorParagraph.style.visibility = "visible";
    errorParagraph.textContent = "Subject is required";
    return false;
  }

  // Validate date
  if (!formattedDate) {
    errorParagraph.style.visibility = "visible";
    errorParagraph.textContent = "Date is required";
    return false;
  }

  // Validate text
  if (!formattedText) {
    errorParagraph.style.visibility = "visible";
    errorParagraph.textContent = "Note's Text is required";
    return false;
  }

  // If validation passed, provide success feedback
  errorParagraph.style.visibility = "visible";
  errorParagraph.textContent = "Note's submitted successfully ✅";

  // Hide the success message after 2 seconds
  setTimeout(() => (errorParagraph.style.visibility = ""), 2000);
  return true;
};

export default validateNotes;
