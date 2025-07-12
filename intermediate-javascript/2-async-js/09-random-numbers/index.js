const randomNumberPromise = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    
    return new Promise((resolve, reject) => {
        if (randomNumber < 5) {
            resolve(`Success! The random number is ${randomNumber}`);
        } else {
            reject(`Error! The random number is ${randomNumber}`);
        }
    });
};

const generateBtn = document.getElementById("generateButton");

generateBtn.addEventListener("click", randomNumberPromise);