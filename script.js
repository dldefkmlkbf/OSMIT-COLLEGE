function applyNow() {
    alert("Thank you for your interest! Please visit our admissions page to proceed with your application.");
}

function submitForm(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    alert("Your application has been submitted successfully. Thank you!");
    document.getElementById("admission-form").reset(); // Reset the form after submission
}