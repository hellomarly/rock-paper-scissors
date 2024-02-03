// rock paper and scissors variables
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let playerChoice = "rOck";


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
    playerSelection = playerChoice.toLowerCase();
    computerSelection = getComputerChoice();

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
    else {
        return "You didn't play rock!";
    }
}

console.log(game())