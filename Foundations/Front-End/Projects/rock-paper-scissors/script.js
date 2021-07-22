// replacing prompt input with event listener for each selection
const options = document.querySelectorAll(".options");
let playerScore = 0;
let computerScore = 0;

    options.forEach((option) => {
        option.addEventListener("click", function () {
        const playerSelection = this.value;

        const compOptions = ["Rock", "Paper", "Scissors"];
        const computerSelection = compOptions[Math.floor(Math.random() * 3)];

        playRound(playerSelection, computerSelection);
        updateScore();

        if (checkWinner()) {
            playerScore = computerScore = 0;
            updateScore();
        }
    });
});

function playRound(playerSelection, computerSelection) {
    const currentMatch = `${playerSelection} vs ${computerSelection}`;

    // check if it's a tie
    if (playerSelection === computerSelection) {
        alert(`${currentMatch} is a Tie!`);
        return;
    }

    // Rock
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            alert(`${currentMatch} = You Win!`);
            playerScore++;
        } else {
            alert(`${currentMatch} = Computer Wins!`);
            computerScore++;
        }
    }

    // Paper
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            alert(`${currentMatch} = You Win!`);
            playerScore++;
        } else {
            alert(`${currentMatch} = Computer Wins!`);
            computerScore++;
        }
    }
    // Scissors
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            alert(`${currentMatch} = You Win!`);
            playerScore++;
        } else {
            alert(`${currentMatch} = Computer Wins!`);
            computerScore++;
        }
    }
}
// update score after each round
function updateScore() {
    document.getElementById("p-score").textContent = playerScore;
    document.getElementById("c-score").textContent = computerScore;
}

// check who's the winner after 5 rounds
function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        const winner =
        playerScore === 5
            ? "You win the game! Congratulations!"
            : "Computer wins the game! Try again next time!";
        alert(winner);
        return true;
    }
    return false;
}