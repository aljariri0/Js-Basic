const username = document.getElementById("username");
const membership = document.getElementById("membership");
const genre = document.getElementById("genre");
const title = document.getElementById("title");
const submit = document.querySelector("button");

function ValidateUserData() {
  if (username.value != "" && title.value != "") {
    return [username.value, membership.value, genre.value, title.value];
  }
}

function displayUserData() {
  const userInfo = ValidateUserData();
  const p = document.createElement("pre");
  p.textContent =
    "Username: " +
    userInfo[0] +
    "\n" +
    "Memebership: " +
    userInfo[1] +
    "\n" +
    "Book Genre: " +
    userInfo[2] +
    "\nBook Title: " +
    userInfo[3];
  details.appendChild(p);
}

const details = document.getElementsByClassName("result-card")[0];

submit.addEventListener("click", function (event) {
  event.preventDefault();
  details.innerHTML = "";
  displayUserData();
});
