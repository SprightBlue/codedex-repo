for (let i = 1; i < 50; i++) {
    if (i == 42) {
        console.log(i);
        break;
    } else {
        if (i % 2 == 0) {
            console.log(i);
        } else {
            continue;
        }
    }
}