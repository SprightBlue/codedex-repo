const musicPlaylist = [
    "Tom Sawyer",
    "Sabotage",
    "I Wanna Dance With Somebody",
    "Don't Speak",
    "Bulls On Parade",
    "Thriller",
    "The Breaks",
    "Brick",
    "Aeroplane Over the Sea",
    "Tubthumping"
];

musicPlaylist.shift();
musicPlaylist.pop();

musicPlaylist.push("Baby Be Mine");
musicPlaylist.unshift("Something About Us", "The Game of Love");

console.log(musicPlaylist);