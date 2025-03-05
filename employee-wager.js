const prompt = require('prompt-sync')();

// UC1
const IS_ABSENT = 0; // Constant value to represent presence

// Generate a random number (0 or 1)
let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck === IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is Present");
}
