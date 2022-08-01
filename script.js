// create function getComputerChoice() that randomly chooses
// from 'Rock', 'Paper', and 'Scissors'

const choices = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

// create function playRound(playerSelection, computerSelection)
// that returns a string based on result. make playerSelection case-insensitive
// add playerScore and computerScore variables to keep track of score

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper')) {
        alert(`${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection}. Nice.`); 
        playerScore += 1;        
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock')) {
        alert(`${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()} loses to ${computerSelection}. Not nice.`);
        computerScore += 1;    
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        alert('Tie. Nice?');
    } else {
        alert('Please enter a proper value.')
    }
}

// create function game() that loops playRound() 5 times. add feature that 
// keeps track of score and reports a winner or loser after 5 rounds

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Please choose "rock", "paper", or "scissors".');
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        alert(`Winner Winner Chicken Dinner! Player: ${playerScore} Computer: ${computerScore}`);
    } else if (playerScore < computerScore) {
        alert(`YOU DIED. Player: ${playerScore} Computer: ${computerScore}`)
    } else if (playerScore == computerScore) {
        alert(`There are no ties in Jan-Ken-Pon. Try again. Player: ${playerScore} Computer: ${computerScore}`);
    }
}

game();