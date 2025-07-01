const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const message = document.getElementById("message");

//object destuctring
form.addEventListener("submit", (event) => {
  if (!validateInputs()) {
    event.preventDefault();
  }
});
function validateInputs() {
  const userNameVl = username.value.trim();
  const passwordVl = password.value.trim();
  const emailVl = email.value;
  const messageVl = message.value.trim();
  let success = true;

  if (userNameVl === "") {
    success = false;
    setError(username, "Name is reqired");
  } else {
    setSuccess(username);
  }
  if (passwordVl === "") {
    success = false;
    setError(password, "password is reqired");
  } else if (passwordVl.length < 8) {
    setError(password, "Password must be atleast 8 charecter long");
  } else {
    setSuccess(password);
  }
  if (emailVl === "") {
    success = false;
    setError(email, "email is reqired");
  } else if (!validateEmail(emailVl)) {
    setError(email, "Please enter a valid email");
  } else {
    setSuccess(email);
  }
  if (messageVl === "") {
    success = false;
    setError(message, "Description is reqires");
  } else {
    setSuccess(message);
  }
  return success;
}
function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorEl = inputGroup.querySelector(".error");
  errorEl.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}
function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorEl = inputGroup.querySelector(".error");
  errorEl.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
