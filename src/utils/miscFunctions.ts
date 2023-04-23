import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../game/helpers/constants";


export type ScoreRecord = {
  name?: string;
  score: number;
};

export type StatRecord = {
  shotsFired: number;
  opponentsHit: number;
  hitRatio: string;
}

const scoreStorageName = "galaga-scores";

export function addScoreToStorage(name: string, score: number) {
  const scores: ScoreRecord[] = getScoresFromStorage();
  scores.push({ name, score });
  scores.sort((a, b) => b.score - a.score);
  if (scores.length > 10) scores.pop();
  localStorage.setItem(scoreStorageName, JSON.stringify(scores));
}

export function addStatsToStorage(shotsFired: number, opponentsHit: number) {
  localStorage.removeItem("shotsFired");
  localStorage.removeItem("opponentsHit");
  localStorage.setItem("shotsFired", shotsFired.toString());
  localStorage.setItem("opponentsHit", opponentsHit.toString());
}

export function getScoresFromStorage(): ScoreRecord[] {
  const scores = localStorage.getItem(scoreStorageName);
  return scores ? JSON.parse(scores) : [];
}

export function getStatistics(): StatRecord {
  const shotsFired = localStorage.getItem("shotsFired");
  const opponentsHit = localStorage.getItem("opponentsHit");
  return {
    shotsFired: shotsFired ? parseInt(shotsFired) : 0,
    opponentsHit: opponentsHit ? parseInt(opponentsHit) : 0,
    hitRatio: shotsFired && opponentsHit ? (parseInt(opponentsHit) / parseInt(shotsFired)).toFixed(3) : "0",
  };
} 

export function removeAllScores() {
  localStorage.removeItem(scoreStorageName);
}
