const buttonRock = document.querySelector('.rock');
const buttonPaper = document.querySelector('.paper');
const buttonScissors = document.querySelector('.scissors');

buttonRock.addEventListener('click', playRound);
buttonPaper.addEventListener('click', playRound);
buttonScissors.addEventListener('click', playRound);

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

function playRound() {
    const playerChoice = this.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    const playerScoreElement = document.querySelector('.score-player');
    const computerScoreElement = document.querySelector('.score-computer');
    const result = document.querySelector('.result');

    let playerScore = +playerScoreElement.textContent;
    let computerScore = +computerScoreElement.textContent;

    if (playerScore < 5 && computerScore < 5) {
        if (playerChoice === 'rock') {
            if (computerChoice === 'rock') {
                result.textContent = 'Draw.';
                return;
            } else if (computerChoice === 'paper') {
                computerScore++;
                computerScoreElement.textContent = computerScore;
                if (computerChoice === 5) {
                    result.textContent = 'Computer won the game.';
                    return;
                }
                result.textContent = 'You lose.';
                return;
            } else {
                playerScore++;
                playerScoreElement.textContent = playerScore;
                if (playerScore === 5) {
                    result.textContent = 'You won the game!';
                    return;
                }
                result.textContent = 'You win!';
                return;
            }
        } else if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                playerScore++;
                playerScoreElement.textContent = playerScore;
                if (playerScore === 5) {
                    result.textContent = 'You won the game!';
                    return;
                }
                result.textContent = 'You win!';
                return;
            } else if (computerChoice === 'paper') {
                result.textContent = 'Draw.';
                return;
            } else {
                computerScore++;
                computerScoreElement.textContent = computerScore;
                if (computerChoice === 5) {
                    result.textContent = 'Computer won the game.';
                    return;
                }
                result.textContent = 'You lose.';
                return;
            }
        } else {
            if (computerChoice === 'rock') {
                computerScore++;
                computerScoreElement.textContent = computerScore;
                if (computerChoice === 5) {
                    result.textContent = 'Computer won the game.';
                    return;
                }
                result.textContent = 'You lose.';
                return;
            } else if (computerChoice === 'paper') {
                playerScore++;
                playerScoreElement.textContent = playerScore;
                if (playerScore === 5) {
                    result.textContent = 'You won the game!';
                    return;
                }
                result.textContent = 'You win!';
                return;
            } else {
                result.textContent = 'Draw';
                return;
            }
        }
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