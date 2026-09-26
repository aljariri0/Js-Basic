const paragraph1 = document.querySelectorAll("p")[0];
const words = paragraph1.textContent.split(" ");

const head = document.querySelector("h1");
head.textContent = "Heading, Count = " + words.length;

for (let i = 0; i < words.length; i++) {
  if (words[i].length >= 8) {
    words[i] = `<span style="background-color: yellow;">${words[i]}</span>`;
  }
}
paragraph1.innerHTML = words.join(" ");

const link = document.createElement("a");
link.textContent = "Source";
link.href = "https://google.com";
link.target = "_blank";
paragraph1.after(link);

const paragraph2 = document.querySelectorAll("p")[1];
const sentences = paragraph2.textContent.split(". ");
paragraph2.innerHTML = sentences.join(`.<br>`);
