function rock() {
    let playerChoice = 0.333333;
    let computerChoice = Math.random();
    if (playerChoice >= computerChoice) {
        alert("you lose")
    }

};
function paper() {
    let playerChoice = 0.666666
};
function scissors() {
    let playerChoice = 0.999999
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