const buttons = document.querySelectorAll('button');

function computerPlay(){
    let computerSelection = Math.floor(Math.random()*3);
    if(computerSelection === 0) return `rock`;
    if(computerSelection === 1) return `paper`;
    return `scissors`;
}

function playerPlay(buttonID){
    if(buttonID === 'rockButton') return `rock`;
    if(buttonID === `paperButton`) return `paper`;
    return `scissors`;
}

function playRound(computerSelection, playerSelection){
    if(computerSelection === `rock`){
        if(playerSelection === `rock`){
            return `Tie! You both played Rock. Go again`;
        }else if(playerSelection === `paper`){
            return `You Win! Paper beats Rock`;
        }else{
            return `You Lose! Rock beats Scissors`;
        }
    }else if(computerSelection === `paper`){
        if(playerSelection === `rock`){
            return `You Lose! Paper beats Rock`;
        }else if(playerSelection === `paper`){
            return `Tie! You both played Paper. Go again`;
        }else{
            return `You Win! Scissors beats Paper`;
        }
    }else{
        if(playerSelection === `rock`){
            return `You Win! Rock beats Scissors`;
        }else if(playerSelection === `paper`){
            return `You Lose! Scissors beats Paper`;
        }else{
            return `Tie! You both played Scissors.  Go again`;
        }
    }
}


function game(buttonID){
    let playerScore = 0;
    let computerScore = 0;
    
    const computerSelection = computerPlay();
    const playerSelection = playerPlay(buttonID);
    
    const roundWinner = playRound(computerSelection, playerSelection);
    console.log(`Round ${i+1}: ${roundWinner}`);
    if(roundWinner.substring(4,7) === `Win`) playerScore += 1;
    if(roundWinner.substring(4,8) === `Lose`) computerScore += 1;
    if(roundWinner.substring(0,3) === `Tie`) i -= 1;
    if(roundWinner.substring(0,3) !== `Tie`) console.log(`The current ` +
            `score is: You - ${playerScore}, Computer - ${computerScore}`);
    
}

//game();

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id)
    });
});
