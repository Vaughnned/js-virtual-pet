// Set initial values for the pet status
let petName = "Chad";
let hungerLevel = 50;
let mood = "Sad";

// Get DOM elements for the pet's status
const petNameEl = document.querySelector("#pet-name");
const hungerEl = document.querySelector("#hunger-level");
const moodEl = document.querySelector("#mood");

//Get DOM elements for the action buttons
const feedButton = document.querySelector("#feed-button");
const playButton = document.querySelector("#play-button");

function playPet() {
  hungerLevel -= 10;
  if (hungerLevel > 40) {
    hungerEl.innerText = hungerLevel + "%";
    mood = "Happy";
    moodEl.innerText = mood;
  } else if (hungerLevel <= 40 && hungerLevel > 10) {
    hungerEl.innerText = hungerLevel + "%";
    mood = "Hangry";
    moodEl.innerText = mood;
  } else if (hungerLevel <= 10 && hungerLevel >= 0) {
    hungerEl.innerText = hungerLevel + "%";
    mood = "Starving";
    moodEl.innerText = mood;
  }
}

function feedPet() {
  hungerLevel += 10;
  if (hungerLevel <= 10 && hungerLevel >= 0) {
    hungerEl.innerText = hungerLevel + "%";
    mood = "Starving";
    moodEl.innerText = mood;
  } else if (hungerLevel > 10 && hungerLevel <= 40) {
    hungerEl.innerText = hungerLevel + "%";
    mood = "Hangry";
    moodEl.innerText = mood;
  } else if (hungerLevel <= 100 && hungerLevel > 40) {
    hungerEl.innerText = hungerLevel + "%";
    mood = "Happy";
    moodEl.innerText = mood;
  }
}

feedButton.addEventListener("click", feedPet);
playButton.addEventListener("click", playPet);
