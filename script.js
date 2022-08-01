// create function getComputerChoice() that randomly chooses
// from 'Rock', 'Paper', and 'Scissors'

const choices = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

// create function playRound(playerSelection, computerSelection)
// that returns a string based on result. make playerSelection case-insensitive

function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper')) {
        alert(`${playerSelection} beats ${computerSelection}. YOU WIN!`);         
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock')) {
        alert(`${playerSelection} loses to ${computerSelection}. LOSER!`);    
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        alert('Tie. Try Again.');
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
}

game();