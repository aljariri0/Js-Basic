const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function () {
  const content = input.value + "  ";
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listButton = document.createElement("button");

  listButton.textContent = "Delete";
  listText.textContent = content;

  listItem.appendChild(listText);
  listItem.appendChild(listButton);

  list.appendChild(listItem);

  listButton.addEventListener("click", function () {
    list.removeChild(listItem);
  });
});
