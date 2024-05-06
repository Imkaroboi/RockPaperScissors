function rock() {
    choice()
};
function paper() {

};
function scissors() {

};
function choice() {
let computerChoice = Math.random();
if (computerChoice < 0.3333333) {
    console.log("rock");
} else if (computerChoice > 0.33333333 && computerChoice < 0.66666666) {
    console.log("paper")
} else (console.log("scissors"))
}