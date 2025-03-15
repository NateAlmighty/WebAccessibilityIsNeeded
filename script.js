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

// Function to speak content using the SpeechSynthesis API
function speakContent(type) {
  // Check if the SpeechSynthesis API is supported
  if (!("speechSynthesis" in window)) {
    // Show the fallback message
    const fallbackMessage = document.getElementById("fallback-message");
    fallbackMessage.classList.remove("hidden");
    return;
  }

  // Get the content based on the type (accessible or inaccessible)
  let content;
  if (type === "accessible") {
    content = `
      Entering header. Website Header. Exiting header.
      Entering main content. This is the main content area. Exiting main content.
      Entering footer. Website Footer. Exiting footer.
    `;
  } else if (type === "inaccessible") {
    content = `
      Website Header. This is the main content area. Website Footer.
    `;
  }

  // Use the SpeechSynthesis API to read the content aloud
  const utterance = new SpeechSynthesisUtterance(content);
  speechSynthesis.speak(utterance);
}
