// For Loop
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
}

// While Loop
console.log("\nWhile Loop:");
let count = 1;
while (count <= 5) {
    console.log("Count: " + count);
    count++;
}

// Do-While Loop
console.log("\nDo-While Loop:");
let num = 1;
do {
    console.log("Number: " + num);
    num++;
} while (num <= 5);

// For-In Loop (Iterating over object properties)
console.log("\nFor-In Loop (Iterating over object properties):");
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// For-Of Loop (Iterating over arrays and iterable objects)
console.log("\nFor-Of Loop (Iterating over arrays and iterable objects):");
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}
