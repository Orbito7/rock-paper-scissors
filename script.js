let computerScore = 0;
let humanScore = 0;
let roundNumber = 0;

function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3) + 1;

  if (rng == 1) {
    return "fire";
  } else if (rng == 2) {
    return "water";
  } else {
    return "grass";
  }
}

function playRound(humanChoice, computerChoice) {
  roundNumber++;
  if (humanChoice == computerChoice) {
    rounds.textContent = "Current Round: No one wins, it was a tie, both chose " + humanChoice;
  } else if (
    (humanChoice == "fire" && computerChoice == "grass") ||
    (humanChoice == "water" && computerChoice == "fire") ||
    (humanChoice == "grass" && computerChoice == "water")
  ) {
    rounds.textContent = "Current Round: You Win! " + humanChoice + " beats " + computerChoice;
    humanScore++;
  } else {
    rounds.textContent =
      "Current Round: You lose! " + computerChoice + " beats " + humanChoice;
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
    fireButton.classList.add("disabled");
    waterButton.classList.add("disabled");
    grassButton.classList.add("disabled");

    let resetButton = document.createElement("button");
    resetButton.textContent = "Play Again";
    resetButton.classList.add("reset-button");
    
    let resetButtonContainer = document.createElement("div");
    resetButtonContainer.classList.add("reset-button-container");
    
    resetButtonContainer.append(resetButton);
    gameContainer.append(resetButtonContainer);

    resetButton.addEventListener("click", () => {
      results.textContent = "";
      rounds.textContent = "";
      roundNumber = 0;
      computerScore = 0;
      humanScore = 0;
      fireButton.classList.remove("disabled");
      waterButton.classList.remove("disabled");
      grassButton.classList.remove("disabled");
      gameContainer.removeChild(resetButtonContainer);
    });

    if (humanScore == computerScore) {
      results.textContent = "Tie Game, both had a score of " + humanScore;
    } else if (humanScore < computerScore) {
      results.textContent = "Final Score: You Lose! " + computerScore + " to " + humanScore;
    } else {
      results.textContent = "Final Score: You Win! " + humanScore + " to " + computerScore;
    }
  }
}
let buttonContainer = document.querySelector("#buttonContainer");
buttonContainer.classList.add("button-container")

let fireButton = document.createElement("img");
let waterButton = document.createElement("img");
let grassButton = document.createElement("img");

fireButton.src = "images/fire.png";
waterButton.src = "images/water.png";
grassButton.src = "images/grass.png";

fireButton.classList.add("image-button");
waterButton.classList.add("image-button");
grassButton.classList.add("image-button");

buttonContainer.appendChild(fireButton);
buttonContainer.appendChild(waterButton);
buttonContainer.appendChild(grassButton);

gameContainer.append(buttonContainer);

fireButton.textContent = "Fire";
waterButton.textContent = "Water";
grassButton.textContent = "Grass";

let children = buttonContainer.children;

for (let i = 0; i < children.length; i++) {
  let currentButton = children[i];
  let choice = currentButton.textContent.toLowerCase();

  currentButton.addEventListener("click", function () {
    playGame(choice);
  });
}

let results = document.createElement("div");
results.classList.add("results");
let rounds = document.createElement("div");
rounds.classList.add("rounds");
let resultsContainer = document.createElement("div");
resultsContainer.classList.add("results-container");

resultsContainer.append(rounds);
resultsContainer.append(results);

gameContainer.append(resultsContainer);
