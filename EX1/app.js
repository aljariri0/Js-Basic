function welcoming() {
  const se = document.getElementById("member").value;
  const name = document.getElementById("name").value;

  if (se == "student") {
    alert("Welcome " + name + " Scholar");
  } else if (se == "regular") {
    alert("Welcome " + name + " Member");
  } else {
    alert("Welcome " + name);
  }
}

function submit() {
  alert("Your requested book is being reserved");
}

function submit() {
  const name = document.getElementById("name").value;
  const book = document.getElementById("book").value;

  console.log("Name: " + name + "\n" + "book: " + book);
}
