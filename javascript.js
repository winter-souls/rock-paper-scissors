//computer chooses rock/paper/scissors based on a random decimal point value
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

//human gets window prompt that asks them to choose R/P/S
function getHumanChoice() {
    let humanChoice = window.prompt("Choose: rock, paper, or scissors?");
    return humanChoice;
}

function playGame() {
    //score variables
    let humanScore = 0;
    let computerScore = 0;

    //plays one round of R/P/S
    function playRound(humanChoice, computerChoice) {
        //switch all human inputs to upper case for easy comparison
        const playerChoice = humanChoice.toUpperCase()

        //win conditions for player
        if (playerChoice == "ROCK" && computerChoice == "Scissors" ||
        playerChoice == "SCISSORS" && computerChoice == "Paper" ||
        playerChoice == "PAPER" && computerChoice == "Rock") {
            console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
            humanScore++

            //tie conditions
        } else if (playerChoice == "ROCK" && computerChoice == "Rock" ||
            playerChoice == "SCISSORS" && computerChoice == "Scissors" ||
            playerChoice == "PAPER" && computerChoice == "Paper"
            ) {
                console.log(`You tied! ${humanChoice} and ${computerChoice} are equal!`);

            //lose conditions
            } else if (playerChoice == "ROCK" && computerChoice == "Paper" ||
                playerChoice == "SCISSORS" && computerChoice == "Rock" ||
                playerChoice == "PAPER" && computerChoice == "Scissors"
            ){
                console.log(`You lose! ${humanChoice} succumbs to ${computerChoice}.`);
                computerScore++
        }
        //logs both sets of scores each round
        console.log(`Player Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    //plays five rounds
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
}

