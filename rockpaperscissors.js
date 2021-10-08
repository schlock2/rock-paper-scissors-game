
let running = true;
while (running == true){
    let result;
    let humanScore = 0;
    let computerScore = 0;
    while (computerScore < 3 && humanScore < 3)
    {
        let playerSelection = playerMove();
        let computerSelection = computerMove();
        console.log(computerSelection);
        result = playRound(playerSelection,computerSelection);
        //increment score based on result
        if (result === "computer"){
            computerScore += 1;
        }
        else if (result === "human"){
            humanScore += 1;
        }
        console.log("score::computers - " + computerScore + " humans - " + humanScore);
    }
    //We declare the winner to the player
    if (computerScore === 3) {
        console.log("the robot overlords have won! did i say overlords? i meant protectors")
    }
    else if (humanScore === 3) {
        console.log("humanity has beaten the metal menace!")
    }
    //ask if they wish to play again, if they don't we exit
    //if they do we loop again
    do {
        console.log("do you want to play again? enter 'y' or 'n");
        playerSelection = prompt();
    } while ((playerSelection != 'y') && (playerSelection != 'n'))
    if (playerSelection == 'y'){
        console.log("bring it on human >:)");
    }
    else if (playerSelection == 'n'){
        console.log("what's the matter, pottah? scared?");
        running = false;
    }
}
console.log("fin");

function computerMove(){
    //generate a random number between 0 and 2 to decide which move to make
    let computerInput = Math.floor(Math.random() * 3);
    //return the move value
    if (computerInput == 0){
        computerInput = "scissors";
    }
    else if (computerInput == 1){
        computerInput = "paper";
    }
    else if (computerInput == 2){
        computerInput = "rock";
    }
    return computerInput;
}

function playerMove(){
    //allow the player to enter their move
    do {
        console.log("enter a move!")
        playerInput = prompt().toLowerCase();
    } while ((playerInput != 'scissors') && (playerInput != 'rock') && (playerInput != 'paper'))
    //return the correct value for the move
    if (playerInput == 'scissors'){
        return 'scissors';
    }
    else if (playerInput == 'rock'){
        return 'rock';
    }
    else if (playerInput == 'paper'){
        return 'paper';
    }
}

function playRound(player1Move,player2Move){
    let result;
    //deciding the winner
    if (player1Move == player2Move){
        //result:Draw
        result="draw";
    }
    else if
    (
        (player1Move === 'rock' && player2Move === 'paper') ||
        (player1Move === 'paper' && player2Move === 'scissors') ||
        (player1Move === 'scissors' && player2Move === 'rock')
    )
    {
        //computer won
        result = "computer";
    }
    else if 
    (
        (player1Move === 'paper' && player2Move === 'rock') ||
        (player1Move === 'scissors' && player2Move === 'paper') ||
        (player1Move === 'rock' && player2Move === 'scissors')
    )
    {
        //human won
        result = "human";
    }
    //return result
    console.log(result);
    return result;
}
