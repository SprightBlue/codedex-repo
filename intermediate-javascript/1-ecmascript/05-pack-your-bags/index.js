const planVacation = (destinationOne, destinationTwo, ...moreDestinations) => {
    console.log(destinationOne);
    console.log(`\n`);
    console.log(destinationTwo);
    console.log(`\n`);
    if (moreDestinations.length > 0) {
        for (const destination of moreDestinations) {
            console.log(destination);
            console.log(`\n`);
        }
    }
}

planVacation("Buenos Aires", "Madrid", "Milan", "New York", "Tokyo");