const gameColors = document.querySelectorAll(".colors");
const gameOverMsg = document.querySelector("#game-over-msg");
const btnStart = document.querySelector("#start-btn");
const gameRound = document.querySelector("#game-round");
const btnRed = document.querySelector(".red");
const btnGreen = document.querySelector(".green");
const btnBlue = document.querySelector(".blue");
const btnYellow = document.querySelector(".yellow");

let roundIndex = 0;
let gameOver = false;

const colors = ["red", "green", "blue", "yellow"];

let userTurn = false;

// computerChoices is the sequence to be follow by the user and the userChoice is the index that show success or error
let userChoices = 0;
const computerChoices = [];

// This just makes the div flash to solve the problem when the color repeats
function flashColor(btn, clsName) {
    btn.classList.add(clsName);

    setTimeout(() => {
        btn.classList.remove(clsName);
    }, 300);
}

function getButtonByColor(color) {
    switch (color) {
        case "red": return btnRed;
        case "green": return btnGreen;
        case "blue": return btnBlue;
        case "yellow": return btnYellow;
    }
}

function playTurn(i = 0) {
    if (gameOver) return;   

    if (i >= computerChoices.length) {
        userTurn = true;
        userChoices = 0;
        return;
    }

    const color = computerChoices[i];
    const btn = getButtonByColor(color)

    //  'red(color)-choice'
    flashColor(btn, color + "-choice");

    setTimeout(() => {
        if (gameOver) return;
        playTurn(i + 1); // call the next turn/color
    }, 600);
}

// Adds a new color since the idea is the computer to be the one in control
function addColor() {
    if (computerChoices.length === 3) {
        gameOver = true;
        return;
    } else {
        computerChoices.push(colors[Math.floor(Math.random() * 4)]);
    }
}

// User turn and when it interacts
function userClick(e) {
    if (gameOver) return;

    // Ignore user clicks while the game shows the colors
    if (!userTurn) {
        return;
    }

    const clicked = e.target.id;

    if (clicked !== computerChoices[userChoices]) {
        gameOverMsg.classList.remove("invisible");
        gameOverMsg.classList.add("game-lost");
        gameOverMsg.textContent = "Wrong color - GAME OVER!";
        gameOver = true;
        return;
    }

    userChoices++;

    if (userChoices === computerChoices.length) {
        if (computerChoices.length === 3) {
            gameOverMsg.classList.remove("invisible");
            gameOverMsg.classList.add("game-win");
            gameOverMsg.textContent = "YOU MADE IT! U WON!";
            gameOver = true;
            return
        }
        userTurn = false;

        if (gameOver) {
            return;
        };
        
        setTimeout(startRound, 1000);
    }
}

function startRound() {
    if (gameOver) return;
    roundIndex++;

    gameRound.textContent = `ROUND ${roundIndex}`
    gameRound.classList.remove("invisible");
    addColor();
    playTurn();
}

gameColors.forEach(clrBtn => {
    clrBtn.addEventListener("click", userClick);

});

btnStart.addEventListener("click", () => {
    btnStart.classList.add("invisible");
    setTimeout(startRound, 1000);

});