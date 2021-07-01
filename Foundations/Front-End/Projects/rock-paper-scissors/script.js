// randomly return either 'Rock', 'Paper', 'Scissors'

let items = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let result = items[Math.floor(Math.random() * items.length)];
    return result;
}

// plays a single round of Rock Paper Scissors, return string
function playRound(playerSelection, computerSelection) {
    let playerSelection = prompt("Choose: Rock/Paper/Scissors",'');
    let computerSelection = computerPlay();

    if (playerSelection.toLowerCase() == "Rock".toLowerCase()){
        if (computerSelection === "Scissors"){
            ++playerScore;
            return "You win! Rock beats Scissors.";
        } else if(computerSelection === "Paper"){
            ++computerScore;
            return "You lose! Paper beats Rock.";
        } else {
            return "Tie!";
            }
        } else if (playerSelection.toLowerCase() == "Paper".toLowerCase()){
            if (computerSelection === "Rock"){
                ++playerScore;
                return "You win! Paper beats Rock.";
            } else if(computerSelection === "Scissors"){
                ++computerScore;
                return "You lose! Scissors beats Paper.";
            } else {
                return "Tie!";
            }
        } else if (playerSelection.toLowerCase() == "Scissors".toLowerCase()) {
            if (computerSelection === "Paper"){
                ++playerScore;
                return "You win! Scissors beats Paper.";
            } else if (computerSelection === "Rock"){
                ++computerScore;
                return "You lose! Rock beats Scissors.";
            } else {
                return "Tie!"
            }
        }

        const playerSelection = "rock";
        const computerSelection = computerPlay();
        //return results
        console.log(playRound(playerSelection, computerSelection));
}