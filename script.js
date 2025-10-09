document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const profiles = document.querySelectorAll(".profile");
  const date = document.getElementById("dates");
  const savedTheme = localStorage.getItem("theme");
  const darkMode = document.querySelector(".dark-btn");
  const iconBtn = document.getElementById("icon");
  // IMPORTANT: select the <img> inside the button
  const iconImg = document.querySelector(".dark-btn img");
  const darkSrc = "assets/dark.png";
  const lightSrc = "assets/light.png";

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  if (date) date.innerHTML = currentYear;

  if (savedTheme === "light") {
    document.body.classList.add("light-background");
    if (iconImg) {
      iconImg.style.filter = "invert(0%)";
      iconImg.src = lightSrc;
    }
    document.querySelector(".title")?.classList.add("text-color");
    document.querySelector("footer")?.classList.add("text-color");
    const buttons = document.querySelectorAll(".add");
    buttons.forEach((button) => {
      button.classList.add("bg-color");
    });
    if (darkMode) darkMode.classList.add("icon-position", "light-background", "icon-color");
  } else {
    // default to dark if nothing saved
    document.body.classList.remove("light-background");
    if (iconImg) {
      iconImg.style.filter = "invert(100%)";
      iconImg.src = darkSrc;
    }
    if (!savedTheme) localStorage.setItem("theme", "dark");
  }

  window.addEventListener("scroll", () => {
    const progressBar = document.getElementById("bar");
    const scrollTotal = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / scrollTotal) * 100;
    if (progressBar) progressBar.style.width = scrollPercentage + "%";
  });

  if (searchInput) {
    searchInput.addEventListener("input", filterProfiles);
  }
  function filterProfiles() {
    const query = (searchInput.value || "").toLowerCase();
    profiles.forEach((profile) => {
      const nameEl = profile.querySelector(".name");
      const name = nameEl ? nameEl.textContent.toLowerCase() : "";
      const skills = Array.from(profile.querySelectorAll(".skills .skill")).map(
        (skill) => skill.textContent.toLowerCase()
      );
      if (name.includes(query) || skills.some((skill) => skill.includes(query))) {
        profile.style.display = "block";
      } else {
        profile.style.display = "none";
      }
    });
  }

  // Toggle theme when darkMode button exists
  if (darkMode) {
    darkMode.addEventListener("click", () => {
      document.body.classList.toggle("light-background");

      if (document.body.classList.contains("light-background")) {
        if (iconImg) {
          iconImg.style.filter = "invert(0%)";
          iconImg.src = lightSrc; // relative path
        }
        localStorage.setItem("theme", "light");
      } else {
        if (iconImg) {
          iconImg.style.filter = "invert(100%)";
          iconImg.src = darkSrc; // relative path
        }
        localStorage.setItem("theme", "dark");
      }

      darkMode.classList.toggle("icon-position");
      darkMode.classList.toggle("light-background");
      darkMode.classList.toggle("icon-color");
      document.querySelector(".title")?.classList.toggle("text-color");
      document.querySelector("footer")?.classList.toggle("text-color");
      const buttons = document.querySelectorAll(".add");
      buttons.forEach((button) => {
        button.classList.toggle("bg-color");
      });
    });
  }
});

// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (!backToTopBtn) return;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// When the user clicks the button, scroll to the top of the document
if (backToTopBtn) {
  backToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}

// Guard contact form listener (only attach if form exists)
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear any existing error messages
    const errorMessageDiv = document.getElementById("error-message");
    const form = event.target;
    if (errorMessageDiv) {
      errorMessageDiv.style.display = "none";
      errorMessageDiv.textContent = "";
    }

    // Form inputs
    const name = document.getElementById("name") ? document.getElementById("name").value.trim() : "";
    const email = document.getElementById("email") ? document.getElementById("email").value.trim() : "";
    const message = document.getElementById("message") ? document.getElementById("message").value.trim() : "";

    // Validate input fields
    if (!name || !email || !message) {
      showError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      showError("Please enter a valid email address.");
      return;
    }

    // Create a form data object to send
    const formData = new FormData(form);

    // Submit the form using fetch
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // showSuccess("Message sent successfully!");
          form.reset(); // Reset the form fields after success
        } else {
          showError("Oops! Something went wrong. Please try again later.");
        }
      })
      .catch((error) => {
        showError("There was a problem submitting the form. Please try again.");
      });
  });
}

// Function to show error message
function showError(message) {
  const errorMessageDiv = document.getElementById("error-message");
  if (!errorMessageDiv) return;
  errorMessageDiv.textContent = message;
  errorMessageDiv.style.display = "block";

  // Hide the error message after 5 seconds
  setTimeout(() => {
    errorMessageDiv.style.display = "none";
  }, 5000);
}

// Function to show success message
function showSuccess(message) {
  const errorMessageDiv = document.getElementById("error-message");
  if (!errorMessageDiv) return;
  errorMessageDiv.textContent = message;
  errorMessageDiv.style.backgroundColor = "#4BB543"; // Change background to green for success
  errorMessageDiv.style.display = "block";
  errorMessageDiv.style.fontWeight = "bolder";

  // Hide the success message after 5 seconds
  setTimeout(() => {
    errorMessageDiv.style.display = "none";
    errorMessageDiv.style.backgroundColor = "#ff4d4d"; // Reset to default error color
  }, 5000);
}

// Function to validate email format
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
