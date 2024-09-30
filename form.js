// Form
// "https://script.google.com/macros/s/AKfycbx__-mBZL9vw7XNZ1qbzTiERHzS4zgPA8CUaaIhvz44ykE5sTpdqLlKBjt_szU_kfhv/exec"

document
  .getElementById("contact-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic email validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      // Send data to Google Sheets
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx__-mBZL9vw7XNZ1qbzTiERHzS4zgPA8CUaaIhvz44ykE5sTpdqLlKBjt_szU_kfhv/exec",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, message }),
        }
      );

      const result = await response.json();
      if (result.result === "success") {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      } else {
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  });

// Email validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}
