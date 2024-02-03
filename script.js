// rock paper and scissors variables
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

// Computer will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function getComputerChoice (){
    let randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return rock;
    }
    else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        return paper;
    } else {
        return scissors;
    }
}

// times won / lost variable
let computerWin = 0;
let playerWin = 0;


// game
function game (playerSelection, computerSelection){
    if (playerSelection === rock && computerSelection === rock || playerSelection === paper && computerSelection === paper || playerSelection === scissors && computerSelection === scissors){
        return "Tied";
    }
    else if (playerSelection === rock && computerSelection === scissors){
        playerWin = playerWin++;
        return "You won! Rock beats scissors."
    }
    else if (playerSelection === rock && computerSelection === paper){
        computerWin = computerWin++;
        return "You lost! Paper beats rock."
    }
    else if (playerSelection === paper && computerSelection === rock){
        playerWin = playerWin++;
        return "You won! Paper beats Rock.";
    }
    else if (playerSelection === paper && computerSelection === scissors){
        computerWin = computerWin++;
        return "You lost! Scissors beats Paper.";
    }
    else if (playerSelection === scissors && computerSelection === paper){
        playerWin = playerWin++;
        return "You won! Scissors beats Paper.";
    }
    else if (playerSelection === scissors && computerSelection === rock){
        computerWin = computerWin++;
        return "You lost! Rock beats scissors.";
    }
    else {
        return "Check you spelling!"
    }
}


// Who wins after 5 games
function playGame(){
    for (let i = 0; i < 5; i++) {
        i = i++
        // Choices from player and computer
        let playerChoice = prompt("Enter Rock, Paper, or Scissors");
        playerSelection = playerChoice.toLowerCase();
        computerSelection = getComputerChoice();
        // Run function
        console.log(game(playerSelection, computerSelection))
      }
    
    console.log(playerWin);
    console.log(computerWin);
}

console.log(playGame());