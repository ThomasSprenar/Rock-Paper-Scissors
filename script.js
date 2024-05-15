// Logic for computer
var getComputerChoice = function() {
    var choiceArr = ["rock", "paper", "scissors"];
    var computerChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return computerChoice;
};

// Logic for human
var getHumanChoice = function() {
    var humanChoice;
    do {
        humanChoice = prompt("Choose what you want (rock, paper, scissors) or type 'exit' to exit: ");
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "exit") {
            return null;    // Return null to indicate quitting the game
        }
    } while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors");
    return humanChoice;
};

// Declaration of player score variables
var humanScore = 0;
var computerScore = 0;
var round = 0;

// Logic for playing one round
var playRound = function() {
    // Check if five laps have passed for the end
    if (round === 5) {
        return false;
    };
    // Check if user wants to exit
    if (humanChoice === null) {
        return false;   // Return false to indicate exiting the game
    }

    var humanChoice = getHumanChoice();
    
    
    var computerChoice = getComputerChoice();

    round++;
    console.log("round: " + round)
    console.log("You have chosen: " + humanChoice);
    console.log("The computer chose: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("Draw!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You are a winner!");
        humanScore++;
    } else {
        console.log("You are a loser!");
        computerScore++;
    }
    
    return true;    // Return true to indicate the round has been played
};

// Play rounds until the user decides to quit
var playGame = function() {

    while (true) {
        var roundResult = playRound();
        if (!roundResult) {
            break;  // If playRound returns false (indicating quitting the game), break out of the loop
        } 
    
    }

};

playGame();

// Display final scores
console.log(" ");
console.log("Final Scores:");
console.log("Human: " + humanScore);
console.log("Computer: " + computerScore);