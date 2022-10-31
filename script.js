function getPlayerChoice() {
    let playerChoice = prompt('Pick rock, paper or scissors').toLowerCase();
    while (!(playerChoice === 'rock') && !(playerChoice === 'paper') && !(playerChoice === 'scissors')) {
        alert('Enter a vaild value.');
        playerChoice = prompt('Pick rock, paper or scissors').toLowerCase();
    }
    return playerChoice;
}

function getComputerChoice() {
    let random = Math.floor((Math.random() * 3) + 1);
    switch (random) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
        default: 
            return console.log('Something in function getComputerChoice() went wrong.');
            break;
    }
}