const gameColors = document.querySelectorAll(".colors");
const gameOverMsg = document.querySelector("#game-over-msg");
const gameRound = document.querySelector("#game-round");
const btnRed = document.querySelector(".red");
const btnGreen = document.querySelector(".green");
const btnBlue = document.querySelector(".blue");
const btnYellow = document.querySelector(".yellow");

const colors = ["red", "green", "blue", "yellow"];
let color;

// This just makes the div flash to solve the problem when the color repeats
function flashColor(btn, clsName) {
    btn.classList.add(clsName);

    setTimeout(() => {
        btn.classList.remove(clsName);
    }, 300);
}

function game() {
    color = colors[Math.floor(Math.random() * 4)];

    // Remove each class before choosing again for control
    gameColors.forEach(btn => {
        btn.classList.remove("red-choice", "green-choice", "blue-choice", "yellow-choice");
    });
    
    switch (color) {
        case "red":
            flashColor(btnRed, "red-choice");
            console.log("RED")
            break;
        
        case "green":
            flashColor(btnGreen, "green-choice");
            console.log("GREEN")
            break;
    
        case "blue":
            flashColor(btnBlue, "blue-choice");
            console.log("BLUE")
            break;
    
        case "yellow":
            flashColor(btnYellow, "yellow-choice");
            console.log("YELLOW")
            break;
    };
}

function gameLoop() {
    for (let i = 1; i < 10; i +=2) {
        // Calls the game function after a delay:
        // i = 1 - 1 * 1000
        // i = 3 - 3 * 1000
        // i = 5 - 5 * 1000
        // i = 7 - 7 * 1000
        // i = 9 - 9 * 1000
        setTimeout(game, i * 1000);    
    }

    // Reset
    gameColors.forEach(btn => {
        btn.classList.remove("red-choice", "green-choice", "blue-choice", "yellow-choice");
    });
}

gameLoop();