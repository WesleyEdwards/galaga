import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";
import { WaveInfo } from "../AllWaves";

const { x: convX, y: convY } = getConversions();

const innerButterflyStart = {x: convX * (500 + OPPONENT_WIDTH), y: convY * 375};
const innerButterflyEnd = [
  // Left two butterflies
  { x: convX * (215 - 2 * (0 + OPPONENT_WIDTH)), y: convY * (2 * OPPONENT_HEIGHT) },
  { x: convX * (215 - 2 * (0 + OPPONENT_WIDTH)), y: convY * (3 * OPPONENT_HEIGHT) },
  // Right two butterflies
  { x: convX * (215 + 3 * (0 + OPPONENT_WIDTH)), y: convY * (2 * OPPONENT_HEIGHT) },
  { x: convX * (215 + 3 * (0 + OPPONENT_WIDTH)), y: convY * (3 * OPPONENT_HEIGHT) },
]
const innerButterflyPaths = innerButterflyEnd.map((end) => innerButterflyPath(end));

const outerButterflyStart = {x: convX * (500 + OPPONENT_WIDTH), y: convY * 405};
const outerButterflyEnd = [
    { x: convX * (215 - 3 * (0 + OPPONENT_WIDTH)), y: convY * (2 * OPPONENT_HEIGHT) },
    { x: convX * (215 - 3 * (0 + OPPONENT_WIDTH)), y: convY * (3 * OPPONENT_HEIGHT) },
    // Right two butterflies
    { x: convX * (215 + 4 * (0 + OPPONENT_WIDTH)), y: convY * (2 * OPPONENT_HEIGHT) },
    { x: convX * (215 + 4 * (0 + OPPONENT_WIDTH)), y: convY * (3 * OPPONENT_HEIGHT) },
]
const outerButterflyPaths = outerButterflyEnd.map((end) => outerButterflyPath(end));

function innerButterflyPath(destination: Coordinates) {
  const pts = [
      { x: convX * 500, y: convY * 375},
      { x: convX * 450, y: convY * 355},
      { x: convX * 340, y: convY * 335},
      { x: convX * 245, y: convY * 275},
      { x: convX * 255, y: convY * 175},
      { x: convX * 335, y: convY * 130},
      { x: convX * 425, y: convY * 150},
      { x: convX * 455, y: convY * 250},
      { x: convX * 415, y: convY * 325},
      { x: convX * 350, y: convY * 340},
      { x: convX * 245, y: convY * 305},
      { x: convX * 250, y: convY * 185},
      { x: convX * 250, y: convY * 165},
  ]
  const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
  smoothCurve.push(destination);
  smoothCurve.push({x: destination.x, y: destination.y + 1});
  return smoothCurve;
}

function outerButterflyPath(destination: Coordinates) {
    const pts = [
        { x: convX * 500, y: convY * 405},
        { x: convX * 435, y: convY * 395},
        { x: convX * 300, y: convY * 370},
        { x: convX * 200, y: convY * 325},
        { x: convX * 220, y: convY * 95},
        { x: convX * 315, y: convY * 75},
        { x: convX * 460, y: convY * 115},
        { x: convX * 505, y: convY * 250},
        { x: convX * 445, y: convY * 360},
        { x: convX * 340, y: convY * 375},
        { x: convX * 220, y: convY * 315},
        { x: convX * 200, y: convY * 185},
        { x: convX * 200, y: convY * 165},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}

export const waveThreeInfo: WaveInfo = [{
    start: innerButterflyStart,
    paths: innerButterflyPaths,
    end: innerButterflyEnd,
  }, {
    start: outerButterflyStart,
    paths: outerButterflyPaths,
    end: outerButterflyEnd,
  }
]