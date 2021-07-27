// replacing prompt input with event listener for each selection
const options = document.querySelectorAll(".options");
let playerScore = 0;
let computerScore = 0;

    options.forEach((option) => {
        option.addEventListener("click", function () {
        const playerSelection = this.value;

        const compOptions = ["Rock", "Paper", "Scissors"];
        const computerSelection = compOptions[Math.floor(Math.random() * 3)];

        updateMoves(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
        updateScore();
        if (checkWinner()) {
            playerScore = computerScore = 0;
            updateScore();
        }
    });
});

function updateMoves(playerSelection, computerSelection) {
    document.getElementById("p-score").src = `./assets/${playerSelection}.png`;
    document.getElementById("c-score").src = `./assets/${computerSelection}.png`;
}

function playRound(playerSelection, computerSelection) {
    const currentMatch = `${playerSelection} vs ${computerSelection}`;

    // check if it's a tie
    if (playerSelection === computerSelection) {
        console.log(`${currentMatch} Draw!`);
        return;
    }

    // Rock
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            console.log(`${currentMatch} = You Win!`);
            playerScore++;
        } else {
            console.log(`${currentMatch} = Computer Wins!`);
            computerScore++;
        }
    }

    // Paper
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            console.log(`${currentMatch} = You Win!`);
            playerScore++;
        } else {
            console.log(`${currentMatch} = Computer Wins!`);
            computerScore++;
        }
    }
    // Scissors
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            console.log(`${currentMatch} = You Win!`);
            playerScore++;
        } else {
            console.log(`${currentMatch} = Computer Wins!`);
            computerScore++;
        }
    }
}
// update score after each round
function updateScore(playerSelection, computerSelection) {
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