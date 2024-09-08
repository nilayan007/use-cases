function validateForm(event) {
    event.preventDefault();
    // Validate required fields
    if (!document.getElementById("consumerNumber").value ||
        !document.getElementById("billNumber").value ||
        !document.getElementById("title").value ||
        !document.getElementById("name").value ||
        !document.getElementById("email").value ||
        !document.getElementById("mobileNumber").value ||
        !document.getElementById("userId").value ||
        !document.getElementById("password").value ||
        !document.getElementById("confirmPassword").value) {
        alert("Please fill in all required fields.");
        return false;
    }

    // Validate bill number format
    if (!document.getElementById("billNumber").value.match(/^\d{5}$/)) {
        alert("Bill Number must be 5 digits.");
        return false;
    }

    // Validate mobile number format
    if (!document.getElementById("mobileNumber").value.match(/^[+0-9]{10,15}$/)) {
        alert("Invalid Mobile Number format.");
        return false;
    }

    // Validate password matching
    if (document.getElementById("password").value !== document.getElementById("confirmPassword").value) {
        alert("Passwords do not match.");
        return false;
    }

    // Additional validation logic as needed (e.g., email format, password strength)
    console.log("Consumer Number: " + document.getElementById("consumerNumber").value);
    console.log("Bill Number: " + document.getElementById("billNumber").value);
    console.log("Title: " + document.getElementById("title").value);
    console.log("Name: " + document.getElementById("name").value);
    console.log("Email: " + document.getElementById("email").value);
    console.log("Mobile Number: " + document.getElementById("mobileNumber").value);
    console.log("User ID: " + document.getElementById("userId").value);
    console.log("Password: " + document.getElementById("password").value);
    console.log("Confirm Password: " + document.getElementById("confirmPassword").value);
    // If all validation passes, submit the form
    return true;
}