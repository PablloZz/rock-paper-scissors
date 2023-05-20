/* 
    Write a getComputerChoice() function which makes computer's choice:
        create a randomNum variable which will contain a random number from 1 to 3,
        create a computerChoice variable which will contain a result of computer's choice,
        use condition to assign the appropriate result to computerChoice variable:
            randomNum = 1 - rock,
            randomNum = 2 - paper,
            randomNum = 3 - scissors;
        output the computerChoice value;
    write a getPersonChoice() function which allows a person to take its choice;
    write a compareResults() function which check the who win and give its result;
    write a countScore() function which count the score and set game over;
    write a gameOver() function;
    write a newGame() function;
*/
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    if (randomNum === 1) {
        computerChoice = "Rock";
    } else if (randomNum === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    console.log(computerChoice);
}

getComputerChoice()