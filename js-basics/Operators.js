let fruitName = "apple";
let fruitColor = "red";
let fruitQuantity = 10;
let fruitPrice = 1.5;

// Logical AND operator (&&)
if (fruitName === "apple" && fruitColor === "red") {
    console.log("This is a red apple.");
} else {
    console.log("This is not a red apple.");
}

// Logical OR operator (||)
if (fruitName === "apple" || fruitName === "banana") {
    console.log("This is either an apple or a banana.");
} else {
    console.log("This is not an apple nor a banana.");
}

// Logical NOT operator (!)
if (!(fruitQuantity < 20)) {
    console.log("There are plenty of fruits available.");
} else {
    console.log("There are not enough fruits available.");
}
