console.log("Lets Play");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice;
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 0) {
    choice = "Rock";
  } else if (computerChoice == 1) {
    choice = "Paper";
  } else if (computerChoice == 2) {
    choice = "Scissors";
  }
  return choice.toLowerCase();
}

function getUserChoice() {
  let userChoice = prompt("Select Your Choice");
  return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a Draw!");
  } else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("Computer wins!");
      computerScore++;
    } else {
      console.log("You win!");
      humanScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("Computer wins!");
      computerScore++;
    } else {
      console.log("You win!");
      humanScore++;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("Computer wins!");
      computerScore++;
    } else {
      console.log("You win!");
      humanScore++;
    }
  }
  // Display updated score
  console.log(`Score → You: ${humanScore} | Computer: ${computerScore}`);
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`\nRound ${i}:`);
    const humanSelection = getUserChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("\nFinal Result:");
  if (humanScore > computerScore) {
    console.log(
      `You win the game! Final Score → You: ${humanScore} | Computer: ${computerScore}`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `Computer wins the game! Final Score → You: ${humanScore} | Computer: ${computerScore}`
    );
  } else {
    console.log(
      `It's a tie! Final Score → You: ${humanScore} | Computer: ${computerScore}`
    );
  }
}

playGame();
