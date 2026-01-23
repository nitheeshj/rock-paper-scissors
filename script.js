let humanScore = 0;
let computerScore = 0;

const messageDiv = document.getElementById("message");
const scoreDiv = document.getElementById("score");
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
  if (humanScore === 5 || computerScore === 5) return;

  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    messageDiv.textContent = `Tie! Both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    messageDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    messageDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5) {
    messageDiv.textContent = "🎉 You won the game!";
  } else if (computerScore === 5) {
    messageDiv.textContent = "💀 Computer won the game!";
  }
}

// event listeners
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const humanChoice = button.dataset.choice;
    playRound(humanChoice);
  });
});
