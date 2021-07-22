// replacing prompt input with event listener for each selection
const options = document.querySelectorAll(".options");
let playerScore = 0;
let computerScore = 0;

    options.forEach((option) => {
        option.addEventListener("click", function () {
        const playerSelection = this.textContent;

        const compOptions = ["Rock", "Paper", "Scissors"];
        const computerSelection = compOptions[Math.floor(Math.random() * 3)];

        playRound(playerSelection, computerSelection);
    });
});

function playRound(playerSelection, computerSelection) {
    const currentMatch = `${playerSelection} vs ${computerSelection}`;

    // Check if it's a tie
    if (playerSelection === computerSelection) {
        alert(`${currentMatch} is a Tie!`);
        return;
    }

    // Rock
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            alert(`${currentMatch} = You Win!`);
        } else {
            alert(`${currentMatch} = Computer Wins!`);
        }
    }

    // Paper
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            alert(`${currentMatch} = You Win!`);
        } else {
            alert(`${currentMatch} = Computer Wins!`);
        }
    }
    // Scissors
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            alert(`${currentMatch} = You Win!`);
        } else {
            alert(`${currentMatch} = Computer Wins!`);
        }
    }
}