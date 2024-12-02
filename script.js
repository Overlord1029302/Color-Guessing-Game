// Function to generate a random hex color
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  // Initialize game variables
  let correctColor = getRandomHexColor();
  
  // Display the random color in the color box
  const colorBox = document.getElementById('color-box');
  colorBox.style.backgroundColor = correctColor;
  
  // Event listener for the "Guess" button
  document.getElementById('guess-btn').addEventListener('click', () => {
    const userGuess = document.getElementById('hex-input').value.trim().toLowerCase();
    const resultMessage = document.getElementById('result-message');
  
    if (userGuess === correctColor) {
      resultMessage.textContent = 'Correct! 🎉';
      resultMessage.style.color = 'green';
      document.getElementById('new-game-btn').style.display = 'inline-block';
    } else {
      resultMessage.textContent = 'Incorrect, try again!';
      resultMessage.style.color = 'red';
    }
  });
  
  // Event listener for the "New Game" button
  document.getElementById('new-game-btn').addEventListener('click', () => {
    correctColor = getRandomHexColor();
    colorBox.style.backgroundColor = correctColor;
    document.getElementById('hex-input').value = '';
    document.getElementById('result-message').textContent = '';
    document.getElementById('new-game-btn').style.display = 'none';
  });
  const hexInput = document.getElementById('hex-input');

// Ensure # is always present at the start of the input
hexInput.addEventListener('input', () => {
  if (!hexInput.value.startsWith('#')) {
    hexInput.value = `#${hexInput.value.replace(/#/g, '')}`; // Remove extra # symbols if typed
  }
  if (hexInput.value.length > 7) {
    hexInput.value = hexInput.value.slice(0, 7); // Limit input length to valid hex code
  }
});
  