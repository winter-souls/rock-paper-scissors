let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber <= 0.3) {
        computerChoice = "Rock";
    } else if (randomNumber <= 0.6) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = window.prompt("Choose: rock, paper, or scissors?");
    //console.log(humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    const playerChoice = humanChoice.toUpperCase()
    //win conditions for player
    if (playerChoice == "ROCK" && computerChoice == "Scissors" ||
    playerChoice == "SCISSORS" && computerChoice == "Paper" ||
    playerChoice == "PAPER" && computerChoice == "Rock") {
        console.log(`You won! ${humanChoice} beats ${computerChoice}!`);

        //tie conditions
     } else if (playerChoice == "ROCK" && computerChoice == "Rock" ||
        playerChoice == "SCISSORS" && computerChoice == "Scissors" ||
        playerChoice == "PAPER" && computerChoice == "Paper"
        ) {
            console.log(`You tied! ${humanChoice} and ${computerChoice} are equal!`);
        } else if (playerChoice == "ROCK" && computerChoice == "Paper" ||
            playerChoice == "SCISSORS" && computerChoice == "Rock" ||
            playerChoice == "PAPER" && computerChoice == "Scissors"
        ){
            console.log(`You lose! ${humanChoice} succumbs to ${computerChoice}.`)

    }
    //switch
    //case player = paper
    //if PC chose paper = tie, else if PC chose scissor = lose, else if PC chose rock = win

    //case player = scissor
    //same shit (increment score variables accordingly)

    //case player = rock
    //same shit
    console.log(humanChoice);
    console.log(computerChoice);
}

//playRound(getHumanChoice(), getComputerChoice());

