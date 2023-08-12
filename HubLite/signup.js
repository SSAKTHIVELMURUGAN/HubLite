// signup.js

// Function to show or hide password
function togglePassword() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// Function to validate form before submission
function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    
    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return false;
    }
    
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    
    return true;
}
