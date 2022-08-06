const choices = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

let playerScore = 0;
let computerScore = 0;

const choose = document.querySelectorAll('.choice');

function choosing(choice) {
    choice.classList.add('choosing');
}

choose.forEach(choice => choice.addEventListener('click', function() {
    choosing(choice);
    playRound(choice.value);
}));

choose.forEach(choice => choice.addEventListener('transitionend', remove));

function remove() {
    this.classList.remove('choosing');
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        alert(`${playerSelection} beats ${computerSelection}. Nice.`); 
        playerScore += 1;        
    } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        alert(`${playerSelection} loses to ${computerSelection}. Not nice.`);
        computerScore += 1;    
    } else if (playerSelection === computerSelection) {
        alert('Tie. Nice?');
    }
}