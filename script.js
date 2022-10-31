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

function playRound(playerChoice, computerChoice) {
    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            return 'Draw.';
        } else if (computerChoice === 'paper') {
            return 'You lose.';
        } else {
            return 'You win!'
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'You win!';
        } else if (computerChoice === 'paper') {
            return 'Draw.';
        } else {
            return 'You lose.';
        }
    } else {
        if (computerChoice === 'rock') {
            return 'You lose.';
        } else if (computerChoice === 'paper') {
            return 'You win!';
        } else {
            return 'Draw';
        }

    }
}