document
  .getElementById("contact-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form input values
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate email
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Ensure the message is not empty
    if (!message) {
      alert("Message cannot be empty.");
      return;
    }

    try {
      // Send the form data to Formspree
      const response = await fetch("https://formspree.io/f/mnnjjogr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset(); // Reset the form
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      alert(
        "An error occurred while sending the message. Please check your internet connection."
      );
    }
  });

// Email validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}
