/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
console.log("Accessibility Portfolio Loaded");

// ----- Accessibility Features -----

// Colorblind Toggle Logic
const colorblindToggle = document.getElementById("colorblind-toggle");
const modes = ["normal", "protanopia-view", "deuteranopia-view", "tritanopia-view"];
let currentModeIndex = 0;

if (colorblindToggle) {
  colorblindToggle.onclick = function () {
    // Remove the current mode
    document.body.classList.remove(modes[currentModeIndex]);

    // Move to the next mode
    currentModeIndex = (currentModeIndex + 1) % modes.length;

    // Apply the new mode
    if (modes[currentModeIndex] !== "normal") {
      document.body.classList.add(modes[currentModeIndex]);
    }

    // Update the button text and state
    const isColorblind = modes[currentModeIndex] !== "normal";
    colorblindToggle.setAttribute("aria-pressed", isColorblind);
    colorblindToggle.textContent = isColorblind
      ? `Toggle ${modes[currentModeIndex].replace("-view", "")} View`
      : "Toggle Normal View";
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

// Pointer Cancellation Example
function cancelableAction() {
  alert("Action triggered!");
}

// Extend Time for Time Limits
function extendTime() {
  alert("Time extended by 5 minutes.");
}

// Toggle Animation Visibility
function toggleAnimation() {
  const box = document.getElementById("animated-box");
  if (box.style.animation) {
    box.style.animation = "";
  } else {
    box.style.animation = "bounce 2s infinite";
  }
}

// Update Slider Value Dynamically
function updateSliderValue(value) {
  document.getElementById("slider-value").textContent = value;
}
