const choices = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

let playerScore = 0;
let computerScore = 0;

const choose = document.querySelectorAll('.choice');

choose.forEach(choice => choice.addEventListener('click', function() {
    choice.classList.add('choosing');
    playRound(choice.value);
}));

choose.forEach(choice => choice.addEventListener('transitionend', remove));

function remove() {
    this.classList.remove('choosing');
}

const result = document.querySelector('#result');
const win = document.createElement('h2');
win.classList.add('win');

const lose = document.createElement('h2');
lose.classList.add('lose');

const tie = document.createElement('h2');
tie.classList.add('tie');


function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        win.textContent = `${playerSelection} beats ${computerSelection}. Nice.`
        result.replaceChild(win, result.firstChild);
        playerScore += 1;        
    } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        lose.textContent = `${playerSelection} loses to ${computerSelection}. Not nice.`;
        result.replaceChild(lose, result.firstChild);
        computerScore += 1;    
    } else if (playerSelection === computerSelection) {
        tie.textContent = 'Tie. Try again.'
        result.replaceChild(tie, result.firstChild);
    }
}