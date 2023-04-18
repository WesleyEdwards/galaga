import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";

const conversions = getConversions();

export const innerButterflyStartW3S2 = {x: conversions.x * (500 + OPPONENT_WIDTH), y: conversions.y * 450};
const innerButterflyEndW3S2 = [
  // Left two butterflies
  { x: conversions.x * (215 - 2 * (10 + OPPONENT_WIDTH)), y: conversions.y * (2 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 - 2 * (10 + OPPONENT_WIDTH)), y: conversions.y * (3 * OPPONENT_HEIGHT) },
  // Right two butterflies
  { x: conversions.x * (215 + 3 * (10 + OPPONENT_WIDTH)), y: conversions.y * (2 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 3 * (10 + OPPONENT_WIDTH)), y: conversions.y * (3 * OPPONENT_HEIGHT) },
]
export const innerButterflyPathsW3S2 = innerButterflyEndW3S2.map((end) => innerButterflyPath(end));

export const outerButterflyStartW3S2 = {x: conversions.x * (500 + OPPONENT_WIDTH), y: conversions.y * 480};
const outerButterflyEndW3S2 = [
    { x: conversions.x * (215 - 3 * (10 + OPPONENT_WIDTH)), y: conversions.y * (2 * OPPONENT_HEIGHT) },
    { x: conversions.x * (215 - 3 * (10 + OPPONENT_WIDTH)), y: conversions.y * (3 * OPPONENT_HEIGHT) },
    // Right two butterflies
    { x: conversions.x * (215 + 4 * (10 + OPPONENT_WIDTH)), y: conversions.y * (2 * OPPONENT_HEIGHT) },
    { x: conversions.x * (215 + 4 * (10 + OPPONENT_WIDTH)), y: conversions.y * (3 * OPPONENT_HEIGHT) },
]
export const outerButterflyPathsW3S2 = outerButterflyEndW3S2.map((end) => outerButterflyPath(end));

function innerButterflyPath(destination: Coordinates) {
  const pts = [
      { x: conversions.x * 500, y: conversions.y * 450},
      { x: conversions.x * 450, y: conversions.y * 440},
      { x: conversions.x * 340, y: conversions.y * 420},
      { x: conversions.x * 245, y: conversions.y * 350},
      { x: conversions.x * 255, y: conversions.y * 250},
      { x: conversions.x * 335, y: conversions.y * 205},
      { x: conversions.x * 425, y: conversions.y * 225},
      { x: conversions.x * 455, y: conversions.y * 325},
      { x: conversions.x * 415, y: conversions.y * 400},
      { x: conversions.x * 350, y: conversions.y * 415},
      { x: conversions.x * 245, y: conversions.y * 380},
      { x: conversions.x * 250, y: conversions.y * 260},
      { x: conversions.x * 250, y: conversions.y * 240},
      { x: conversions.x * 250, y: conversions.y * 220},

  ]
  const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
  smoothCurve.push(destination);
  smoothCurve.push({x: destination.x, y: destination.y + 1});
  return smoothCurve;
}

function outerButterflyPath(destination: Coordinates) {
    const pts = [
        { x: conversions.x * 500, y: conversions.y * 480},
        { x: conversions.x * 435, y: conversions.y * 470},
        { x: conversions.x * 300, y: conversions.y * 445},
        { x: conversions.x * 200, y: conversions.y * 400},
        { x: conversions.x * 220, y: conversions.y * 170},
        { x: conversions.x * 315, y: conversions.y * 150},
        { x: conversions.x * 460, y: conversions.y * 190},
        { x: conversions.x * 505, y: conversions.y * 325},
        { x: conversions.x * 445, y: conversions.y * 435},
        { x: conversions.x * 340, y: conversions.y * 450},
        { x: conversions.x * 220, y: conversions.y * 390},
        { x: conversions.x * 200, y: conversions.y * 260},
        { x: conversions.x * 200, y: conversions.y * 240},
        { x: conversions.x * 200, y: conversions.y * 220},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}