function rock() {
    let playerChoice = "rock"
    if (playerChoice === computer) {
        alert("hi")
    }
};
function paper() {

};
function scissors() {

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