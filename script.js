// Get random numbers
function getRandom() {
  return Math.random();
}

const getComputerChoice = () => {
  const randomChoice = getRandom();
  console.log("Random: ", randomChoice);
  if (randomChoice <= 0.33) {
    console.log("Rock");
  } else if (randomChoice <= 0.66) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
};

const getHumanChoice = () => {
  let humanChoice = prompt("Rock, Paper, Scissors");

  let humanChoiceValue = humanChoice.toLowerCase();

  if (humanChoiceValue === "rock") {
    console.log("Rock");
  } else if (humanChoiceValue === "paper") {
    console.log("Paper");
  } else if (humanChoiceValue === "scissors") {
    console.log("Scissors");
  } else {
    console.log(
      "Invalid choice. Please enter either 'rock', 'paper', or 'scissors'."
    );
  }
};
