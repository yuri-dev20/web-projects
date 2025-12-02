const startBtn = document.querySelector("#game-start-btn");
const textDisplay = document.querySelector("#text-display");
const timeDisplay = document.querySelector("#time-display");
const playerInput = document.querySelector("#player-input");
const timeScores = document.querySelector("#time-scores");

const phrases = [
    "The curious cat jumped gracefully across the fence during early morning",
    "She discovered hidden treasures while exploring the forest with her friends",
    "They carefully planned every detail before launching the ambitious new project",
    "Our team worked tirelessly to achieve success despite many unexpected obstacles",
    "He wrote beautiful songs inspired by memories from his adventurous childhood",
]

const choosenPhrases = [];

startBtn.addEventListener("click", (e) => {
    // Make the game ui appear
    textDisplay.classList.remove("invisible");
    timeDisplay.classList.remove("invisible");
    playerInput.classList.remove("invisible");
    timeScores.classList.remove("invisible");

    // Make the button disappear
    startBtn.classList.add("invisible");

    displayText();
});

let pickAPhrase = () => phrases[Math.floor(Math.random() * phrases.length)];
let displayText = () => {
    let phrase =  pickAPhrase();

    while (choosenPhrases.includes(phrase)) {
        phrase =  pickAPhrase();
    }

    choosenPhrases.push(phrase);
    textDisplay.textContent = phrase;
};

playerInput.addEventListener("input", (e) => {
    const input = playerInput.value;
    const target = textDisplay.textContent;

    // Doing this because when user delete all his input the placeholder doesn't stick to the color red or blue
    if (input) {
        
        if (target.startsWith(input)) {
            playerInput.style.color = "rgb(68, 255, 68)";
        } else {
            playerInput.style.color = "rgb(226, 80, 80)";
        }

    } else {
        playerInput.style.color = "#fff";
    }
});

