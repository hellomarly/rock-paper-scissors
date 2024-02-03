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
        return scissors
    }
}
console.log(getComputerChoice ());

function game (playerSelection, computerSelection){

}