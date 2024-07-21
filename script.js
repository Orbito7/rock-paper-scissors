let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3) + 1;

  if (rng == 1) {
    return "rock";
  } else if (rng == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = "";

  while (choice != "rock" && choice != "paper" && choice != "scissors") {
    choice = prompt("Choose Rock Paper or Scissors").toLowerCase();
  }

  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("No one wins, it was a tie, both chose " + humanChoice);
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You Win! " + humanChoice + " beats " + computerChoice + ".");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You Win! " + humanChoice + " beats " + computerChoice + ".");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    computerScore++;
  } else {
    console.log("You Win! " + humanChoice + " beats " + computerChoice + ".");
    humanScore++;
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore == computerScore) {
    console.log("Tie Game, both had a score of " + humanScore);
  } else if (humanScore < computerScore) {
    console.log("You Lose! " + computerScore + " to " + humanScore);
  } else {
    console.log("You Win! " + humanScore + " to " + computerScore);
  }
}
