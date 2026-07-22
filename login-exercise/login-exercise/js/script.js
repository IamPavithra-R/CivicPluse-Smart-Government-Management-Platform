// Login Exercise
// Concepts: form submit handling, client-side validation, DOM manipulation, event listeners

const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");
const showPasswordCheckbox = document.getElementById("showPassword");

// Toggle password visibility
showPasswordCheckbox.addEventListener("change", () => {
  passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
});

// Clear an individual field's error as the user types
usernameInput.addEventListener("input", () => clearError(usernameInput, usernameError));
passwordInput.addEventListener("input", () => clearError(passwordInput, passwordError));

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the page from reloading

  successMessage.textContent = "";
  let isValid = true;

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  // Username / email validation
  if (username === "") {
    showError(usernameInput, usernameError, "Username or email is required");
    isValid = false;
  } else if (username.includes("@") && !isValidEmail(username)) {
    showError(usernameInput, usernameError, "Enter a valid email address");
    isValid = false;
  }

  // Password validation
  if (password === "") {
    showError(passwordInput, passwordError, "Password is required");
    isValid = false;
  } else if (password.length < 6) {
    showError(passwordInput, passwordError, "Password must be at least 6 characters");
    isValid = false;
  }

  if (isValid) {
    // In a real app, this is where you'd call your backend login API
    successMessage.textContent = `Welcome, ${username}! Login successful.`;
    form.reset();
  }
});

function showError(inputEl, errorEl, message) {
  inputEl.classList.add("invalid");
  errorEl.textContent = message;
}

function clearError(inputEl, errorEl) {
  inputEl.classList.remove("invalid");
  errorEl.textContent = "";
}

function isValidEmail(value) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
}
