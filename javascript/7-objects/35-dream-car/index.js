const message = (car) => {
    let used = car.used ? "used" : "new";
    return "I'm looking for a " + car.year + " " + car.model + " that is " + used + ".";
};

const car = {};

car.model = "Honda";
car.year = 2024;
car.color = "red";
car.used = true;

console.log(message(car));

car.used = false;

console.log("\n");
console.log(message(car));