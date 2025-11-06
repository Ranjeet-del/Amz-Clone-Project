// Handle registration
document.getElementById("register-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form inputs
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    // Get error messages
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confirm-password-error");

    // Validation flags
    let isValid = true;

    // Clear error messages
    nameError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";
    confirmPasswordError.style.display = "none";

    // Validate name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Full name is required.";
        nameError.style.display = "block";
        isValid = false;
    }

    // Validate email with a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        isValid = false;
    }

    // Validate password (minimum 6 characters)
    if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        passwordError.style.display = "block";
        isValid = false;
    }

    // Validate password confirmation
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.style.display = "block";
        isValid = false;
    }

    // If all validations pass, store the data and display success message
    if (isValid) {
        // Store user data in local storage
        localStorage.setItem("userName", nameInput.value);
        localStorage.setItem("userEmail", emailInput.value);
        localStorage.setItem("userPassword", passwordInput.value);
        
        document.getElementById("success-message").classList.remove("hidden");

        // Clear form fields
        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        confirmPasswordInput.value = "";
    }
});

// Handle login
document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get login inputs
    const loginEmailInput = document.getElementById("login-email");
    const loginPasswordInput = document.getElementById("login-password");

    // Get error messages
    const loginEmailError = document.getElementById("login-email-error");
    const loginPasswordError = document.getElementById("login-password-error");
    const loginMessage = document.getElementById("login-message");

    // Clear error messages
    loginEmailError.style.display = "none";
    loginPasswordError.style.display = "none";
    loginMessage.classList.add("hidden");

    // Retrieve stored data
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    // Validate login credentials
    if (loginEmailInput.value.trim() !== storedEmail) {
        loginEmailError.textContent = "Email is incorrect.";
        loginEmailError.style.display = "block";
    } else if (loginPasswordInput.value.trim() !== storedPassword) {
        loginPasswordError.textContent = "Password is incorrect.";
        loginPasswordError.style.display = "block";
    } else {
        loginMessage.classList.remove("hidden");
        loginMessage.textContent = "Login successfully !!";
    }
});
