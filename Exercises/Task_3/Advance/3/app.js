const text = document.querySelector(".div-1");

const left = document.getElementById("left");
const center = document.getElementById("center");
const right = document.getElementById("right");

left.addEventListener("click", function () {
  text.style.textAlign = "left";
});
center.addEventListener("click", function () {
  text.style.textAlign = "center";
});
right.addEventListener("click", function () {
  text.style.textAlign = "right";
});

const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const capital = document.getElementById("capital");
const clear = document.getElementById("clear");

upperCase.addEventListener("click", function () {
  text.style.textTransform = "uppercase";
});
lowerCase.addEventListener("click", function () {
  text.style.textTransform = "lowercase";
});
capital.addEventListener("click", function () {
  text.style.textTransform = "capitalize";
});
clear.addEventListener("click", function () {
  text.innerHTML = "";
});

const color = document.getElementById("color-picker");
const bcolor = document.getElementById("bcolor-picker");

color.addEventListener("input", function () {
  text.style.color = color.value;
});

bcolor.addEventListener("input", function () {
  text.style.backgroundColor = color.value;
});

const fontSize = document.getElementById("font-size");
const fontFamily = document.getElementById("font-family");

fontSize.addEventListener("input", function () {
  text.style.fontSize = fontSize.value + "px";
});

fontFamily.addEventListener("input", function () {
  text.style.fontFamily = fontFamily.value;
});
