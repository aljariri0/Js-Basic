const name = document.getElementById("name");
const score = document.getElementById("score");
const table = document.getElementById("scores_table");

const names = [];
const scores = [];

const buttons = document.querySelectorAll("button");

function calcAverage() {
  if (scores.length == 0) return [0, "", ""];

  let sum = 0;
  let max = scores[0];
  let max_name = "";

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];

    if (scores[i] > max) {
      max = scores[i];
      max_name = names[i];
    }
  }

  return [sum / scores.length, max, max_name];
}

function addScore(name, score) {
  names.push(name);
  scores.push(score);
}

function displayResults() {
  const results_section = document.getElementById("results");
  results_section.innerHTML = "<h2>Results</h2>";

  const [average, max, max_name] = calcAverage();
  const averageP = document.createElement("p");
  averageP.textContent = "Average Score = " + average;

  const hScoreP = document.createElement("p");
  hScoreP.textContent = "High Score = " + max_name + " with a score of " + max;

  results_section.appendChild(averageP);
  results_section.appendChild(hScoreP);
}

function displayScores() {
  table.innerHTML = "<tr><th>Name</th><th>Score</th></tr>";
  for (let i = 0; i < scores.length; i++) {
    let newRow = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");

    col1.textContent = names[i];
    col2.textContent = scores[i];

    newRow.appendChild(col1);
    newRow.appendChild(col2);

    table.append(newRow);
  }
}

buttons[0].addEventListener("click", function () {
  if (name.value == "" || score.value < 0 || score.value > 100) {
    alert("You must enter a name and a valid score");
    return;
  }
  addScore(name.value, Number(score.value));
  name.value = "";
  score.value = "";
});

buttons[1].addEventListener("click", function () {
  displayResults();
});

buttons[2].addEventListener("click", function () {
  displayScores();
});
