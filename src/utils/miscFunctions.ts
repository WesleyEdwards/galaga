import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../game/helpers/constants";


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
