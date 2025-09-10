let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if (randomNumber == 1) {
        return "rock";
    }
    else if (randomNumber == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
};

function getHumanChoice() {
    let humanChoice = prompt("Choose from the following: rock, paper, scissors");
    return humanChoice;
};

function playRound(humanChoice, computerChoice) {
    let formatHumanChoice = humanChoice.toLowerCase();
    let computerIncrement = 0;
    let humanIncrement = 0;
    if (humanChoice == 'rock') {
        if (computerChoice == 'paper') {
            computerIncrement = 1;
        }
        else if (computerChoice == 'scissors') {
            humanIncrement = 1;
        }
    }
    else if (humanChoice == 'paper') {
        if (computerChoice == 'scissors') {
            computerIncrement = 1;
        }
        else if (computerChoice == 'rock') {
            humanIncrement = 1;
        }
    }
    else if (humanChoice == 'scissors') {
        if (computerChoice == 'rock') {
            computerIncrement = 1;
        }
        else if (computerChoice == 'paper') {
            humanIncrement = 1;
        }
    }
    if (humanIncrement == 1) {
        console.log(`You Win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}.`)
        humanScore += 1;
    }
    else if (computerIncrement == 1) {
        console.log(`You Lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}.`)
        computerScore += 1;
    }
    else (
        console.log(`Draw! No one wins.`)
    )
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
}

function playGame() {

    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
}

playGame();