// passwordProtection.js

// Defines the correct password & prompts user for a password
const correctPassword = "JDH2023";
const userEnteredPassword = prompt("Please enter the password:");

if (userEnteredPassword === correctPassword) {
    // Password is correct, set a cookie to remember it for 7 days
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 days from now
    const expires = "expires=" + expirationDate.toUTCString();
    document.cookie = "rememberPassword=true;" + expires + ";path=/"; // Set cookie with expiration and path
} else {
    // Password is incorrect, redirect to the previous page
    alert("Incorrect password. You will be redirected to the previous page.");
    window.history.back();
}
