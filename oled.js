function setupOLEDProtection() {
  const appElement = document.querySelector('.app');
  const body = document.body;

  // Function to move the app slightly
  function moveApp() {
    if (body.classList.contains('dark-mode')) {
      const randomX = Math.random() * 6 - 3; // Random value between -3 and 3 pixels
      const randomY = Math.random() * 6 - 3; // Random value between -3 and 3 pixels
      appElement.style.transform = `translate(calc(-50% + ${randomX}px), calc(-50% + ${randomY}px))`;
    } else {
      appElement.style.transform = 'translate(-50%, -50%)'; // Reset to center in light mode
    }
  }

  // Move the app every 5 seconds (adjust interval as needed)
  setInterval(moveApp, 300000);
}

// Call the setup function when the script is loaded
setupOLEDProtection();
