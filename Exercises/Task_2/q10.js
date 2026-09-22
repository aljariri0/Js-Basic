const prompt = require("prompt-sync")();

do {
  var n = Number(prompt("Enter a number between 0 to 200? "));

  if (n < 0 || n > 100) {
    console.log("Invalid number, try again");
  }
} while (n < 0 || n > 100);
