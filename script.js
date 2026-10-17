const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "Light Mode";
}

// Switch theme when the button is clicked
toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Contact form (front-end only, nothing is actually sent)
const form = document.getElementById("contact-form");
const formMsg = document.getElementById("form-msg");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  formMsg.textContent = "Thank you! Your message was received.";
  form.reset();
});