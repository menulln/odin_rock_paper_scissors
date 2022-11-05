const buttonRock = document.querySelector('.rock');
const buttonPaper = document.querySelector('.paper');
const buttonScissors = document.querySelector('.scissors');

buttonRock.addEventListener('click', getPlayerChoice);
buttonPaper.addEventListener('click', getPlayerChoice);
buttonScissors.addEventListener('click', getPlayerChoice);

function getPlayerChoice() {
    return this.innerHTML.toLowerCase();
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    console.log(`${playerChoice.toUpperCase()} VS ${computerChoice.toUpperCase()}`);

    let gameResult = playRound(playerChoice, computerChoice);

    if (gameResult.match(/win/i)) {
        playerScore++;
        console.log(`${gameResult}\nYour Score: ${playerScore}\nCPU Score: ${computerScore}`);
    } else if (gameResult.match(/lose/i)) {
        computerScore++;
        console.log(`${gameResult}\nYour Score: ${playerScore}\nCPU Score: ${computerScore}`);
    } else {
        console.log(`${gameResult}\nYour Score: ${playerScore}\nCPU Score: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        playerWins();
    } else if (playerScore < computerScore) {
        computerWins();
    } else {
        draw();
    }
}

function playerWins() {
    console.log('.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:.');
    console.log('.:*~*:._.:*~*:.            YOU WON!             .:*~*:._.:*~*:.');
    console.log('.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:.');
}

function computerWins() {
    console.log('-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-');
    console.log('-=x=-=x=-=x=-=x=-         YOU LOST!         -=x=-=x=-=x=-=x=-')
    console.log('-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-');
}

function draw() {
    console.log('_/~\_/~\_/~\_/~\_/~\_/~\_/~\_/~\_/~\_/~\_/~\_/~\_/~\_/~\_');
    console.log('_/~\_/~\_/~\_/~\_/~\_     DRAW.     _/~\_/~\_/~\_/~\_/~\_');
    console.log('_/~\_/~\_/~\_/~\_/~\_/~\_/~\_/~\_/~\_/~\_/~\_/~\_/~\_/~\_');
}