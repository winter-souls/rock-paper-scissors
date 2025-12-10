// UI buttons for game
var gameButtons = document.getElementsByClassName("playRound");

//score variables
let humanScore = 0;
let computerScore = 0;

//Results table variable
let resultsTable = document.getElementById("results");

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

for (button of gameButtons) {
    button.onclick = (e) => {
        var buttonPressed = e.target.value;
        var choiceMade = buttonPressed.toUpperCase();
        playRound(choiceMade, getComputerChoice());
    }
}

    //plays one round of R/P/S
    function playRound(humanChoice, computerChoice) {
        var playerChoice = humanChoice;
        
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

        // Insert new row  and data to the results table
        let row = resultsTable.insertRow(-1);
        let playerDecision = row.insertCell(0);
        let computerDecision = row.insertCell(1);
        let pScore = row.insertCell(2);
        let cScore = row.insertCell(3);

        playerDecision.innerHTML = playerChoice;
        computerDecision.innerHTML = computerChoice;
        pScore.innerHTML = humanScore;
        cScore.innerHTML = computerScore;



    //declare a winner
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game!"); 
    } else {
        console.log("How did you get here? At least ONE of you should have won.");
    }
}

