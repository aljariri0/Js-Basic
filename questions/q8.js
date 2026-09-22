const prompt = require("prompt-sync")();

function lower_to_upper(word) {
  let Cstring = "";

  for (let i = 0; i < word.length; i++) {
    ascii = word[i].charCodeAt(0);

    if (ascii >= 65 && ascii <= 90) {
      Cstring += String.fromCharCode(ascii + 32);
    }

    if (ascii >= 97 && ascii <= 122) {
      Cstring += String.fromCharCode(ascii - 32);
    }
  }

  return Cstring;
}

let word = prompt("Enter your word: ");
console.log(lower_to_upper(word));
