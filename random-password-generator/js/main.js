const btns = document.querySelectorAll("#btns");

const explanationDiv = document.querySelector(".btn-explanation");
const generatePassBtn = document.querySelector(".generate-pass");
const passwordInput = document.querySelector("#password");

let chosenLevel = "";
const passwordLevels = {
    "simple": {
        "description": "A simple password is has a lenght of 8 lowercase and uppercase letters",
        "letters": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    },
    "moderate": {
        "description": "A moderate password has a length of 12 characters and includes a mix of lowercase and uppercase letters, numbers, and at least one symbol",
        "letters": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "numbers": "0123456789",
        "symbols": "!@#$%^&*()_+-",
    },
    "strong": {
        "description": "A strong password is 18 characters long and includes a mix of lowercase and uppercase letters, numbers, and multiple symbols, avoiding common words or predictable patterns",
        "letters": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "numbers": "0123456789",
        "symbols": "!@#$%^&*()_+-",
    },
    
};

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        
        explanationDiv.classList.remove("disable");
        generatePassBtn.classList.remove("disable");
        explanationDiv.innerHTML = "";

        const explanationTitle = document.createElement("h3");
        const description = document.createElement("p");
        
        explanationTitle.textContent = e.target.textContent;
        description.classList.add("description");

        for (const [passwordLevel, passwordOptions] of Object.entries(passwordLevels)) {

            if (passwordLevel === e.target.textContent.toLowerCase()) {
                description.textContent = passwordOptions["description"];
                chosenLevel = passwordLevel;
            }
        
        }
        
        explanationDiv.appendChild(explanationTitle);
        explanationDiv.appendChild(description);
    });
});

generatePassBtn.addEventListener("click", () => {
    let generatedPass = "";
    for (const [passwordLevel, passwordOptions] of Object.entries(passwordLevels)) {

        if (chosenLevel === "simple") {
            generatedPass = "";
            const passEnconde = passwordOptions["letters"];
            generatedPass = randomPassword(passEnconde, 8);
            passwordInput.textContent = generatedPass;

        } else if (chosenLevel === "moderate") {
            generatedPass = "";
            const passEnconde = passwordOptions["letters"] + passwordOptions["numbers"] + passwordOptions["symbols"];
            generatedPass += randomPassword(passEnconde, 12);
            passwordInput.textContent = generatedPass;

        } else if (chosenLevel === "strong") {
            generatedPass = "";
            const passEnconde = passwordOptions["letters"] + passwordOptions["numbers"] + passwordOptions["symbols"];
            generatedPass += randomPassword(passEnconde, 18);
            passwordInput.textContent = generatedPass;
    }
}});

function randomPassword(characters, size) {
    let result = "";

    for (let i = 0; i < size; i++) {

        const randIndex = Math.floor(Math.random() * characters.length);
        const randLetter = characters[randIndex];
        result += randLetter;
    }

    return result;
}