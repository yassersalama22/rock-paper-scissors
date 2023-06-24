// Create variables to hold score for computer, player and tie rounds
let computerWinsCount = 0;
let playerWinsCount = 0;
let tieCount = 0;

// Add event listener to buttons clicks:
const buttons = document.querySelectorAll(".button");
buttons.forEach(btn => btn.addEventListener("click",playRound));

// Pre: Variables to hold player and computer choices.
let computerChoice = '';
let playerChoice = '';

// 1-   Create array of all possible choices in the game Rock, Paper, Scissors.
const gameChoices = ['rock', 'paper', 'scissors'];
// 2-   Create a function to get the computer choice.
function getComputerChoice() {
    // get random number between 0-2 and use to return random choice for the computer to play.
    const choiceIndex = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    // console.log(choiceIndex);
    return gameChoices[choiceIndex];
}

// Compare the computer choice and the player choice and display a message of the winner.
function playRound(e) {

    computerChoice = getComputerChoice();

    document.querySelector(".computer-choice").textContent = "Computer Choice: " + computerChoice;

    playerChoice = e.target.dataset.value;
    
    calculateResult(computerChoice,playerChoice);

    displayResult();
}

function calculateResult(computerChoice, playerChoice)
{
    if (playerChoice === computerChoice) {
        tieCount += 1;;
    }
    else if (playerChoice === 'rock') {
        if (computerChoice == 'paper') {
            computerWinsCount += 1;
        }
        else {
            playerWinsCount += 1;
        }
    }
    else if (playerChoice === 'paper') {
        if (computerChoice == 'scissors') {
            computerWinsCount += 1;
        }
        else {
            playerWinsCount += 1;
        }
    }
    else if (playerChoice === 'scissors') {
        if (computerChoice == 'rock') {
            computerWinsCount += 1;
        }
        else {
            playerWinsCount += 1;
        }
    }
}

function displayResult() {
    const humanScore = document.querySelector(".human-score");
    const computerScore = document.querySelector(".computer-score");

    humanScore.textContent = playerWinsCount;
    computerScore.textContent = computerWinsCount;
}


/*
// 3-   Prompt the player to enter a choice. 
// 3.a  Create a function to check palyer input is valid and allowed in the game.
function isValidChoice(choice) {
    // check the input is string
    if (typeof (choice) === 'string') {
        // normilize the input and make it lowercase for accurate comparision
        choice = choice.toLowerCase();
        // return true if the choice in the array of the gameChoices
        return gameChoices.indexOf(choice) >= 0 ? true : false;
    }
    return false;
}
*/
/*
// 3.b  A function to handle Promopt player to enter choice, and repeat the prompt if the input is not valid. 
function getPlayerChoice() {
    let playerChoice = '';
    while (!isValidChoice(playerChoice)) {
        // The input transformed to lowercase for accurate comparison.
        playerChoice = prompt('Enter one of these values (Rock | Paper | Scissors) to play:').toLowerCase();
    }
    return playerChoice;
}
*/
// Play five rounds

/*
// Play 5 rounds:
for (let index = 0; index < 5; index++) {
    switch (playRound()) {
        case 'tie':
            //log result to the console
            console.log(`Computer choice ${computerChoice} and you choosed ${playerChoice}, it's a Tie`);
            // increase tie counter
            tieCount += 1;
            break;
        case 'player':
            //log result to the console
            console.log(`Computer choice ${computerChoice} and you choosed ${playerChoice}, you WON!!`);
            //increase player wins counter
            playerWinsCount += 1;
            break;
        case 'computer':
            //log result to the console
            console.log(`Computer choice ${computerChoice} and you choosed ${playerChoice}, you lose!!`);
            //increase computer wins counter
            computerWinsCount += 1;
            break;
    }
}
*/
