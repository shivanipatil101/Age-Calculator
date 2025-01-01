const instructionElement = document.getElementById('instruction');
const keyCodeElement = document.getElementById('key-code');
const keyCodeContainer = document.querySelector('.key-code');

document.addEventListener('keydown', (event) => {
  // Update the heading
  instructionElement.textContent = `You pressed ${event.key === ' ' ? 'Space' : event.key}`;
  instructionElement.style.fontSize = "2rem";

  // Add animation to the heading
  instructionElement.classList.add('animate');
  setTimeout(() => {
    instructionElement.classList.remove('animate');
  }, 300);

  // Display the key code
  keyCodeElement.textContent = event.keyCode;

  // Make the key-code box visible with animation
  keyCodeContainer.style.display = 'flex';
  keyCodeContainer.classList.add('show');
});
