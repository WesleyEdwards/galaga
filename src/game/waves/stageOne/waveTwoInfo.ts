import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates, Path } from "../../helpers/types";

const conversions = getConversions();

export const opponentW2S1 = {x: -OPPONENT_WIDTH, y: conversions.y * 450};
const butterflyEndW2S1 = [
  // Left twobutterflies
  { x: conversions.x * (215 - 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (2 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 - 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (3 * OPPONENT_HEIGHT) },
  // Right two butterflies
  { x: conversions.x * (215 + 2 * (10 + OPPONENT_WIDTH)), y: conversions.y * (2 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 2 * (10 + OPPONENT_WIDTH)), y: conversions.y * (3 * OPPONENT_HEIGHT) },
]
const butterflyPaths = butterflyEndW2S1.map((end) => path(end));

export const opponentStartW2S1 = {x: -OPPONENT_WIDTH, y: conversions.y * 450};
const bossGalagaEndW2S1 = [
  { x: conversions.x * (215 - 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (1 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 0 * (10 + OPPONENT_WIDTH)), y: conversions.y * (1 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (1 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 2 * (10 + OPPONENT_WIDTH)), y: conversions.y * (1 * OPPONENT_HEIGHT) },
]
const bossGalagaPathsW2S1 = bossGalagaEndW2S1.map((end) => path(end));

function path(destination: Coordinates) {
  const conversions = getConversions();
  const pts = [
      { x: conversions.x * 0, y: conversions.y * 450},
      { x: conversions.x * 50, y: conversions.y * 440},
      { x: conversions.x * 160, y: conversions.y * 420},
      { x: conversions.x * 255, y: conversions.y * 350},
      { x: conversions.x * 245, y: conversions.y * 250},
      { x: conversions.x * 165, y: conversions.y * 205},
      { x: conversions.x * 75, y: conversions.y * 225},
      { x: conversions.x * 45, y: conversions.y * 325},
      { x: conversions.x * 85, y: conversions.y * 400},
      { x: conversions.x * 150, y: conversions.y * 415},
      { x: conversions.x * 255, y: conversions.y * 380},
      { x: conversions.x * 250, y: conversions.y * 260},
      { x: conversions.x * 250, y: conversions.y * 240},

  ]
  const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
  smoothCurve.push(destination);
  smoothCurve.push({x: destination.x, y: destination.y + 1});
  return smoothCurve;
}

export function opponentPathsW2S1(): Path[] {
  const paths = [];
  for (let i = 0; i < butterflyPaths.length * 2; i++) {
    if (i % 2 === 1) {
      paths.push(butterflyPaths[Math.floor(i / 2)]);
    } else {
      paths.push(bossGalagaPathsW2S1[Math.floor(i / 2)]);
    }
  }
  return paths
}

