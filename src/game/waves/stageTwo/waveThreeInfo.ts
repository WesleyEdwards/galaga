import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";
import { WaveInfo } from "../AllWaves";

const { x: convX, y: convY } = getConversions();

const innerButterflyStart = {x: convX * (500 + OPPONENT_WIDTH), y: convY * 450};
const innerButterflyEnd = [
  // Left two butterflies
  { x: convX * (215 - 2 * (0 + OPPONENT_WIDTH)), y: convY * (2 * OPPONENT_HEIGHT) },
  { x: convX * (215 - 2 * (0 + OPPONENT_WIDTH)), y: convY * (3 * OPPONENT_HEIGHT) },
  // Right two butterflies
  { x: convX * (215 + 3 * (0 + OPPONENT_WIDTH)), y: convY * (2 * OPPONENT_HEIGHT) },
  { x: convX * (215 + 3 * (0 + OPPONENT_WIDTH)), y: convY * (3 * OPPONENT_HEIGHT) },
]
const innerButterflyPaths = innerButterflyEnd.map((end) => innerButterflyPath(end));

const outerButterflyStart = {x: convX * (500 + OPPONENT_WIDTH), y: convY * 480};
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
      { x: convX * 500, y: convY * 450},
      { x: convX * 450, y: convY * 440},
      { x: convX * 340, y: convY * 420},
      { x: convX * 245, y: convY * 350},
      { x: convX * 255, y: convY * 250},
      { x: convX * 335, y: convY * 205},
      { x: convX * 425, y: convY * 225},
      { x: convX * 455, y: convY * 325},
      { x: convX * 415, y: convY * 400},
      { x: convX * 350, y: convY * 415},
      { x: convX * 245, y: convY * 380},
      { x: convX * 250, y: convY * 260},
      { x: convX * 250, y: convY * 240},
      { x: convX * 250, y: convY * 220},

  ]
  const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
  smoothCurve.push(destination);
  smoothCurve.push({x: destination.x, y: destination.y + 1});
  return smoothCurve;
}

function outerButterflyPath(destination: Coordinates) {
    const pts = [
        { x: convX * 500, y: convY * 480},
        { x: convX * 435, y: convY * 470},
        { x: convX * 300, y: convY * 445},
        { x: convX * 200, y: convY * 400},
        { x: convX * 220, y: convY * 170},
        { x: convX * 315, y: convY * 150},
        { x: convX * 460, y: convY * 190},
        { x: convX * 505, y: convY * 325},
        { x: convX * 445, y: convY * 435},
        { x: convX * 340, y: convY * 450},
        { x: convX * 220, y: convY * 390},
        { x: convX * 200, y: convY * 260},
        { x: convX * 200, y: convY * 240},
        { x: convX * 200, y: convY * 220},
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