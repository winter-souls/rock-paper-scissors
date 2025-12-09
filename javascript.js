var gameButtons = document.getElementsByClassName("playRound");

//computer chooses rock/paper/scissors based on a random decimal point value
function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber <= 0.33) {
        computerChoice = "Rock";
    } else if (randomNumber <= 0.66) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

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

    //declare a winner
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game!"); 
    } else {
        console.log("How did you get here? At least ONE of you should have won.");
    }
}

