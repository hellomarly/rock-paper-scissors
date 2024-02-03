// rock paper and scissors variables
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let playerChoice = prompt("Enter Rock, Paper, or Scissors");

// Paramaters:
playerSelection = playerChoice.toLowerCase();
computerSelection = getComputerChoice();

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

// game
function game (playerSelection, computerSelection){
    console.log(computerSelection);

    if (playerSelection === rock && computerSelection === rock || playerSelection === paper && computerSelection === paper || playerSelection === scissors && computerSelection === scissors){
        return "Tied";
    }
    else if (playerSelection === rock && computerSelection === scissors){
        return "You won! Rock beats scissors."
    }
    else if (playerSelection === rock && computerSelection === paper){
        return "You lost! Paper beats rock."
    }
    else if (playerSelection === paper && computerSelection === rock){
        return "You won! Paper beats Rock.";
    }
    else if (playerSelection === paper && computerSelection === scissors){
        return "You lost! Scissors beats Paper.";
    }
    else if (playerSelection === scissors && computerSelection === paper){
        return "You won! Scissors beats Paper.";
    }
    else if (playerSelection === scissors && computerSelection === rock){
        return "You lost! Rock beats scissors.";
    }
    else {
        return "Check you spelling!"
    }
}

console.log(game(playerSelection, computerSelection))

function playGame(){

}