// Define variables representing car information
let carMake = "Toyota";
let carModel = "Camry";
let carYear = 2018;
let carPrice = 25000;


// Switch statement
switch(carMake) {
    case "Toyota":
        console.log("This is a reliable brand.");
        break;
    case "Ford":
        console.log("Ford produces a variety of vehicles.");
        break;
    case "Chevrolet":
        console.log("Chevrolet is known for its trucks.");
        break;
    default:
        console.log("This car make is not recognized.");
}

// car pricing using if-else
if (carPrice < 20000) {
    console.log("This car is affordable.");
} else if (carPrice >= 20000 && carPrice < 30000) {
    console.log("This car is reasonably priced.");
} else {
    console.log("This car is expensive.");
}
