function setupOLEDProtection() {
  const appElement = document.querySelector('.app');
  const body = document.body;

  // Function to move the app slightly
  function moveApp() {
    if (body.classList.contains('dark-mode')) {
      const randomX = Math.random() * 10 - 5; // Random value between -5 and 5 pixels
      const randomY = Math.random() * 10 - 5; // Random value between -5 and 5 pixels
      appElement.style.transform = `translate(calc(-50% + ${randomX}px), calc(-50% + ${randomY}px))`;
    } else {
      appElement.style.transform = 'translate(-50%, -50%)'; // Reset to center in light mode
    }
  }

  // Move the app every 5 seconds (adjust interval as needed)
  setInterval(moveApp, 5000);
}

// Call the setup function when the script is loaded
setupOLEDProtection();
