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

getComputerChoice(0.44);
