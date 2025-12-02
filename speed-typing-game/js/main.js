const startBtn = document.querySelector("#game-start-btn");
const textDisplay = document.querySelector("#text-display");
const timeDisplay = document.querySelector("#time-display");
const playerInput = document.querySelector("#player-input");
const timeScores = document.querySelector("#time-scores");

startBtn.addEventListener("click", (e) => {
    // Make the game ui appear
    textDisplay.classList.remove("invisible");
    timeDisplay.classList.remove("invisible");
    playerInput.classList.remove("invisible");
    timeScores.classList.remove("invisible");

    // Make the button disappear
    startBtn.classList.add("invisible");
});
