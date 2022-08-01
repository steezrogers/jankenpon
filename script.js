// create function getComputerChoice that randomly chooses
// from 'Rock', 'Paper', and 'Scissors'. Return result in console

const choices = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

// create function playRound (playerSelection, computerSelection)
// that returns a string based on result. make playerSelection case-insensitive

function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper')) {
        alert(`${playerSelection} beats ${computerSelection}. YOU WIN!`);         
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock')) {
        alert(`${computerSelection} beats ${playerSelection}. YOU LOSE T_T`);    
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        alert('Tie. Try Again.');
    }
}