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
    // count the number of times won
    let won = "You won";
    let lost = "You lost";

    // result of game: tie, win, lose
    if (playerSelection === rock && computerSelection === rock || playerSelection === paper && computerSelection === paper || playerSelection === scissors && computerSelection === scissors){
        return "Tied";
    }
    else if (playerSelection === rock && computerSelection === scissors || playerSelection === paper && computerSelection === rock || playerSelection === scissors && computerSelection === paper){
        playerWin = playerWin + 1;
        return won + ", " + playerSelection + " beats " + computerSelection + ".";
    }
    else if (playerSelection === rock && computerSelection === paper || playerSelection === paper && computerSelection === scissors || playerSelection === scissors && computerSelection === rock){
        computerWin = computerWin + 1;
        return lost + ", " + computerSelection + " beats " + playerSelection + "."
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
    
    if (playerWin > computerWin){
        return "You won again against the computer with a score of " + playerWin + " vs " + computerWin + ".";
    }
    else if (computerWin > playerWin){
        return "You lost again against the computer with a score of " + computerWin + " vs " + playerWin + ".";
    }
    else {
        return "You tied with the computer with a score of " + playerWin + " vs " + computerWin + ".";
    }
}

console.log(playGame());