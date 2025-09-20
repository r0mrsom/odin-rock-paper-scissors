let humanScore = 0;
let computerScore = 0;
let gameNumber = 0;
let humanChoice;
let message = "";

const documentContainer = document.querySelector("body");
const button = document.querySelectorAll("button");
const humanTally = document.querySelector("#scoreHuman");
const computerTally = document.querySelector("#scoreComputer");
const humanSelected = document.querySelector("#humanSelection");
const computerSelected = document.querySelector("#computerSelection");
const promptMessage = document.querySelector("#prompt");
const humanContainer = document.querySelector(".human");
const computerContainer = document.querySelector(".computer");

promptMessage.textContent = "Welcome to the game! Select from rock, paper and scissors."
humanTally.textContent = humanScore;
computerTally.textContent = computerScore;


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

        
        if (humanScore < 5 && computerScore < 5) {
            console.log(true)
            humanChoice = e.target.id;
            playRound(humanChoice, getComputerChoice())
            gameNumber += 1;
            console.log(`humanChoice after: ${humanChoice} \n Game Number: ${gameNumber}\nhumanScore: ${humanScore}\ncomputerScore: ${computerScore}`);
            
            if (humanScore == 5 || computerScore == 5) {
                const restart = document.createElement("button");
                restart.textContent = "restart";
                restart.style.fontSize = "2vw";
                restart.style.display = "block"
                restart.style.margin = "0 auto"
                restart.style.padding = "1%";
                documentContainer.appendChild(restart);

                restart.addEventListener("click", () => {
                    humanScore = 0;
                    computerScore = 0;
                    gameNumber = 0;
                    message = "";

                    promptMessage.textContent = "Welcome to the game! Select from rock, paper and scissors."
                    humanTally.textContent = humanScore;
                    computerTally.textContent = computerScore;
                    restart.remove();
                })
            }
        }
        else {

        }
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
    

    humanSelected.textContent = humanChoice + " was chosen by Human.";
    computerSelected.textContent = computerChoice + " was chosen by Computer.";

    roundWinner(humanIncrement, computerIncrement, humanChoice, computerChoice);

    humanTally.textContent = humanScore;
    computerTally.textContent = computerScore;

    gameOver();
    

}

function roundWinner(humanIncrement, computerIncrement, humanChoice, computerChoice) {

    if (humanIncrement == 1) {
        message = `You Win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} destroys ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}.`;
        humanScore += 1;
        humanContainer.style.backgroundColor = 'skyblue';
        computerContainer.style.backgroundColor = 'white';
    }
    else if (computerIncrement == 1) {
        message = `You Lose! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} defeated by ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}.`;
        computerScore += 1;
        humanContainer.style.backgroundColor = 'white';
        computerContainer.style.backgroundColor = 'skyblue';
    }
    else {
        message = "Draw! No one wins."
        humanContainer.style.backgroundColor = 'pink';
        computerContainer.style.backgroundColor = 'pink';
    }
}

function gameOver() {
    if (humanScore == 5) {
        message = "GAME OVER! HUMAN WINS.";
    }

    else if (computerScore == 5) {
        message = "GAME OVER! COMPUTER WINS."
    }
    promptMessage.textContent = message;
}