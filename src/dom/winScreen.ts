import { createButton, setElementToApp } from "./domHelpers";

type ScoreItem = {
  score: number;
  name: string;
};

export function handleWinUi(score: number, playAgain: () => void) {
  const name = "John Adams";
  const scoresItems = getScores();
  const scores = scoresItems.map((item) => item.score);

  const currHighScore = scores.length === 0 ? 0 : Math.max(...scores);

  scoresItems.push({ score, name });

  scoresItems.sort((a, b) => b.score - a.score);
  if (scoresItems.length > 10) {
    scoresItems.shift();
  }

  setScores(scoresItems);

  const message =
    score > currHighScore
      ? `You got a new High Score of ${score}!`
      : `Name: ${name} -- Score: ${score}`;

  const congrats = document.createElement("h2");
  congrats.setAttribute("id", "congrats");
  congrats.innerHTML = message;

  const highScoreDiv = document.createElement("div");
  highScoreDiv.setAttribute("id", "highScoreDiv");

  const titleDiv = document.createElement("h3");
  titleDiv.innerHTML = "High Scores";
  highScoreDiv.appendChild(titleDiv);

  scoresItems.forEach((score) => {
    const scoresDiv = document.createElement("div");
    scoresDiv.innerHTML = `${score.score} (${score.name})`;
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

function getScores(): ScoreItem[] {
  const scores = localStorage.getItem("scores");
  if (scores) {
    return JSON.parse(scores);
  }
  return [];
}

function setScores(scores: ScoreItem[]) {
  localStorage.setItem("scores", JSON.stringify(scores));
}
