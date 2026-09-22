const prompt = require("prompt-sync")();

function get_larger(n1, n2) {

  n1 = Number(n1);
  n2 = Number(n2);
  if (n1 <= n2) {
    return n2;
  } else {
    return n1;
  }
}

let n1 = prompt("Enter the first number: ");
let n2 = prompt("Enter the second number: ");

console.log(get_larger(n1, n2));
