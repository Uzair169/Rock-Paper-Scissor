function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}

function playGround(playerSelection, computerSelection) {
    const computerChoice = computerSelection.toLowerCase();
    const playerChoice = playerSelection.toLowerCase();

    if (computerChoice === "rock") {
        if (playerChoice === "rock") {
            console.log( "It's a Tie. Try again.");
        }
        else if (playerChoice === "paper") {
            console.log( "You win. Paper beats Rock");
            ComputerWins--;
        }
        else if (playerChoice === "scissor" || playerChoice === "scissors") {
            console.log("You lost. Rock beat Scissors");
            playerWins--;
        }
        else 
        {
            console.log("Wrong Choice");
        }
    }
    else if (computerChoice === "paper") {
        if (playerChoice === "rock") {
            console.log("You lose. Paper beats Rock");
            playerWins--;
        }
        else if (playerChoice === "paper") {
            console.log("It's a Tie. Try again");
        }
        else if (playerChoice === "scissor" || playerChoice === "scissors") {
            console.log("You win. Scissors beat Paper") ;
            ComputerWins--;
        }
        else 
        {
            console.log("Wrong Choice");
        }
    }
    else if (computerChoice === "scissor" || computerChoice === "scissors") {
        if (playerChoice === "rock") {
            console.log("You win. Rock beats Scissors");
            ComputerWins--;;
        }
        else if (playerChoice === "paper") {
            console.log("You lost. Scissors beat Paper") ;
            playerWins--;
        }
        else if (playerChoice === "scissor" || playerChoice === "scissors") {
            console.log("It's a tie. Try again.");
        }
        else
        {
            console.log("Wrong Choice");
        }
    }
}

function Game() {
    console.log("Let's play the game");
    for (let i = 0; i <= 5; i++) {

        const computerSelection = getComputerChoice(arr);
        console.log(computerSelection);
        const playerSelection = prompt("What do you choose? Rock, Paper or Scissors?");
        
        console.log(playGround(playerSelection, computerSelection));
    }
    
}

const arr = ["Rock", "Paper", "Scissor"];

let playerWins = 5;
let ComputerWins = 5;

Game();

if(playerWins < ComputerWins)
{
    alert("You lose. Better luck next time.");
}
else if(playerWins === ComputerWins)
{
    alert("It's a Tie.");
}
else {
    alert("You win. Hurray!");
}