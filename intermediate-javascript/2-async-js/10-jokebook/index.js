const jokeContainer = document.getElementById("jokeContainer");
const getJokeBtn = document.getElementById("getJokeBtn");

function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            jokeContainer.innerHTML = `<p>${data.setup}</p><p>${data.punchline}</p>`;
        })
        .catch(error => {   
            console.error(`Error fetching joke: ${error}`);
            jokeContainer.innerHTML = `<p>Failed to fetch a joke. Please try again later.</p>`;
        });
}

getJokeBtn.addEventListener("click", fetchJoke);