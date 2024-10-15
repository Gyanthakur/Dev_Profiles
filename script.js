document.addEventListener("DOMContentLoaded", function() {
const searchInput = document.getElementById('searchInput');
const profiles = document.querySelectorAll('.profile');
const date = document.getElementById('dates')


let currentDate  = new Date()
let currentYear  = currentDate.getFullYear()
date.innerHTML = currentYear

window.addEventListener('scroll',()=> {
  const progressBar = document.getElementById('bar');
  const scrollTotal = document.body.scrollHeight - window.innerHeight;
  const scrollPosition = window.scrollY;
  const scrollPercentage = (scrollPosition / scrollTotal) * 100;
  progressBar.style.width = scrollPercentage + '%';
  });

  
if (searchInput) {
	searchInput.addEventListener('input', filterProfiles);
}
function filterProfiles() {
    const query = searchInput.value.toLowerCase();
    profiles.forEach((profile) => {
        const name = profile.querySelector('.name').textContent.toLowerCase(); 
        const skills = Array.from(profile.querySelectorAll('.skills .skill')) 
            .map(skill => skill.textContent.toLowerCase()); 
        if (name.includes(query) || skills.some(skill => skill.includes(query))) {
            profile.style.display = 'block';
        } else {
            profile.style.display = 'none'; 
        }
    });
}

const darkMode = document.querySelector(".dark-btn");
var icon=document.getElementById("icon");

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("light-background");
    if(document.body.classList.contains("light-background")){
        icon.style.filter='invert(0%)';
        icon.src="light.png";

    }else{
        icon.style.filter='invert(100%)';
        icon.src="dark.png";

    }
    darkMode.classList.toggle("icon-position")
    darkMode.classList.toggle("light-background");
    darkMode.classList.toggle("icon-color")
    document.querySelector(".title").classList.toggle("text-color");
    document.querySelector("footer").classList.toggle("text-color");
    const buttons = document.querySelectorAll('.add');
    
    buttons.forEach(button => {
    button.classList.toggle('bg-color');
    });
});
});

// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// When the user clicks the button, scroll to the top of the document
backToTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Clear any existing error messages
  const errorMessageDiv = document.getElementById('error-message');
  const form = event.target;
  errorMessageDiv.style.display = 'none';
  errorMessageDiv.textContent = '';

  // Form inputs
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate input fields
  if (!name || !email || !message) {
      showError('All fields are required.');
      return;
  }

  if (!validateEmail(email)) {
      showError('Please enter a valid email address.');
      return;
  }

  // Create a form data object to send
  const formData = new FormData(form);

  // Submit the form using fetch
  fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
          showSuccess('Message sent successfully!');
          form.reset(); // Reset the form fields after success
      } else {
          showError('Oops! Something went wrong. Please try again later.');
      }
  }).catch(error => {
      showError('There was a problem submitting the form. Please try again.');
  });
});

// Function to show error message
function showError(message) {
  const errorMessageDiv = document.getElementById('error-message');
  errorMessageDiv.textContent = message;
  errorMessageDiv.style.display = 'block';

  // Hide the error message after 5 seconds
  setTimeout(() => {
      errorMessageDiv.style.display = 'none';
  }, 5000);
}

// Function to show success message
function showSuccess(message) {
  const errorMessageDiv = document.getElementById('error-message');
  errorMessageDiv.textContent = message;
  errorMessageDiv.style.backgroundColor = '#4BB543'; // Change background to green for success
  errorMessageDiv.style.display = 'block';

  // Hide the success message after 5 seconds
  setTimeout(() => {
      errorMessageDiv.style.display = 'none';
      errorMessageDiv.style.backgroundColor = '#ff4d4d'; // Reset to default error color
  }, 5000);
}

// Function to validate email format
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
