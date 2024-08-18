let computerScore = 0;
let humanScore = 0;
let roundNumber = 0;

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
  roundNumber++;
  if (humanChoice == computerChoice) {
    rounds.textContent +=
      "No one wins, it was a tie, both chose " + humanChoice + ".\n";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    rounds.textContent +=
      "You Win! " + humanChoice + " beats " + computerChoice + ".\n";
    humanScore++;
  } else {
    rounds.textContent +=
      "You lose! " + computerChoice + " beats " + humanChoice + ".\n";
    computerScore++;
  }
}

function playGame(choice) {
  const humanSelection = choice;
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  if (roundNumber < 5) {
    results.textContent =
      "Current Score: " + humanScore + " to " + computerScore;
  } else {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    let resetButton = document.createElement("button");
    resetButton.textContent = "Play Again";
    gameContainer.append(resetButton);
    resetButton.addEventListener("click", () => {
      results.textContent = "";
      rounds.textContent = "";
      roundNumber = 0;
      computerScore = 0;
      humanScore = 0;
      rockButton.disabled = false;
      paperButton.disabled = false;
      scissorsButton.disabled = false;
      gameContainer.removeChild(resetButton);
    });

    if (humanScore == computerScore) {
      results.textContent = "Tie Game, both had a score of " + humanScore;
    } else if (humanScore < computerScore) {
      results.textContent = "You Lose! " + computerScore + " to " + humanScore;
    } else {
      results.textContent = "You Win! " + humanScore + " to " + computerScore;
    }
  }
}
let buttonContainer = document.querySelector("#buttonContainer");

let rockButton = document.createElement("button");
let paperButton = document.createElement("button");
let scissorsButton = document.createElement("button");

buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);

gameContainer.append(buttonContainer);

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

let children = buttonContainer.children;

for (let i = 0; i < children.length; i++) {
  let currentButton = children[i];
  let choice = currentButton.textContent.toLowerCase();

  currentButton.addEventListener("click", function () {
    playGame(choice);
  });
}

let results = document.createElement("div");
let rounds = document.createElement("div");
rounds.style.whiteSpace = "pre-line";

gameContainer.append(rounds);
gameContainer.append(results);
