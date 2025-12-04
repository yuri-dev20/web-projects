const gameColors = document.querySelectorAll(".colors");
const gameOverMsg = document.querySelector("#game-over-msg");
const gameRound = document.querySelector("#game-round");
const btnRed = document.querySelector(".red");
const btnGreen = document.querySelector(".green");
const btnBlue = document.querySelector(".blue");
const btnYellow = document.querySelector(".yellow");

const colors = ["red", "green", "blue", "yellow"];
let color;

function game() {
    color = colors[Math.floor(Math.random() * 4)];
    
    switch (color) {
        case "red":
            btnRed.id = "red-choice";
            console.log("RED");
            break;
        
        case "green":
            btnGreen.id = "green-choice";
            console.log("GREEN");
            break;
    
        case "blue":
            btnBlue.id = "blue-choice";
            console.log("BLUE");
            break;
    
        case "yellow":
            btnYellow.id = "yellow-choice";
            console.log("YELLOW");
            break;
    };
}

game();

// console.log(gameColors);
// console.log(gameOverMsg);
// console.log(gameRound);
// console.log(btnRed);
// console.log(btnGreen);
// console.log(btnBlue);
// console.log(btnYellow);