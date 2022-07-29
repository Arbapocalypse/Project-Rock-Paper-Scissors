console.log("Hello World");
console.log("Arbapocalypse here~");

const intro = "This is a simple implementation of grade-school classic “rock, paper, scissors”. \nUse the console to play. \nGame start!";

console.log(intro);

function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*3) + 1;
    if(randomChoice === 1){
        return "rock";
    } else if(randomChoice === 2){
        return "paper";
    } else if(randomChoice === 3){
        return "scissor";
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    if((playerSelection === "rock") && (computerSelection === "scissor")){
        playerScore++;
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else if((playerSelection === "paper") && (computerSelection === "rock")){
        playerScore++;
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else if((playerSelection === "scissor") && (computerSelection === "paper")){
        playerScore++;
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else if(computerSelection === playerSelection){
        return `It's a tie! ${playerSelection} vs ${computerSelection}`;
    } else {
        computerScore++;
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
}

function game(choice){
    if((choice !== "rock") && (choice !== "paper") && (choice !== "scissor")){
        alert("Wrong input! You need to choose again.");
    } else {
        return playRound(choice, getComputerChoice());
    }
}

let i = 1;

while (i < 6){
    let playerChoice = prompt("Type rock, paper, or scissor!");
    playerChoice = playerChoice.toLowerCase();
    console.log(game(playerChoice));
    console.log(`Player score : ${playerScore} & Computer score : ${computerScore}`);
    i++;    
} if(playerScore > computerScore){
    console.log(`You win! Total points: ${playerScore}`);
} else if(playerScore < computerScore){
    console.log(`You lose! Total points: ${playerScore}`);
} else if(playerScore === computerScore){
    console.log(`It's a tie! Total points: ${playerScore} vs ${computerScore}`)
} else {
    console.log(`It's a tie! Total points: ${playerScore} vs ${computerScore}`)
}