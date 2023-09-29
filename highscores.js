var highscoresList = document.getElementById("highscores");
// get scores from LS
var scores = JSON.parse(localStorage.getItem("highscores"));

// dynamically build the scores list items and append to list
for (let i = 0; i < scores.length; i++) {
  var scoresItem = document.createElement("li");
  scoresItem.textContent = `${scores[i].initials} - ${scores[i].score}`;
  highscoresList.append(scoresItem);
}
