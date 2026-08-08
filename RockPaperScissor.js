let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
    let choice = prompt("Enter your choice: rock, paper, or scissor");
    let choiceLower = choice.toLowerCase();
    if (choiceLower === "rock"){
        return 0;
    }
    else if (choiceLower === "paper"){
        return 1;
    }
    else if (choiceLower === "scissor"){
        return 2;
    }
    else {
        alert("Invalid choice. Please enter rock, paper, or scissor.");
        return getHumanChoice();
    }
}

function playRound(humanSelection, computerSelection){
    

    if (humanSelection === computerSelection){
        console.log("It's a tie!");
    }
    else if ((humanSelection === 0 && computerSelection === 2) ||
             (humanSelection === 1 && computerSelection === 0) ||
             (humanSelection === 2 && computerSelection === 1)){
        humanScore++;
        console.log("You win this round!");
    }
    else {
        computerScore++;
        console.log("Computer wins this round!");
    }
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}

function playGame(){
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = Math.floor(Math.random() * 3);
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore){
        console.log("You win the game!");
    }
    else if (humanScore < computerScore){
        console.log("Computer wins the game!");
    }
    else {
        console.log("The game is a tie!");
    }
}

playGame();