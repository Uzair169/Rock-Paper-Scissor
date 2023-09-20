function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}

 function checkGameResult() {
        if (playerWins < ComputerWins) {
            alert("You lose. Better luck next time.");
        } else if (playerWins === ComputerWins) {
            alert("It's a Tie.");
        } else {
            alert("You win. Hurray!");
        }
        gameRound = 1;
    }

function playGround(playerSelection, computerSelection) {
    const computerChoice = computerSelection.toLowerCase();
    const playerChoice = playerSelection.toLowerCase();
    const status = document.getElementById('status-bar');

    if (computerChoice === "rock") {
        if (playerChoice === "rock") {
            status.innerHTML = "It's a Tie. Try again.";
        }
        else if (playerChoice === "paper") {
            status.innerHTML = "You win. Paper beats Rock";
            playerWins++;;
        }
        else if (playerChoice === "scissor" || playerChoice === "scissors") {
            status.innerHTML = "You lost. Rock beat Scissors";
            ComputerWins++;
        }
        else {
            status.innerHTML = "Wrong Choice";
        }
    }
    else if (computerChoice === "paper") {
        if (playerChoice === "rock") {
            status.innerHTML = "You lose. Paper beats Rock";
            ComputerWins++;;
        }
        else if (playerChoice === "paper") {
            status.innerHTML = "It's a Tie. Try again";
        }
        else if (playerChoice === "scissor" || playerChoice === "scissors") {
            status.innerHTML ="You win. Scissors beat Paper";
            playerWins++;
        }
        else {
            status.innerHTML = "Wrong Choice";
        }
    }
    else if (computerChoice === "scissor" || computerChoice === "scissors") {
        if (playerChoice === "rock") {
            status.innerHTML = "You win. Rock beats Scissors";
            playerWins++;
        }
        else if (playerChoice === "paper") {
            status.innerHTML = "You lost. Scissors beat Paper";
            ComputerWins++;
        }
        else if (playerChoice === "scissor" || playerChoice === "scissors") {
            status.innerHTML ="It's a tie. Try again." ;
        }
        else {
            status.innerHTML ="Wrong Choice";
        }
    }
}

function Game() {
    console.log("Let's play the game");
    
    const rockButton = document.getElementById('Rock');
    const scissorsButton = document.getElementById('Scissors');
    const paperButton = document.getElementById('Paper');

    const scores = document.getElementById('scores');

    
    // Event listeners for button clicks
    rockButton.addEventListener("click", () => {
        const computerSelection = getComputerChoice(arr);
        console.log(`Computer chose: ${computerSelection}`);
        playGround("Rock", computerSelection);
        scores.innerHTML = `Computer: ${ComputerWins}  |  Player: ${playerWins}`;
        if(gameRound === 5)
        {
            checkGameResult();
        }
        else
        {
            gameRound++;
        }
    });

    scissorsButton.addEventListener("click", () => {
        const computerSelection = getComputerChoice(arr);
        console.log(`Computer chose: ${computerSelection}`);
        playGround("Scissor", computerSelection);
        scores.innerHTML = `Computer: ${ComputerWins}  |  Player: ${playerWins}`;
        if(gameRound === 5)
        {
            checkGameResult();
        }
        else
        {
            gameRound++;
        }
    });

    paperButton.addEventListener("click", () => {
        const computerSelection = getComputerChoice(arr);
        console.log(`Computer chose: ${computerSelection}`);
        playGround("Paper", computerSelection);
        scores.innerHTML = `Computer: ${ComputerWins}  |  Player: ${playerWins}`;
        if(gameRound === 5)
        {
            checkGameResult();
        }
        else
        {
            gameRound++;
        }
    });

}

const arr = ["Rock", "Paper", "Scissor"];

let playerWins = 0;
let ComputerWins = 0;

Game();

let gameRound = 1;



// if (playerWins < ComputerWins) {
//     alert("You lose. Better luck next time.");
// }
// else if (playerWins === ComputerWins) {
//     alert("It's a Tie.");
// }
// else {
//     alert("You win. Hurray!");
// }