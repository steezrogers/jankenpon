const choices = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

let playerScore = 0;
let computerScore = 0;

const player = document.querySelector('.you');
const pScore = document.createElement('span');
pScore.classList.add('pScore');
pScore.textContent = playerScore;
player.appendChild(pScore);

const comp = document.querySelector('.cpu');
const cScore = document.createElement('span');
cScore.classList.add('cScore');
cScore.textContent = computerScore;
comp.appendChild(cScore);

const choose = document.querySelectorAll('.choice');

choose.forEach(choice => choice.addEventListener('click', function() {
    playRound(choice.value);
}));

choose.forEach(choice => choice.addEventListener('click', add));

function add() {
    this.classList.add('choosing');
}

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
        win.textContent = `${playerSelection} beats ${computerSelection} ^_^`;
        result.replaceChild(win, result.firstChild);
        playerScore += 1;
        pScore.textContent = playerScore;        
    } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        lose.textContent = `${playerSelection} loses to ${computerSelection} T_T`;
        result.replaceChild(lose, result.firstChild);
        computerScore += 1;
        cScore.textContent = computerScore;    
    } else if (playerSelection === computerSelection) {
        tie.textContent = 'Tie. Try again.'
        result.replaceChild(tie, result.firstChild);
    }
    endGame();
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function disable() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

const gameOver = document.querySelector('#final');

const winner = document.createElement('h1');
winner.classList.add('winner');
winner.textContent = 'YOU WIN!';

const playAgain = document.createElement('button');
playAgain.classList.add('playAgain');
playAgain.textContent = 'PLAY AGAIN';

const loser = document.createElement('h1');
loser.classList.add('loser');
loser.textContent = 'YOU LOSE';

const cont = document.createElement('button');
cont.classList.add('cont');
cont.textContent = 'CONTINUE?';

function reload() {
    location.reload();
}

playAgain.addEventListener('click', reload);
cont.addEventListener('click', reload);


function endGame() {
    if (playerScore === 5) {
        disable();
        gameOver.appendChild(winner);
        gameOver.appendChild(playAgain);
    } else if (computerScore === 5) {
        disable();
        gameOver.appendChild(loser);
        gameOver.appendChild(cont);
    }
}