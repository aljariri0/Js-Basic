const prompt = require("prompt-sync")();

function ascending_order(n1, n2) {
  n1 = Number(n1);
  n2 = Number(n2);
  if (n1 <= n2) {
    return n1.toString() + " " + n2.toString();
  } else {
    return n2.toString() + " " + n1.toString();
  }
}

let n1 = Number(prompt("Enter a number: "));
let n2 = Number(prompt("Enter a number: "));

console.log(ascending_order(n1, n2));
