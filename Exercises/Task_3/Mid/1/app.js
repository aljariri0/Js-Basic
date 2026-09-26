const userName = document.getElementById("username");
const password = document.getElementById("pass");
const repassword = document.getElementById("repass");
const button = document.querySelector("button");

const reqItems = document.getElementsByClassName("req");

for (let i = 0; i < 3; i++) {
  reqItems[i].textContent = "Required";
  reqItems[i].style.color = "red";
  reqItems[i].style.fontSize = "10px";
  reqItems[i].style.visibility = "hidden";
}

function checkInputs() {
  userFilled = userName.value != "";
  passFilled = password.value != "";
  repassFilled = repassword.value != "";
  passwordMatch = password.value == repassword.value;

  if (userFilled && passFilled && repassFilled && passwordMatch) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

userName.addEventListener("input", function () {
  if (userName.value == "") {
    reqItems[0].style.visibility = "visible";
  }

  if (userName.value != "") {
    reqItems[0].style.visibility = "hidden";
  }

  checkInputs();
});

password.addEventListener("input", function () {
  if (password.value == "") {
    reqItems[1].style.visibility = "visible";
  }

  if (password.value != "") {
    reqItems[1].style.visibility = "hidden";
  }
  checkInputs();
});

repassword.addEventListener("input", function () {
  if (password.value != repassword.value) {
    reqItems[2].textContent = "Password does not match";
    reqItems[2].style.visibility = "visible";
  } else {
    reqItems[2].style.visibility = "hidden";
  }
  checkInputs();
});

button.addEventListener("click", function (event) {
  event.preventDefault();
  const s = document.createElement("p");
  s.innerHTML = "successful user registration";
  document.getElementById("form").appendChild(s);
});
