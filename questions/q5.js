const prompt = require("prompt-sync")();

function sum(n1, n2) {
  return n1 + n2;
}

let n1 = prompt("Enter the first number: ");
let n2 = prompt("Enter the second number: ");

console.log(sum(n1, n2));

// There is no error,
//  but the problem is the two numbers do not sum up because they act like strings.
