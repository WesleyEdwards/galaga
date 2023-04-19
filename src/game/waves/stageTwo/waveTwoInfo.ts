import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";
import { WaveInfo } from "../AllWaves";

const { x: convX, y: convY } = getConversions();

const butterflyStart = {x: convX * -OPPONENT_WIDTH, y: convY * 450};
const butterflyEnd = [
  // Left twobutterflies
  { x: convX * (215 - 1 * (0 + OPPONENT_WIDTH)), y: convY * (2 * OPPONENT_HEIGHT) },
  { x: convX * (215 - 1 * (0 + OPPONENT_WIDTH)), y: convY * (3 * OPPONENT_HEIGHT) },
  // Right two butterflies
  { x: convX * (215 + 2 * (0 + OPPONENT_WIDTH)), y: convY * (2 * OPPONENT_HEIGHT) },
  { x: convX * (215 + 2 * (0 + OPPONENT_WIDTH)), y: convY * (3 * OPPONENT_HEIGHT) },
]
const butterflyPaths = butterflyEnd.map((end) => butterflyPath(end));

const bossGalagaStart = {x: convX * -OPPONENT_WIDTH, y: convY * 480};
const bossGalagaEnd = [
  { x: convX * (215 - 1 * (0 + OPPONENT_WIDTH)), y: convY * (1 * OPPONENT_HEIGHT) },
  { x: convX * (215 + 0 * (0 + OPPONENT_WIDTH)), y: convY * (1 * OPPONENT_HEIGHT) },
  { x: convX * (215 + 1 * (0 + OPPONENT_WIDTH)), y: convY * (1 * OPPONENT_HEIGHT) },
  { x: convX * (215 + 2 * (0 + OPPONENT_WIDTH)), y: convY * (1 * OPPONENT_HEIGHT) },
]
const bossGalagaPaths = bossGalagaEnd.map((end) => bossGalagaPath(end));

function butterflyPath(destination: Coordinates) {
  const pts = [
      { x: convX * 0, y: convY * 450},
      { x: convX * 50, y: convY * 440},
      { x: convX * 160, y: convY * 420},
      { x: convX * 255, y: convY * 350},
      { x: convX * 245, y: convY * 250},
      { x: convX * 165, y: convY * 205},
      { x: convX * 75, y: convY * 225},
      { x: convX * 45, y: convY * 325},
      { x: convX * 85, y: convY * 400},
      { x: convX * 150, y: convY * 415},
      { x: convX * 255, y: convY * 380},
      { x: convX * 250, y: convY * 260},
      { x: convX * 250, y: convY * 240},
      { x: convX * 250, y: convY * 220},

  ]
  const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
  smoothCurve.push(destination);
  smoothCurve.push({x: destination.x, y: destination.y + 1});
  return smoothCurve;
}

function bossGalagaPath(destination: Coordinates) {
    const pts = [
        { x: convX * 0, y: convY * 480},
        { x: convX * 65, y: convY * 470},
        { x: convX * 200, y: convY * 445},
        { x: convX * 300, y: convY * 400},
        { x: convX * 280, y: convY * 170},
        { x: convX * 185, y: convY * 150},
        { x: convX * 40, y: convY * 190},
        { x: convX * -5, y: convY * 325},
        { x: convX * 55, y: convY * 435},
        { x: convX * 160, y: convY * 450},
        { x: convX * 280, y: convY * 390},
        { x: convX * 300, y: convY * 260},
        { x: convX * 300, y: convY * 240},
        { x: convX * 300, y: convY * 220},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
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