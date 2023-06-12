const gameOptions = document.querySelectorAll("button");
const result = document.querySelector("h1");
const userScoreMessage = document.querySelector("#user-score");
const computerScoreMessage = document.querySelector("#computer-score");
let userScore = 0;
let computerScore = 0;

gameOptions.forEach(option => {
    option.addEventListener("click", game);
});

function game(event) {
    event.stopPropagation();
    gameOptions.forEach(option => option.style.background = "");
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
    gameOptions.forEach(option => {
        option.disabled;
        option.removeEventListener("click", game);
    });
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
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