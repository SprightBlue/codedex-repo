const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png"
];

const captionsArray = [
    "When you realize you forgot to save your work",
    "When you finally understand the concept",
    "When you find the perfect meme for your group chat",
    "When you ace the test you thought you failed",
    "When you remember it's Friday",
    "When you see your crush in the hallway",
    "When you finish a project ahead of schedule",
    "When you find out there's no homework tonight",
];

const randomMeme = document.getElementById("random-meme");
const randomCaption = document.getElementById("random-caption");
const generatorButton = document.getElementById("generator-button");

generatorButton.addEventListener("click", () => {
    let memeIndex = Math.floor(Math.random() * memeArray.length);
    let captionIndex = Math.floor(Math.random() * captionsArray.length);
    randomMeme.src = memeArray[memeIndex];
    randomCaption.innerHTML = captionsArray[captionIndex];
});