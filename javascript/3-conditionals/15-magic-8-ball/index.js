let question = "Is Codédex better than Udemy yet?";

console.log("Question: " + question);

let randomNumber = Math.floor(Math.random() * 9) + 1;
let answer;

if (randomNumber == 1) {
    answer = "Yes - definitely.";
} else if (randomNumber == 2) {
    answer = "It is decidedly so.";
} else if (randomNumber == 3) {
    answer = "Without a doubt.";
} else if (randomNumber == 4) {
    answer = "Reply hazy, try again.";
} else if (randomNumber == 5) {
    answer = "Ask again later.";
} else if (randomNumber == 6) {
    answer = "Better not tell you now.";
} else if (randomNumber == 7) {
    answer = "My sources say no.";
} else if (randomNumber == 8) {
    answer = "Outlook not so good.";
} else if (randomNumber == 9) {
    answer = "Very doubtful.";
}

console.log("Magic 8-Ball: " + answer);