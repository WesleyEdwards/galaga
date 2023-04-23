import {
  getConversions,
  generatePointsOnBezierCurve,
} from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";
import { WaveInfo } from "../AllWaves";

const { x: convX, y: convY } = getConversions();

const butterflyStart = {
  x: convX * 500 + OPPONENT_WIDTH,
  y: convY * 450,
};
const butterflyEnd = [
  // Left two butterflies
  {x: convX * (215 - 2 * (10 + OPPONENT_WIDTH)), y: convY * (2 * OPPONENT_HEIGHT), },
  {x: convX * (215 - 2 * (10 + OPPONENT_WIDTH)), y: convY * (3 * OPPONENT_HEIGHT), },
  {x: convX * (215 - 3 * (10 + OPPONENT_WIDTH)), y: convY * (2 * OPPONENT_HEIGHT), },
  {x: convX * (215 - 3 * (10 + OPPONENT_WIDTH)), y: convY * (3 * OPPONENT_HEIGHT), },
  // Right two butterflies
  {x: convX * (215 + 3 * (10 + OPPONENT_WIDTH)), y: convY * (2 * OPPONENT_HEIGHT), },
  {x: convX * (215 + 3 * (10 + OPPONENT_WIDTH)), y: convY * (3 * OPPONENT_HEIGHT), },
  {x: convX * (215 + 4 * (10 + OPPONENT_WIDTH)), y: convY * (2 * OPPONENT_HEIGHT), },
  {x: convX * (215 + 4 * (10 + OPPONENT_WIDTH)), y: convY * (3 * OPPONENT_HEIGHT), },
];
const butterflyPaths = butterflyEnd.map((end) => path(end));

function path(destination: Coordinates) {
  const pts = [
    { x: convX * 500, y: convY * 450 },
    { x: convX * 450, y: convY * 440 },
    { x: convX * 340, y: convY * 420 },
    { x: convX * 245, y: convY * 350 },
    { x: convX * 255, y: convY * 250 },
    { x: convX * 335, y: convY * 205 },
    { x: convX * 425, y: convY * 225 },
    { x: convX * 455, y: convY * 325 },
    { x: convX * 415, y: convY * 400 },
    { x: convX * 350, y: convY * 415 },
    { x: convX * 245, y: convY * 380 },
    { x: convX * 250, y: convY * 260 },
    { x: convX * 250, y: convY * 240 },
  ];
  pts.push(destination);
  const smoothCurve = generatePointsOnBezierCurve(pts, 25);
  smoothCurve.push({ x: destination.x, y: destination.y + 1 });
  return smoothCurve;
}

export const waveThreeInfo: WaveInfo = [
    {
      start: butterflyStart,
      end: butterflyEnd,
      paths: butterflyPaths,
    },
  ]
