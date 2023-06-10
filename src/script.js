const gameOptions = document.querySelectorAll("button");
const result = document.querySelector("#results");
const userScoreMessage = document.querySelector("#user-score");
const computerScoreMessage = document.querySelector("#computer-score");
let userScore = 0;
let computerScore = 0;

gameOptions.forEach(option => {
    option.addEventListener("click", game);
});

function game(event) {
    const userChoice = event.target.getAttribute("data-option");
    let roundWinner = playRound(userChoice);

    if (roundWinner === "user") {
        userScore++;
        userScoreMessage.textContent = `User score - ${userScore}`;
    } else {
        computerScore++;
        computerScoreMessage.textContent = `Computer score - ${computerScore}`;
    }

    if (userScore === 5) {
        alert("You won!");
    } else if (computerScore === 5) {
        alert("You lose!");
    }
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