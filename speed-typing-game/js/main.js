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

let startTime;
let intervalId;
let elapsedTimeMs = 0;
let currentElapsed;
let level = 1; // Need to be here since the repetion for the check "Enter" in the listener would keep reseting it to "1"
               // and its scope

let startTimer = () => {
    // Stores the time ms where it begins
    startTime = Date.now();

    clearInterval(intervalId);

    intervalId = setInterval(() => {
        // Store the "now" ms
        const now = Date.now();
        // By subtracting the start timestamp from the current timestamp, we get the real time elapsed since the timer started.
        // elapsedTimeMs stores the previously accumulated time whenever the timer stops, so when the user returns, the timer resumes instead of resetting.
        currentElapsed = elapsedTimeMs + (now - startTime);
        timeDisplay.textContent = (currentElapsed / 1000).toFixed(2);
    }, 10);
};

let stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null;

    elapsedTimeMs += Date.now() - startTime;
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopTimer();

    } else {
        startTimer();
    }
}); 

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
    if (choosenPhrases.length === phrases.length) {
        textDisplay.textContent = "Congratulations, no more phrases to write! Check your score."
        return;
    }

    let phrase =  pickAPhrase();

    while (choosenPhrases.includes(phrase)) {
        phrase =  pickAPhrase();
    }
    
    choosenPhrases.push(phrase);
    textDisplay.textContent = phrase;
};

playerInput.addEventListener("focus", (e) => {
    startTimer();
});

playerInput.addEventListener("input", (e) => {
    const input = playerInput.value;
    const target = textDisplay.textContent;

    // Doing this because when user delete all his input the placeholder doesn't stick to the color red or blue
    if (input) {
        
        if (target.startsWith(input)) {
            playerInput.style.color = "rgb(68, 255, 68)";

        }else {
            playerInput.style.color = "rgb(226, 80, 80)";
        }

    }else {
        playerInput.style.color = "#fff";
    }
});

playerInput.addEventListener("keydown", (e) => {
    const input = playerInput.value;
    const target = textDisplay.textContent;

    // Checks is is player input lenght is valid forcing it to complete the phrase
    if (input === target && e.key === "Enter") {
        saveTimers(currentElapsed, level)
        level++;
        // Clear timer
        clearInterval(intervalId);
        elapsedTimeMs = 0;
        timeDisplay.textContent = "0.00";

        
        playerInput.value = "";
        playerInput.style.color = "#fff";
        displayText();
        startTimer();
        
    }
});

function saveTimers(timer, level) {
    let p = document.createElement("p");
    p.classList.add("time-score");
    
    p.textContent = `Level ${level}: ${timer} seconds`;

    timeScores.appendChild(p);
}