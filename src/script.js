const userOptions = document.querySelectorAll(".user-option");
const computerOptions = document.querySelectorAll("button[class^='computer'");
const result = document.querySelector("h1");
const userScoreMessage = document.querySelector("#user-score");
const computerScoreMessage = document.querySelector("#computer-score");
let userScore = 0;
let computerScore = 0;

userOptions.forEach(option => {
    option.addEventListener("click", game);
});

function game(event) {
    event.stopPropagation();
    userOptions.forEach(option => option.style.background = "");
    const userChoice = event.currentTarget.getAttribute("data-option");
    event.currentTarget.style.background = "#999";
    let roundWinner = playRound(userChoice);

    if (roundWinner === "user") {
        userScore++;
        userScoreMessage.textContent = `User score - ${userScore}`;
    } else if (roundWinner === "computer") {
        computerScore++;
        computerScoreMessage.textContent = `Computer score - ${computerScore}`;
    }

    if (userScore === 5) {
        result.textContent = "You won!";
        endGame();
    } else if (computerScore === 5) {
        result.textContent = "You lose!";
        endGame();
    }
}

function endGame() {
    userOptions.forEach(option => {
        option.disabled;
        option.removeEventListener("click", game);
    });
    const overlay = document.querySelector("#overlay");
    overlay.classList.add("overlay");
    const newGameButton = document.createElement("button");
    document.body.appendChild(newGameButton);
    newGameButton.textContent = "New Game";
    newGameButton.classList.add("new-game");
    newGameButton.addEventListener("click", startNewGame);
}

function startNewGame() {
    const overlay = document.querySelector("#overlay");
    const newGameButton = document.querySelector(".new-game");
    overlay.classList.remove("overlay");
    newGameButton.parentElement.removeChild(newGameButton);
    userOptions.forEach(option => option.style.background = "");
    computerOptions.forEach(option => option.style.background = "");
    userScore = 0;
    computerScore = 0;
    userScoreMessage.textContent = `User score - ${userScore}`;
    computerScoreMessage.textContent = `Computer score - ${computerScore}`;
    result.textContent = "Rock Paper Scissors";
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    computerOptions.forEach(option => {
        option.style.background = "";

        if (option.classList[0].split("-")[1] === computerChoice) {
            option.style.background = "#999";
        }
    });

    let winner = checkWinner(userChoice, computerChoice);
    let message = 
        winner === "user" ? `You Won! ${userChoice} beats ${computerChoice}` :
        winner === "computer" ? `You Lose! ${computerChoice} beats ${userChoice}` :
        `Draw ${userChoice} is equal ${computerChoice}`
    
    result.textContent = message;
    return winner;
}

function checkWinner(userChoice, computerChoice) {
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")   
    ) {
        return "user";
    } else if (
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")
    ) {
        return "computer";
    } else {
        return "draw";
    }
}

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    if (randomNum === 1) {
        computerChoice = "rock";
    } else if (randomNum === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}