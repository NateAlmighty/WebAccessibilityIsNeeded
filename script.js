/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads

// ----- Accessibility Features -----

// Screen Reader Demo
const screenReaderDemoButton = document.getElementById(
  "screen-reader-demo-button"
);
if (screenReaderDemoButton) {
  screenReaderDemoButton.onclick = function () {
    // Replace this with the path to your screen reader demo audio file
    const audio = new Audio("https://cdn.glitch.com/your-audio-file.mp3");
    audio.play();
    alert(
      "Playing screen reader demo. Listen to how a screen reader interacts with this page."
    );
  };
}

// Colorblind Toggle
const colorblindToggle = document.getElementById("colorblind-toggle");
if (colorblindToggle) {
  colorblindToggle.onclick = function () {
    const isColorblind = document.body.classList.toggle("colorblind-view");
    colorblindToggle.setAttribute("aria-pressed", isColorblind);
    colorblindToggle.textContent = isColorblind
      ? "Toggle Normal View"
      : "Toggle Colorblind View";
  };
}

// Keyboard Navigation Demo
const keyboardDemoButtons = document.querySelectorAll(".keyboard-demo button");
keyboardDemoButtons.forEach((button) => {
  button.addEventListener("focus", () => {
    button.style.outline = "3px solid var(--color-text-header)";
    button.style.outlineOffset = "2px";
  });
  button.addEventListener("blur", () => {
    button.style.outline = "none";
  });
});
