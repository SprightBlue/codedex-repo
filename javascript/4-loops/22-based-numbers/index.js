let myNumber = Math.floor(Math.random() * 100) + 1;
let binary = "";

console.log("Decimal Number: " + myNumber);

while (myNumber > 0) {
    binary = (myNumber % 2) + binary;
    myNumber = Math.floor(myNumber / 2);
}

console.log("Binary Number: " + binary);