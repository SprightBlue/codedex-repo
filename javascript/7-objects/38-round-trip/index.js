departTripTicket = {
    name: "Pacolo",
    from: "Buenos Aires",
    to: "Milan",
    businessClass: false,
    upgrade() {
        if (this.businessClass) {
            return "Your ticket is already business class!";
        } else {
            this.businessClass = true;
        }
    }
}

returnTripTicket = {
    name: "Pacolo",
    from: "Milan",
    to: "Buenos Aires",
    businessClass: true,
    upgrade() {
        if (this.businessClass) {
            return "Your ticket is already business class!";
        } else {
            this.businessClass = true;
        }
    }
}

departTripTicket.upgrade();
console.log(returnTripTicket.upgrade());
console.log("\n");

console.log(departTripTicket);
console.log(returnTripTicket);
console.log("\n");

departTripTicket.leaveTime = 10;
departTripTicket.arriveTime = 22;
departTripTicket.flightTime = function () {
    return departTripTicket.arriveTime - departTripTicket.leaveTime;
}

returnTripTicket.leaveTime = 8;
returnTripTicket.arriveTime = 18;
returnTripTicket.flightTime = function () {
    return returnTripTicket.arriveTime - returnTripTicket.leaveTime;
}

console.log(departTripTicket.flightTime());
console.log(returnTripTicket.flightTime());