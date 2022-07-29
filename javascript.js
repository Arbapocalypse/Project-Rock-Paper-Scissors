console.log("Hello World");
console.log("Arbapocalypse here~");

const intro = "This is a simple implementation of grade-school classic “rock, paper, scissors”."
const tutorial = "Use the console to play."

console.log(intro);
console.log(tutorial);

let randomChoice = Math.floor(Math.random()*3) + 1;

function getComputerChoice(){
    if(randomChoice === 1){
        rock = "rock";
        return rock;
    } else if(randomChoice === 2){
        paper = "paper";
        return paper;
    } else {
        scissor = "scissor";
        return scissor;
    }
}

const playerSelection = parseInt(prompt("(1)Rock, (2)paper, or (3)scissor: "));
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "Tie";
    } else if(playerSelection === 1 || "rock"){
        if(computerSelection === "paper"){
            computerScore++;
            return "You lost! Paper beats rock!";
        } else if(playerSelection === 1 || "rock"){
            if(computerSelection === "scissor"){
                playerScore++;
                return "You win! Rock beats scissor!";
            } else {
                return "Wrong input!";
            }
        }
    } else if(playerSelection === 2 || "paper"){
        if(computerSelection === "rock"){
            playerScore++;
            return "You win! Paper beats rock!";
        } else if(playerSelection === 2 || "paper"){
            if(computerSelection === "scissor"){
                computerScore++;
                return "You lost! Scissor beats paper!";
            } else {
                return "Wrong input!"; 
            }            
        }
    } else if(playerSelection === 3 || "scissor"){
        if(computerSelection === "rock"){
            computerScore++;
            return "You lost! Rock beats scissor!";
        } else if (playerSelection === 3 || "scissor"){
            if(computerSelection === "paper"){
                playerScore++;
                return "You win! Scissor beats paper!";
            } else {
                return "Wrong input!";
            }           
        }
    }
}

function game(){
    playRound();

    for (let i = 1; i <= 5; i++ ){        
            console.log("Round" + " " + i);
            console.log(playRound(playerSelection, computerSelection));
            scoreBoard();
    }
}

let playerScore = 0;
let computerScore = 0;

function scoreBoard(){
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
}

game();