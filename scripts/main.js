// Set initial values for the pet status
let petName = "Chad";
let hungerLevel = 50;
let mood = "Sad";

// Get DOM elements for the pet's status
const petNameEl = document.querySelector("pet-name");
const hungerEl = document.querySelector("hunger-level");
const moodEl = document.querySelector("mood");

//Get DOM elements for the action buttons
const feedButton = document.querySelector("#feed-button");
const playButton = document.querySelector("#play-button");

function feedPet() {
  if (hungerLevel < 100) {
    hungerLevel += 10;
    hungerEl.innerText = hungerLevel + "%";
    mood = "Sad";
    moodEl.innerText = mood;
  } else {
    hungerLevel = 0;
    hungerEl.innerText = 0 + "%";
    mood = "Happy";
    moodEl.innerText = mood;
  }
}

feedButton.addEventListener("click", feedPet);
