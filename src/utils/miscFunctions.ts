import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../game/helpers/constants";

export function displayCount(
  timeElapsed: number,
  canvas: CanvasRenderingContext2D
) {
  const count = Math.floor((4000 - timeElapsed) / 1000);

  canvas.font = `${10}px Arial`;
  // canvas.fillStyle = colorPalette.countDown;
  canvas.textAlign = "center";

  if (timeElapsed > 3000 && timeElapsed < 4000) {
    canvas.fillText("GO!", CANVAS_WIDTH / 2, CANVAS_HEIGHT * 0.7);
  }
  if (count > 0) {
    canvas.fillText(count.toString(), CANVAS_WIDTH / 2, CANVAS_HEIGHT * 0.7);
  }
}

export type ScoreRecord = {
  name?: string;
  score: number;
};

const scoreStorageName = "galaga-scores";

export function addScoreToStorage(name: string, score: number) {
  const scores: ScoreRecord[] = getScoresFromStorage();
  scores.push({ name, score });
  scores.sort((a, b) => b.score - a.score);
  if (scores.length > 10) scores.pop();
  localStorage.setItem(scoreStorageName, JSON.stringify(scores));
}

export function getScoresFromStorage(): ScoreRecord[] {
  const scores = localStorage.getItem(scoreStorageName);
  return scores ? JSON.parse(scores) : [];
}

export function removeAllScores() {
  localStorage.removeItem(scoreStorageName);
}

export function fetchImage(): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src =
      "https://user-images.githubusercontent.com/97990557/221115615-a28fc95a-755b-452b-9699-0d0b12edcb42.JPG";
    image.onload = () => resolve(image);
    image.onerror = () => reject();
  });
}
