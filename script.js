function getPlayerChoice() {
    let playerChoice = prompt('Pick rock, paper or scissors').toLowerCase();
    while (!(playerChoice === 'rock') && !(playerChoice === 'paper') && !(playerChoice === 'scissors')) {
        alert('Enter a vaild value.');
        playerChoice = prompt('Pick rock, paper or scissors').toLowerCase();
    }
    return playerChoice;
}