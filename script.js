// create function getComputerChoice that randomly chooses
// from 'Rock', 'Paper', and 'Scissors'. Return result in console

const choices = ['Rock', 'Paper', 'Scissors']
function getComputerChoice(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
}

console.log(getComputerChoice(choices));

