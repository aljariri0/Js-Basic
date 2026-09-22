const prompt = require("prompt-sync")();

function lower_to_upper(word, status) {
  let Cstring = "";

  ascii = word.charCodeAt(0);

  if (status == "upper") {
    if (ascii >= 97 && ascii <= 122) return String.fromCharCode(ascii - 32);
    else {
      return word;
    }
  } else if (status == "lower") {
    if (ascii >= 65 && ascii <= 90) return String.fromCharCode(ascii + 32);
    else {
      return word;
    }
  }
}

function Camel_Case(word) {
  let Cstring = "";

  if (word.length == 0) {
    return "";
  }

  Cstring += lower_to_upper(word[0], "upper");

  for (let i = 1; i < word.length - 1; i++) {
    if (word[i] == " ") {
      Cstring += lower_to_upper(word[i + 1], "upper");
      i++;
    } else {
      Cstring += lower_to_upper(word[i], "lower");
    }
  }

  return Cstring + lower_to_upper(word[word.length - 1],"lower");
}

// let word = prompt("Enter your word: ");
word = "coding academy by Orange";
console.log(Camel_Case(word));
