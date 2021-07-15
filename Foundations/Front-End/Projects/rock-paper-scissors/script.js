// randomly return either 'Rock', 'Paper', 'Scissors'
let items = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let result = items[Math.floor(Math.random() * items.length)];
    return result;
}

// plays a single round of Rock Paper Scissors, return string
let playerSelection = window.prompt("Choose: Rock  Paper  Scissors",'');
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {


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
                ++computerScore;
                return "You win! Paper beats Rock.";
            } else if(computerSelection === "Scissors"){
                ++playerScore;
                return "You lose! Scissors beats Paper.";
            } else {
                return "Tie!";
            }
        } else if (playerSelection.toLowerCase() == "Scissors".toLowerCase()) {
            if (computerSelection === "Paper"){
                ++computerScore;
                return "You win! Scissors beats Paper.";
            } else if (computerSelection === "Rock"){
                ++playerScore;
                return "You lose! Rock beats Scissors.";
            } else {
                return "Tie!"
                }
            }
    }

    // test function
    console.log(playRound(playerSelection, computerSelection));
