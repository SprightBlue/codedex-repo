const goodreadsInfo = {
    currentlyReading: [
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien"
        },
        {
            title: "Mr. Jeckyl and Mr. Hyde",
            author: "Robert Louis Stevenson"
        }
    ],

    wantToRead: [
        {
            title: "Lord of the Rings",
            author: "J.R.R. Tolkien"
        }
    ]
}

const addNewBooks = (books, ...additionalBooks) => [...books, ...additionalBooks];

const showGoodreadsInfo = (info) => {
    console.log(`Currently Reading:`);
    for (const book of info.currentlyReading) {
        console.log(`${book.title} by ${book.author}`);
    }
    console.log(`\n`);
    console.log("Want to Read:");
    for (const book of info.wantToRead) {
        console.log(`${book.title} by ${book.author}`);
    }
}

let newBooks = [{
    title: "The Silmarillion",
    author: "J.R.R. Tolkien"
}, {
    title: "Song of Ice and Fire",
    author: "George R.R. Martin"
}];

goodreadsInfo.currentlyReading = addNewBooks(goodreadsInfo.currentlyReading, ...newBooks);

showGoodreadsInfo(goodreadsInfo);