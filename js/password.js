// passwordProtection.js

// Define the correct password
const correctPassword = "JDH2023";

// Prompt the user for a password
const userEnteredPassword = prompt("Please enter the password:");

// Check if the entered password is correct
if (userEnteredPassword === correctPassword) {
    // Password is correct, do nothing (let the page load)
} else {
    // Password is incorrect, redirect to the previous page
    alert("Incorrect password. You will be redirected to the previous page.");
    window.history.back();
}
