let email = document.getElementById("email");
let form = document.getElementById("form");
let error = document.getElementById("error");
let submitBtn = document.getElementById("submit");
let errorIcon = document.getElementById("error-icon");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

email.addEventListener("input", validateForm);
form.addEventListener("submit", submitForm);

function validateForm() {
  let emailValue = email.value;

  if (emailValue.match(regex)) {
    errorIcon.classList.remove('active');

    error.textContent = null;
    return true;
  } else {
    errorIcon.classList.add('active');
    email.classList.add("error-email", "error");
    error.classList.add("error-msg");
    error.textContent = "Please provide a valid email";
    return false;
  }
}

function submitForm(event) {
  if (!validateForm()) {
    event.preventDefault();
  }
}
