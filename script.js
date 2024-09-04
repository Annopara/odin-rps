// Declare player score variables
let humanScore = 0;
let computerScore = 0;

// Get random numbers
function getRandom() {
  return Math.random();
}

// Logic to get Computer Choice
const getComputerChoice = () => {
  const randomChoice = getRandom();
  // console.log("Random: ", randomChoice);
  if (randomChoice <= 0.33) {
    console.log("Rock");
    return "rock";
  } else if (randomChoice <= 0.66) {
    console.log("Paper");
    return "paper";
  } else if (randomChoice <= 0.99) {
    console.log("Scissors");
    return "scissors";
  }
};

// Logic to get Human Choice
const getHumanChoice = () => {
  let humanChoice = prompt("Rock, Paper, Scissors");

  let humanChoiceValue = humanChoice.toLowerCase();

  if (humanChoiceValue === "rock") {
    console.log("Rock");
    return "rock";
  } else if (humanChoiceValue === "paper") {
    console.log("Paper");
    return "paper";
  } else if (humanChoiceValue === "scissors") {
    console.log("Scissors");
    return "scissors";
  } else {
    console.log(
      "Invalid choice. Please enter either 'rock', 'paper', or 'scissors'."
    );
  }
};

// Play one Round of the game
const playRound = (humanPlayer, computerPlayer) => {
  if (computerPlayer === humanPlayer) {
    console.log("It's a tie!!!");
  } else if (
    (computerPlayer === "rock" && humanPlayer === "scissors") ||
    (computerPlayer === "paper" && humanPlayer === "rock") ||
    (computerPlayer === "scissors" && humanPlayer === "paper")
  ) {
    computerScore++;
    console.log(`You lose!`);
  } else {
    humanScore++;
    console.log("You win!");
  }
};

//
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const result = playRound(humanSelection, computerSelection);
