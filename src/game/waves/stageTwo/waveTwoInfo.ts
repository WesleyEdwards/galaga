import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";
import { WaveInfo } from "../AllWaves";

const { x: convX, y: convY } = getConversions();

const butterflyStart = {x: convX * -OPPONENT_WIDTH, y: convY * 375};
const butterflyEnd = [
  // Left twobutterflies
  { x: convX * (215 - 1 * (0 + OPPONENT_WIDTH)), y: convY * (2 * OPPONENT_HEIGHT) },
  { x: convX * (215 - 1 * (0 + OPPONENT_WIDTH)), y: convY * (3 * OPPONENT_HEIGHT) },
  // Right two butterflies
  { x: convX * (215 + 2 * (0 + OPPONENT_WIDTH)), y: convY * (2 * OPPONENT_HEIGHT) },
  { x: convX * (215 + 2 * (0 + OPPONENT_WIDTH)), y: convY * (3 * OPPONENT_HEIGHT) },
]
const butterflyPaths = butterflyEnd.map((end) => butterflyPath(end));

const bossGalagaStart = {x: convX * -OPPONENT_WIDTH, y: convY * 405};
const bossGalagaEnd = [
  { x: convX * (215 - 1 * (0 + OPPONENT_WIDTH)), y: convY * (1 * OPPONENT_HEIGHT) },
  { x: convX * (215 + 0 * (0 + OPPONENT_WIDTH)), y: convY * (1 * OPPONENT_HEIGHT) },
  { x: convX * (215 + 1 * (0 + OPPONENT_WIDTH)), y: convY * (1 * OPPONENT_HEIGHT) },
  { x: convX * (215 + 2 * (0 + OPPONENT_WIDTH)), y: convY * (1 * OPPONENT_HEIGHT) },
]
const bossGalagaPaths = bossGalagaEnd.map((end) => bossGalagaPath(end));

function butterflyPath(destination: Coordinates) {
  const pts = [
      { x: convX * 0, y: convY * 375},
      { x: convX * 50, y: convY * 365},
      { x: convX * 160, y: convY * 345},
      { x: convX * 255, y: convY * 275},
      { x: convX * 245, y: convY * 175},
      { x: convX * 165, y: convY * 130},
      { x: convX * 75, y: convY * 150},
      { x: convX * 45, y: convY * 250},
      { x: convX * 85, y: convY * 325},
      { x: convX * 150, y: convY * 340},
      { x: convX * 255, y: convY * 305},
      { x: convX * 250, y: convY * 185},
      { x: convX * 250, y: convY * 165},
  ]
  pts.push(destination);
  const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
  smoothCurve.push({x: destination.x, y: destination.y + 1});
  return smoothCurve;
}

function bossGalagaPath(destination: Coordinates) {
    const pts = [
        { x: convX * 0, y: convY * 405},
        { x: convX * 65, y: convY * 395},
        { x: convX * 200, y: convY * 370},
        { x: convX * 300, y: convY * 325},
        { x: convX * 280, y: convY * 95},
        { x: convX * 185, y: convY * 75},
        { x: convX * 40, y: convY * 115},
        { x: convX * -5, y: convY * 250},
        { x: convX * 55, y: convY * 360},
        { x: convX * 160, y: convY * 375},
        { x: convX * 280, y: convY * 315},
        { x: convX * 300, y: convY * 185},
        { x: convX * 300, y: convY * 165},
    ]
    pts.push(destination);
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}

export const waveTwoInfo: WaveInfo = [{
    start: butterflyStart,
    paths: butterflyPaths,
    end: butterflyEnd,
  }, {
    start: bossGalagaStart,
    paths: bossGalagaPaths,
    end: bossGalagaEnd,
  }
]