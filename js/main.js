function getComputerPlay(){
    let computerSelection = Math.floor(Math.random()*3);
    if(computerSelection === 0) return `rock`;
    if(computerSelection === 1) return `paper`;
    return `scissors`;
}

function getPlayerPlay(){
    let playerSelection
    let keepGoing = true;
    while(keepGoing){
        playerSelection = prompt(`Select "Rock", "Paper", or "Scissors": `).toLowerCase();
        if((playerSelection.charAt(0) === `r` || 
                playerSelection.charAt(0) === `p` || 
                playerSelection.charAt(0) === `s`) && 
                playerSelection != undefined){
            keepGoing = false;
        }        
    }
    if(playerSelection.charAt(0) === `r`) return `rock`;
    if(playerSelection.charAt(0) === `p`) return `paper`;
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

function getGameWinner(computerScore, playerScore){
    if(playerScore > computerScore){
        console.log(`Game Over - You Win! You - ${playerScore}, ` +
                `Computer - ${computerScore}`);
    }else{
        console.log(`Game Over - You Lose. You - ${playerScore}, ` +
                `Computer - ${computerScore}`);
    }
}

function askPlayAgain(){
    return prompt(`Play again? [Y]/[N]: `).toLowerCase();
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        const computerSelection = getComputerPlay();
        const playerSelection = getPlayerPlay();
        const roundWinner = playRound(computerSelection, playerSelection);
        console.log(`Round ${i+1}: ${roundWinner}`);
        if(roundWinner.substring(4,7) === `Win`) playerScore += 1;
        if(roundWinner.substring(4,8) === `Lose`) computerScore += 1;
        if(roundWinner.substring(0,3) === `Tie`) i -= 1;
        if(roundWinner.substring(0,3) !== `Tie`) console.log(`The current ` +
                `score is: You - ${playerScore}, Computer - ${computerScore}`);
    }
    getGameWinner(computerScore, playerScore);
    if(askPlayAgain().charAt(0) === `y`) game();
}

game();



/*
Objective: Create function that gets user input for rock, paper, scissors, randomly returns a selection for computer opponent, and determines a winner


function (computerPlay) that returns random selection
    use random number 0-2 to determine comp`s choice
    assign number to variable computerSelection
    return comp's choice as string
function (playerPlay) to prompt user input to get playerSelection
    check that player's input is valid
    return player's choice as string
function (playRound) that accepts two parameters, playerSelection and computerSelection
    Determines winner and returns winning/losing message
function (game) to call previous functions
    variables to keep comp and player score
    loop through game 5 times
    increase score for winner
    output score at end of each match
    output overall winner after the 5 rounds
    ask if want to play again

Call game function
*/