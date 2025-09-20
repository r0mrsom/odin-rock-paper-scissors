let humanScore = 0;
let computerScore = 0;
let gameNumber = 0;
let humanChoice;
let message = "";

const button = document.querySelectorAll("button");
const humanTally = document.querySelector("#scoreHuman");
const computerTally = document.querySelector("#scoreComputer");
const humanSelected = document.querySelector("#humanSelection");
const computerSelected = document.querySelector("#computerSelection");
const promptMessage = document.querySelector("#prompt");

humanTally.textContent = humanScore;
computerTally.textContent = computerScore;
promptMessage.textContent = "Welcome to the game! Select from rock, paper and scissors."


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if (randomNumber == 1) {
        return "Rock";
    }
    else if (randomNumber == 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
};

button.forEach((item) => {
    item.addEventListener("click", (e) => {
        humanChoice = e.target.id;
        gameNumber += 1;
        console.log(`humanChoice after: ${humanChoice} \n Game Number: ${gameNumber}`);
        playRound(humanChoice, getComputerChoice())
    })
})

/* ----- Get human choice via prompt
function getHumanChoice() {
    let humanChoice = prompt("Choose from the following: rock, paper, scissors");
    return humanChoice;
};
*/

function playRound(humanChoice, computerChoice) {
    let computerIncrement = 0;
    let humanIncrement = 0;
    if (humanChoice == 'Rock') {
        if (computerChoice == 'Paper') {
            computerIncrement = 1;
        }
        else if (computerChoice == 'Scissors') {
            humanIncrement = 1;
        }
    }
    else if (humanChoice == 'Paper') {
        if (computerChoice == 'Scissors') {
            computerIncrement = 1;
        }
        else if (computerChoice == 'Rock') {
            humanIncrement = 1;
        }
    }
    else if (humanChoice == 'Scissors') {
        if (computerChoice == 'Rock') {
            computerIncrement = 1;
        }
        else if (computerChoice == 'Paper') {
            humanIncrement = 1;
        }
    }

    humanSelected.textContent = humanChoice;
    computerSelected.textContent = computerChoice;

    roundWinner(humanIncrement, computerIncrement, humanChoice, computerChoice);

    humanTally.textContent = humanScore;
    computerTally.textContent = computerScore;

    gameOver();
    

}

function roundWinner(humanIncrement, computerIncrement, humanChoice, computerChoice) {

    if (humanIncrement == 1) {
        message = `You Win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} destroys ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}.`;
        humanScore += 1;
    }
    else if (computerIncrement == 1) {
        message = `You Lose! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} defeated by ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}.`;
        computerScore += 1;
    }
    else (
        message = `Draw! No one wins.`
    )

    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    console.log("");
}

function gameOver() {
    if (humanScore == 5) {
        message = "GAME OVER! HUMAN WINS";
    }

    else if (computerScore == 5) {
        message = "GAME OVER! COMPUTER WINS"
    }
    promptMessage.textContent = message;
}

/* ---- FUNCTION FOR 5 Games
function playGame() {

    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore) {
        console.log("Human Wins!");
        console.log(`Final Score --> Human: ${humanScore}, Computer: ${computerScore}`);
    }

    else if (humanScore < computerScore) {
        console.log("Computer Wins!");
        console.log(`Final Score --> Human: ${humanScore}, Computer: ${computerScore}`);
    }

    else {
        console.log("Human and Computer Tied!");
        console.log(`Final Score --> Human: ${humanScore}, Computer: ${computerScore}`);
    }
}
*/


//playGame();