// Selecting DOM elements
const submitBtn = document.getElementById("submitBtn"); // Selecting the submit button
const email = document.getElementById("email"); // Selecting the email input field
const alertInfo = document.getElementById("alert"); // Selecting the alert message container

// Color definitions
const alertColor = "hsl(354, 100%, 66%)"; // Color for invalid input
const successColor = "hsl(0, 0%, 59%)"; // Color for valid input

// Adding event listener to the submit button
submitBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Preventing default form submission behavior

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailValue = email.value.trim(); // Retrieving trimmed value of the email input

  // Checking if email input matches the regex pattern
  if (emailRegex.test(emailValue)) {
    // If valid, set border color to success color
    email.style.border = `2px solid ${successColor}`;
  } else {
    // If invalid, set border color to alert color
    email.style.border = `2px solid ${alertColor}`;
    // Display alert message and set style to italic
    alertInfo.style.display = "block";
    alertInfo.style.fontStyle = "italic";
  }
}, false);

// Adding event listener to the email input field
email.addEventListener("click", function () {
  // When clicked, set border color to success color and hide alert message
  email.style.border = `2px solid ${successColor}`;
  alertInfo.style.display = "none";
});
