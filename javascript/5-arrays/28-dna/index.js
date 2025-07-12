const dnaPieces = ["A", "C", "G", "T"];
let myDNA = [];

for (let i = 0; i < 24; i++) {
    let element = "";
    for (let j = 0; j < 3; j++) {
        piece = Math.floor(Math.random() * dnaPieces.length);
        element = element + dnaPieces[piece];       
    }
    myDNA.push(element);
}

console.log(myDNA);