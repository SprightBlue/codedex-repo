pig = {
    name: "Porky",
    type: "pig",
    age: 2,
    makeSound() {
        return this.name + " is a " + this.age + " year old " + this.type + " that goes oink!";
    }
}

sheep = {
    name: "Dolly",
    type: "sheep",
    age: 5,
    makeSound() {
        return this.name + " is a " + this.age + " year old " + this.type + " that goes baa!";
    }
}

dog = {
    name: "Benny",
    type: "dog",
    age: 10,
    makeSound() {
        return this.name + " is a " + this.age + " year old " + this.type + " that goes woof!";
    }
}

console.log(pig.makeSound());
console.log("\n");
console.log(sheep.makeSound());
console.log("\n");
console.log(dog.makeSound());