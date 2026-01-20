function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors:").toLowerCase();
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}`);
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  // play 5 rounds
  for (let round = 1; round <= 5; round++) {
    console.log(`--- Round ${round} ---`);
    const humanChoice = getHumanChoice();      // must be recalled
    const computerChoice = getComputerChoice(); // must be recalled
    playRound(humanChoice, computerChoice);
  }

  // declare final winner
  console.log("--- Game Over ---");
  console.log(`Final Score — You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game is a tie!");
  }
}

// start the game
playGame();
