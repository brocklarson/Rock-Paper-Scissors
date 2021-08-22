const buttons = document.querySelectorAll('button');
const playerScoreText = document.getElementById('playerScore');
const computerScoreText = document.getElementById('computerScore');
const playerSelectionIcon = document.getElementById('playerSelectionIcon');
const computerSelectionIcon = document.getElementById('computerSelectionIcon');
const roundWinLoseText = document.getElementById('roundWinLoseText');
const screenOverlay = document.getElementById('screenOverlay');
const endGameContainer = document.getElementById('endGameContainer');
const restartButton = document.getElementById('restartButton');
const gameWinLoseText = document.getElementById('gameWinLoseText');
const finalScoreText = document.getElementById('gameFinalScore');
let playerScore = 0;
let computerScore = 0;


function computerPlay(){
    let computerSelection = Math.floor(Math.random()*3);
    if(computerSelection === 0){
        computerSelectionIcon.src = 'icon/rock-no-bg.png';
        return `rock`;
    }else if(computerSelection === 1){
        computerSelectionIcon.src = 'icon/paper-no-bg.png';
        return `paper`;
    }else{
        computerSelectionIcon.src = 'icon/scissors-no-bg.png';
        return `scissors`;
    }
}

function playerPlay(buttonID){
    if(buttonID === 'rockButton'){ 
        playerSelectionIcon.src = 'icon/rock-no-bg.png';
        return `rock`;
    }else if(buttonID === `paperButton`){
        playerSelectionIcon.src = 'icon/paper-no-bg.png';
        return `paper`;
    }else{
        playerSelectionIcon.src = 'icon/scissors-no-bg.png';
        return `scissors`;
    }
}

function playRound(computerSelection, playerSelection){
    if((playerSelection === `rock` && computerSelection === `scissors`) ||
        (playerSelection === `paper` && computerSelection === `rock`) ||
        (playerSelection === `scissors` && computerSelection === `paper`)){
            return `You Win!`;
    }else if((playerSelection === `rock` && computerSelection === `paper`) ||
        (playerSelection === `paper` && computerSelection === `scissors`) ||
        (playerSelection === `scissors` && computerSelection === `rock`)){
            return `You Lost`;
    }else{
        return `Tie`;
    }
}

function updateScore(roundWinner){
    roundWinLoseText.innerText = roundWinner;
    if(roundWinner === `You Win!`) {
        playerScore += 1;
        playerScoreText.innerText = playerScore.toString();
    }else if(roundWinner === `You Lost`) {
        computerScore += 1;
        computerScoreText.innerText = computerScore.toString();
    }

    if(playerScore >= 5 || computerScore >= 5){
        endGame(playerScore, computerScore);
    }
}

function endGame(playerScore, computerScore){
    if(playerScore > computerScore){
        gameWinLoseText.innerText = `You Win!`;
    }else{
        gameWinLoseText.innerText = `You Lose`;
    }
    finalScoreText.innerText = `${playerScore} - ${computerScore}`;
    screenOverlay.classList.add('display');
    endGameContainer.classList.add('display');
}

function game(buttonID){
    playerSelectionIcon.src = '';
    computerSelectionIcon.src = '';
    const computerSelection = computerPlay();
    const playerSelection = playerPlay(buttonID);
    const roundWinner = playRound(computerSelection, playerSelection);
    updateScore(roundWinner); 
}

function initializeGame(){
    playerScore = 0;
    computerScore = 0;

    playerScoreText.innerText = playerScore.toString();
    computerScoreText.innerText = computerScore.toString();
    screenOverlay.classList.remove('display');
    endGameContainer.classList.remove('display');
    roundWinLoseText.innerText = '';
    playerSelectionIcon.src = '';
    computerSelectionIcon.src = '';
}

initializeGame();

//Event Listeners
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id)
    });
});
restartButton.addEventListener('click', initializeGame);