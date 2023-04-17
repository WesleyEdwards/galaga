import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates, Path } from "../../helpers/types";

const conversions = getConversions();

export const butterflyStartW2S2 = {x: conversions.x * -OPPONENT_WIDTH, y: conversions.y * 450};
const butterflyEndW2S2 = [
  // Left twobutterflies
  { x: conversions.x * (215 - 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (2 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 - 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (3 * OPPONENT_HEIGHT) },
  // Right two butterflies
  { x: conversions.x * (215 + 2 * (10 + OPPONENT_WIDTH)), y: conversions.y * (2 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 2 * (10 + OPPONENT_WIDTH)), y: conversions.y * (3 * OPPONENT_HEIGHT) },
]
export const butterflyPathsW2S2 = butterflyEndW2S2.map((end) => butterflyPath(end));

export const bossGalagaStartW2S2 = {x: -OPPONENT_WIDTH, y: conversions.y * 480};
const bossGalagaEndW2S2 = [
  { x: conversions.x * (215 - 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (1 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 0 * (10 + OPPONENT_WIDTH)), y: conversions.y * (1 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (1 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 2 * (10 + OPPONENT_WIDTH)), y: conversions.y * (1 * OPPONENT_HEIGHT) },
]
export const bossGalagaPathsW2S2 = bossGalagaEndW2S2.map((end) => bossGalagaPath(end));

function butterflyPath(destination: Coordinates) {
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
      { x: conversions.x * 250, y: conversions.y * 220},

  ]
  const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
  smoothCurve.push(destination);
  smoothCurve.push({x: destination.x, y: destination.y + 1});
  return smoothCurve;
}

function bossGalagaPath(destination: Coordinates) {
    // These points follow on the outside of the loop formed by the butterfly path
    const pts = [
        { x: conversions.x * 0, y: conversions.y * 480},
        { x: conversions.x * 65, y: conversions.y * 470},
        { x: conversions.x * 200, y: conversions.y * 445},
        { x: conversions.x * 300, y: conversions.y * 400},
        { x: conversions.x * 280, y: conversions.y * 170},
        { x: conversions.x * 185, y: conversions.y * 150},
        { x: conversions.x * 40, y: conversions.y * 190},
        { x: conversions.x * -5, y: conversions.y * 325},
        { x: conversions.x * 55, y: conversions.y * 435},
        { x: conversions.x * 160, y: conversions.y * 450},
        { x: conversions.x * 280, y: conversions.y * 390},
        { x: conversions.x * 300, y: conversions.y * 260},
        { x: conversions.x * 300, y: conversions.y * 240},
        { x: conversions.x * 300, y: conversions.y * 220},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}