function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    console.log(randomNumber);
    if (randomNumber == 1) {
        return "rock";
    }
    else if (randomNumber == 2) {
        return "paper";
    }
    else {
        return "scissor";
    }
};