import { CHOICES_COUNT } from "./libs/constants/constants.js";
import { Choice, Winner, Score } from "./libs/enums/enums.js";

const overlay = document.querySelector("#overlay");
const userOptions = document.querySelectorAll("button.option");
const computerOptions = document.querySelectorAll("div.option");
const result = document.querySelector("h1");
const userScoreMessage = document.querySelector("#user-score");
const computerScoreMessage = document.querySelector("#computer-score");
let userScore = Score.INITIAL;
let computerScore = Score.INITIAL;

initUserOptionClick();

function game(event) {
  event.stopPropagation();
  removeChoiceClasses(userOptions);
  const { currentTarget: target } = event;
  const userChoice = target.getAttribute("data-option");
  const computerChoice = getComputerChoice();
  target.classList.add("choice");
  const roundWinner = playRound(userChoice, computerChoice);
  updateScore(roundWinner);

  if (userScore === Score.MAX) {
    result.textContent = "You won!";
    endGame();
  } else if (computerScore === Score.MAX) {
    result.textContent = "You lose!";
    endGame();
  }
}

function updateScore(roundWinner) {
  if (roundWinner === Winner.USER) {
    userScore++;
    userScoreMessage.textContent = `User score - ${userScore}`;
  } else if (roundWinner === Winner.COMPUTER) {
    computerScore++;
    computerScoreMessage.textContent = `Computer score - ${computerScore}`;
  }
}

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * CHOICES_COUNT);
  let computerChoice;

  if (randomNum === 0) {
    computerChoice = Choice.ROCK;
  } else if (randomNum === 1) {
    computerChoice = Choice.PAPER;
  } else {
    computerChoice = Choice.SCISSORS;
  }

  return computerChoice;
}

function endGame() {
  userOptions.forEach((option) => {
    option.disabled;
    option.removeEventListener("click", game);
  });
  overlay.classList.add("overlay");
  const newGameButton = document.createElement("button");
  newGameButton.textContent = "New Game";
  newGameButton.classList.add("new-game");
  newGameButton.addEventListener("click", startNewGame);
  document.body.appendChild(newGameButton);
}

function startNewGame() {
  const newGameButton = document.querySelector(".new-game");
  overlay.classList.remove("overlay");
  newGameButton.parentElement.removeChild(newGameButton);
  removeChoiceClasses(userOptions);
  removeChoiceClasses(computerOptions);
  userScore = Score.INITIAL;
  computerScore = Score.INITIAL;
  userScoreMessage.textContent = `User score - ${userScore}`;
  computerScoreMessage.textContent = `Computer score - ${computerScore}`;
  result.textContent = "Rock Paper Scissors";
  initUserOptionClick();
}

function initUserOptionClick() {
  userOptions.forEach((option) => {
    option.addEventListener("click", game);
  });
}

function removeChoiceClasses(options) {
  options.forEach((option) => option.classList.remove("choice"));
}

function playRound(userChoice, computerChoice) {
  setComputerChoiceClasses(computerChoice);
  const winner = getWinner(userChoice, computerChoice);
  const message = getWinnerMessage(winner, userChoice, computerChoice);

  result.textContent = message;
  return winner;
}

function getWinnerMessage(winner, userChoice, computerChoice) {
  return winner === Winner.USER
    ? `You Won! ${userChoice} beats ${computerChoice}`
    : winner === Winner.COMPUTER
    ? `You Lose! ${computerChoice} beats ${userChoice}`
    : `Draw ${userChoice} is equal ${computerChoice}`;
}

function setComputerChoiceClasses(computerChoice) {
  computerOptions.forEach((option) => {
    option.classList.remove("choice");

    const optionValue = option.getAttribute("data-option");
    if (optionValue === computerChoice) {
      option.classList.add("choice");
    }
  });
}

function getWinner(userChoice, computerChoice) {
  if (
    (userChoice === Choice.ROCK && computerChoice === Choice.SCISSORS) ||
    (userChoice === Choice.PAPER && computerChoice === Choice.ROCK) ||
    (userChoice === Choice.SCISSORS && computerChoice === Choice.PAPER)
  ) {
    return Winner.USER;
  } else if (
    (userChoice === Choice.ROCK && computerChoice === Choice.PAPER) ||
    (userChoice === Choice.PAPER && computerChoice === Choice.SCISSORS) ||
    (userChoice === Choice.SCISSORS && computerChoice === Choice.ROCK)
  ) {
    return Winner.COMPUTER;
  } else {
    return Winner.DRAW;
  }
}
