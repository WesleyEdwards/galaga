import { createButton, setElementToApp } from "./domHelpers";

export function handleWinUi(score: number, playAgain: () => void) {
  const scores = getScores();

  const currHighScore = scores.length === 0 ? 0 : Math.max(...scores);

  scores.push(score);

  scores.sort((a, b) => b - a);
  if (scores.length > 10) {
    scores.shift();
  }
  setScores(scores);

  const message =
    score > currHighScore
      ? `You got a new High Score of ${score}!`
      : `Score: ${score}`;

  const congrats = document.createElement("h2");
  congrats.setAttribute("id", "congrats");
  congrats.innerHTML = message;

  const highScoreDiv = document.createElement("div");
  highScoreDiv.setAttribute("id", "highScoreDiv");

  const titleDiv = document.createElement("h3");
  titleDiv.innerHTML = "High Scores";
  highScoreDiv.appendChild(titleDiv);

  scores.forEach((score, index) => {
    const scoresDiv = document.createElement("div");
    scoresDiv.innerHTML = `${index + 1}: ${score}`;
    highScoreDiv.appendChild(scoresDiv);
  });

  const scoreBoard = document.createElement("div");
  scoreBoard.setAttribute("class", "infoContainer onBackground");

  const playButton = createButton("playAgain", "Play Again", playAgain);

  scoreBoard.appendChild(congrats);
  scoreBoard.appendChild(highScoreDiv);
  scoreBoard.appendChild(playButton);

  setElementToApp(scoreBoard);
}

function getScores(): number[] {
  const scores = localStorage.getItem("blue-scores");
  if (scores) {
    return JSON.parse(scores);
  }
  return [];
}

function setScores(scores: number[]) {
  localStorage.setItem("blue-scores", JSON.stringify(scores));
}
