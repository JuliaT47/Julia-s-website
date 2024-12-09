// Form
// "https://script.google.com/macros/s/AKfycbz-MOw1KYJkTVcwXYldF_AiUHehl1GCwN9tamwfDb0ydfZd4ey73oyAIKmMJz4LRrnj/exec"

document
  .getElementById("contact-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form input values
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic email validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Ensure message isn't empty
    if (!message) {
      alert("Message cannot be empty.");
      return;
    }

    try {
      // Send data to Google Apps Script Web App
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz-MOw1KYJkTVcwXYldF_AiUHehl1GCwN9tamwfDb0ydfZd4ey73oyAIKmMJz4LRrnj/exec",
        {
          method: "POST",
          mode: "cors", // CORS mode for cross-origin requests
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, message }),
        }
      );

      // Parse and handle the response
      const result = await response.json();
      if (result.result === "success") {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset(); // Clear the form
      } else {
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error during submission:", error); // Log the error for debugging
      alert("An error occurred. Please try again.");
    }
  });

// Email validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}
