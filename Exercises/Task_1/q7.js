const prompt = require("prompt-sync")();

let age = Number(prompt("Enter your age: "));

if (age > 30 && age < 60) {
  console.log("You are not eligible. You may join other programs.");
}

if (age >= 18 && age <= 30) {
  console.log("You are eligible. Start your application.");
}

if (age < 18) {
  console.log("You may join the kids' program");
}

if (age >= 60) {
  console.log("You may join the senior's program");
}

console.log("Your birth year is: " + (2026 - age));
