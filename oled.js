function setupOLEDProtection() {
  var appElement = document.querySelector('.app');
  var body = document.body;

  if (!appElement || !body) {
    if (typeof console_log_on_screen === 'function') {
        console_log_on_screen("OLED: .app or body not found.");
    }
    return;
  }

  function moveApp() {
    try {
        var isDarkMode = false;
        if (body.classList && typeof body.classList.contains === 'function') {
            isDarkMode = body.classList.contains('dark-mode');
        } else if (body.className) { 
            isDarkMode = (' ' + body.className + ' ').indexOf(' dark-mode ') > -1;
        }

        var currentRotation = "0"; 
        if (typeof config !== 'undefined' && config.rotate) {
            currentRotation = String(config.rotate);
        }

        var transformToSet;
        if (isDarkMode) {
          var randomX = Math.random() * 6 - 3; 
          var randomY = Math.random() * 6 - 3; 
          
          // IMPORTANT: Kindle might not support CSS calc().
          // If calc() is an issue, this pixel offset won't work well with percentage centering.
          // A simpler approach might be to slightly alter margin or padding if calc fails.
          // For now, attempting with calc().
          var newTranslateX = "calc(-50% + " + randomX + "px)";
          var newTranslateY = "calc(-50% + " + randomY + "px)";
          
          transformToSet = "translate(" + newTranslateX + ", " + newTranslateY + ") rotate(" + currentRotation + "deg)";
        } else {
          // Reset to center in light mode, still applying rotation
          transformToSet = "translate(-50%, -50%) rotate(" + currentRotation + "deg)";
        }
        
        appElement.style.webkitTransform = transformToSet;
        appElement.style.transform = transformToSet;

    } catch(e) {
        if (typeof console_log_on_screen === 'function') {
            console_log_on_screen("Error in moveApp: " + e.message);
        }
    }
  }

  setInterval(moveApp, 300000); 
  if (typeof console_log_on_screen === 'function') {
    console_log_on_screen("OLED protection moveApp interval started.");
  } else {
      // alert("OLED Protection Active (no advanced log)"); // Basic feedback
  }
}
// setupOLEDProtection is now called from index.min.js after config is ready.
