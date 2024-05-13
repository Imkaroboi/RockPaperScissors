let playerScore = 0;
let computerScore = 0;
function rock() {
    let playerChoice = 0.333333;
    let computerChoice = Math.random();
    if (playerChoice >= computerChoice) {
        alert("tie")
        document.getElementById("text").innerHTML = "Tie"
    } else if (computerChoice > 0.333333 && computerChoice < 0.666666) {
        alert("You Win, rock beats scissors!")
         playerScore++
        document.getElementById("yourScore").innerHTML = `Your Score - ${playerScore}`
        document.getElementById("text").innerHTML = "You Win"
    } else {
        computerScore++
        document.getElementById("compScore").innerHTML = `Computer Score - ${computerScore}`
        alert("You Lose, Rock loses to Paper!")
        document.getElementById("text").innerHTML = "You Lose";
    }

};
function paper() {
    let playerChoice = 0.666666
    let computerChoice = Math.random();
    if (playerChoice >= computerChoice && computerChoice > 0.333333){
        alert("tie")
        document.getElementById("text").innerHTML = "Tie";
    } else if (computerChoice <= 0.333333) {
        alert("Computer played rock, you win!");
        playerScore++
        document.getElementById("yourScore").innerHTML = `Your Score - ${playerScore}`;
        document.getElementById("text").innerHTML = "You Win";
    } else {
        alert("Computer played scissors, you lose!")
        computerScore++
        document.getElementById("compScore").innerHTML = `Computer Score - ${computerScore}`
        document.getElementById("text").innerHTML = "You Lose";
    }
};
function  scissors() {
    let playerChoice = 0.999999
    let computerChoice = Math.random();
    if (computerChoice <= 0.333333) {
        alert("You Lose, computer played rock!")
        computerScore++
        document.getElementById("compScore").innerHTML = `Computer Score - ${computerScore}`
        document.getElementById("text").innerHTML = "You Lose";
    } else if (computerChoice > 0.333333 && computerChoice <= 0.666666) {
        alert("You Win, computer played Paper!");
        playerScore++
        document.getElementById("yourScore").innerHTML = `Your Score - ${playerScore}`;
        document.getElementById("text").innerHTML = "You Win";
    } else {
        alert("tie");
        document.getElementById("text").innerHTML = "Tie";
    }
};
let computer;
function choice() {
let computerChoice = Math.random();
if (computerChoice < 0.3333333) {
    let computer = "rock"
} else if (computerChoice > 0.33333333 && computerChoice < 0.66666666) {
    let computer = "paper"
} else {let computer = "scissors"}
}
/* rock is 0.333333 or less, paper is 0.333333 - 0.666666, 
and scissors is anything else or > 0.666666*/