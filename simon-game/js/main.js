const gameColors = document.querySelectorAll(".colors");
const gameOverMsg = document.querySelector("#game-over-msg");
const gameRound = document.querySelector("#game-round");
const btnRed = document.querySelector(".red");
const btnGreen = document.querySelector(".green");
const btnBlue = document.querySelector(".blue");
const btnYellow = document.querySelector(".yellow");

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
        playTurn(i + 1); // call the next turn/color
    }, 600);
}

// Adds a new color since the idea is the computer to be the one in control
function addColor() {
    computerChoices.push(colors[Math.floor(Math.random() * 4)]);
}

// User turn and when it interacts
function userClick(e) {
    // Ignore user clicks while the game shows the colors
    if (!userTurn) {
        return;
    }

    const clicked = e.target.id;

    if (clicked !== computerChoices[userChoices]) {
        console.log("Wrong color - GAME OVER!");
        playTurn = false;
        return;
    }

    userChoices++;

    if (userChoices === computerChoices.length) {
        console.log("YOU MADE IT - NEXT ROUND!");
        userTurn = false;

        setTimeout(startRound, 1000);
    }
}

function startRound() {
    addColor();
    playTurn();
}

gameColors.forEach(clrBtn => {
    clrBtn.addEventListener("click", userClick);
});

startRound();