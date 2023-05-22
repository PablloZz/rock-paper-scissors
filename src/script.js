game()

function game() {
    let userScore = 0;
    let computerScore = 0;
    let winner;
    let runNewRound = true;
    while (runNewRound) {
        let roundWinner = playRound();
        switch (roundWinner) {
            case "user":
                userScore++;
            break;
            case "computer":
                computerScore++;
            break;
        }
        runNewRound = userScore < 5 && computerScore < 5;
    }

    if (userScore === 5) {
        winner = "User";
    } else {
        winner = "Computer";
    }

    return winner;
}

function playRound() {
    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice();
    let winner = checkWinner(userChoice, computerChoice);
    let message = 
        winner === "user" ? `You Won! ${userChoice} beats ${computerChoice}` :
        winner === "computer" ? `You Lose! ${computerChoice} beats ${userChoice}` :
        `Draw ${userChoice} is equal ${computerChoice}`
    
    alert(message);
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
        return "Draw";
    }
}

function getUserChoice() {
    const userChoice = prompt("Rock, Paper or Scissors?", "");
    const lowerCaseChoice = userChoice.toLowerCase();
    if (
        lowerCaseChoice === "rock" ||
        lowerCaseChoice === "paper" ||
        lowerCaseChoice === "scissors"
    ) {
        return lowerCaseChoice;
    }

    alert("You need to write: rock, paper or scissors, try again!");
    getUserChoice();
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

/* 
    Write a getComputerChoice() function which makes computer's choice:
        create a randomNum variable which will contain a random number from 1 to 3,
        create a computerChoice variable which will contain a result of computer's choice,
        use condition to assign the appropriate result to computerChoice variable:
            randomNum = 1 - rock,
            randomNum = 2 - paper,
            randomNum = 3 - scissors;
        output the computerChoice value;
    write a getUserChoice() function which allows a user to take its choice:
        ask for user input and assign the result to userChoice variable,
        convert userChoice to case insensitive,
        check if user wrote one of 3 key words if it's so output the result, else alert message and try again;
    write a playRound function which runs one round of the game and output the winner:
        create a computerChoice variable to hold computer's choice,
        create a userChoice variable to hold user's choice,
        create a message variable to inform whether user win or lose,
        create a winner variable to hold winner,
        create condition which check who won and assign values to message and winner,
        show message,
        output the winner variable;
    write a game() function which runs game while one side won't get 5 scores:
        create userScore variable to hold user score,
        create computerScore variable to hold computer score,
        create variable winner,
        create variable runNewRound to iterate while it is true,
        iterate while one of those variables don't reach 5,
        assign to winner variable current winner;
    write a gameOver() function;
    write a newGame() function;
*/