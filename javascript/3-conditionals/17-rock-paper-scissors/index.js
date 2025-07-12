/*
*    rock => 0
*    paper => 1
*    scissors => 2
*/

let player = Math.floor(Math.random() * 3);
let computer = Math.floor(Math.random() * 3);

let playerPicked;
let computerPicked;

if (player == 0) {
    playerPicked = "rock";
}
else if (player == 1) {
    playerPicked = "paper";
} else {
    playerPicked = "scissors";
}

console.log("Player picked: " + playerPicked);

if (computer == 0) {
    computerPicked = "rock";
} else if (computer == 1) {
    computerPicked = "paper";
} else {
    computerPicked = "scissors";
}

console.log("Computer picked: " + computerPicked);

if (playerPicked == computerPicked) {
    console.log("It's a tie!");
} else if (playerPicked == "rock" && computerPicked == "scissors") {
    console.log("The player won!");
} else if (playerPicked == "paper" && computerPicked == "rock") {
    console.log("The player won!");
} else if (playerPicked == "scissors" && computerPicked == "paper") {
    console.log("The player won!");
} else {
    console.log("The computer won!");
}