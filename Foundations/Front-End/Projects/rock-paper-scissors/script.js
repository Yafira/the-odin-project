// replacing prompt input with event listener for each selection
const options = document.querySelectorAll(".options");
let roundCount = 0;
let tieCount = 0;
let playerScore = 0;
let computerScore = 0;
let roundState = "";
let roundText = "";

    options.forEach((option) => {
        option.addEventListener("click", function () {
        const playerSelection = this.value;

        const compOptions = ["Rock", "Paper", "Scissors"];
        const computerSelection = compOptions[Math.floor(Math.random() * 3)];

        updateMoves(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
        updateScore();
        if (checkWinner()) {
            playerScore = computerScore = roundCount = 0;
            updateScore();
        }
    });
});

// update player's move
function updateMoves(playerSelection, computerSelection) {
    document.getElementById("p-score").src = `./assets/${playerSelection}.png`;
    document.getElementById("c-score").src = `./assets/${computerSelection}.png`;
}

function playRound(playerSelection, computerSelection) {
    const currentMatch = `${playerSelection} vs ${computerSelection}`;

    // check if it's a tie
    if (playerSelection === computerSelection) {
        roundCount++;
        roundState = `${currentMatch}`;
        roundText = 'Draw! Try again.';
        tieCount++;
        return;
    }

    // Rock
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            roundCount++;
            roundState = `${currentMatch}`;
            roundText = `Yay! You Win!`
            playerScore++;
        } else {
            roundCount++;
            roundState = `${currentMatch}`;
            roundText = `Ah! Computer Wins!`;
            computerScore++;
        }
    }

    // Paper
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            roundCount++;
            roundState = `${currentMatch}`;
            roundText = `Hooray! You Win!`;
            playerScore++;
        } else {
            roundCount++;
            roundState = `${currentMatch}`;
            roundText = `Uh oh! Computer Wins!`
            computerScore++;
        }
    }
    // Scissors
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            roundCount++;
            roundState = `${currentMatch} `;
            roundText = `Ha! You Win!`;
            playerScore++;
        } else {
            roundCount++;
            roundState = `${currentMatch}`;
            roundText = `Yikes! Computer Wins!`;
            computerScore++;
        }
    }
}
// update score after each round
function updateScore(playerSelection, computerSelection) {
    document.getElementById("round-count").textContent = roundCount;
    document.getElementById("tie-count").textContent = tieCount;
    document.getElementById("p-score").textContent = playerScore;
    document.getElementById("c-score").textContent = computerScore;
    document.getElementById("outcome").textContent = roundState;
    document.getElementById("stage").textContent = roundText;
}

// check who's the winner after 5 rounds
function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        const winner =
        playerScore === 5
            ? "You win the game! Congratulations!"
            : "Computer wins the game! Try again next time!";
        roundCount++;
        roundState = `${winner}`;
        roundText = "";
        return true;
    }
    return false;
}