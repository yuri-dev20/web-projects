const btns = document.querySelectorAll("#btns");

const explanationDiv = document.querySelector(".btn-explanation");
const passwordInput = document.querySelector("#password");

const passwordLevels = {
    "simple": {
        "description": "A simple password is short lenght with 8 lowercase and uppercase letters",
        "letters": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    },
    "moderate": {
        "description": "A moderate password is of moderate length 9 to 12 characters and includes a mix of lowercase and uppercase letters, numbers, and at least one symbol",
        "letters": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "numbers": "0123456789",
        "symbols": "!@#$%^&*()_+-",
    },
    "strong": {
        "description": "A strong password is long 13 to 20 characters and includes a mix of lowercase and uppercase letters, numbers, and multiple symbols, avoiding common words or predictable patterns",
        "letters": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "numbers": "0123456789",
        "symbols": "!@#$%^&*()_+-",
    },
    
};

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        
        explanationDiv.classList.remove("disable");
        explanationDiv.innerHTML = "";

        const explanationTitle = document.createElement("h3");
        const description = document.createElement("p");
        
        explanationTitle.textContent = e.target.textContent;
        description.classList.add("description");

        for (const [passwordLevel, passwordOptions] of Object.entries(passwordLevels)) {

            if (passwordLevel === e.target.textContent.toLowerCase()) {
                description.textContent = passwordOptions["description"];
            }
        
        }
        
        explanationDiv.appendChild(explanationTitle);
        explanationDiv.appendChild(description);
    });
});