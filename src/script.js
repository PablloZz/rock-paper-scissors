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
    write a compareResults() function which check the who win and give its result;
    write a countScore() function which count the score and set game over;
    write a gameOver() function;
    write a newGame() function;
*/
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

function getUserChoice() {
    const userChoice = prompt("Rock, Paper or Scissors?", "");
    const lowerCaseChoice = userChoice.toLowerCase();
    if (
        lowerCaseChoice === "rock" ||
        lowerCaseChoice === "paper" ||
        lowerCaseChoice === "scissors"
    ) {
        console.log(lowerCaseChoice);
        return lowerCaseChoice;
    }

    alert("You need to write: rock, paper or scissors, try again!");
    getUserChoice();
}

getUserChoice();