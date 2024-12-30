const toggleButton = document.getElementById("toggleButton");
const buttonImage = document.getElementById("buttonImage");
const buttonText = document.getElementById("buttonText");

toggleButton.addEventListener("click", () => {
  const body = document.body;
  const isDarkMode = body.classList.toggle("dark-mode");

  // Update button text and image
  if (isDarkMode) {
    buttonImage.src = "darkmode.png";
    buttonImage.alt = "Dark Mode Icon";
    buttonText.textContent = "Switch to Light Mode";
  } else {
    buttonImage.src = "lightmode.png";
    buttonImage.alt = "Light Mode Icon";
    buttonText.textContent = "Switch to Dark Mode";
  }

  // Add animation to the button image
  buttonImage.style.transform = "scale(1.3)";
  buttonImage.style.opacity = "0.8";
  setTimeout(() => {
    buttonImage.style.transform = "scale(1)";
    buttonImage.style.opacity = "1";
  }, 300); // Matches the CSS transition duration
});
