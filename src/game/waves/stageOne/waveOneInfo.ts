import {
  generatePointsOnBezierCurve,
  getConversions,
} from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";
import { WaveInfo } from "./stageOneInformation";

const { x: convX, y: convY } = getConversions();
const beeStart = {
  x: convX * 300,
  y: convY * -OPPONENT_HEIGHT,
};
const beeEnd = [
  {
    x: convX * (215 + 1 * (10 + OPPONENT_WIDTH)),
    y: convY * 4 * OPPONENT_HEIGHT,
  },
  { x: convX * 215, y: convY * 4 * OPPONENT_HEIGHT },
  {
    x: convX * (215 + 1 * (10 + OPPONENT_WIDTH)),
    y: convY * 5 * OPPONENT_HEIGHT,
  },
  { x: convX * 215, y: convY * 5 * OPPONENT_HEIGHT },
];
const beePaths = beeEnd.map((end) => beePath(end));

const butterflyStart = {
  x: convX * 200,
  y: convY * -OPPONENT_HEIGHT,
};
const butterflyEnd = [
  { x: convX * 215, y: convY * 2 * OPPONENT_HEIGHT },
  {
    x: convX * (215 + 1 * (10 + OPPONENT_WIDTH)),
    y: convY * 2 * OPPONENT_HEIGHT,
  },
  { x: convX * 215, y: convY * 3 * OPPONENT_HEIGHT },
  {
    x: convX * (215 + 1 * (10 + OPPONENT_WIDTH)),
    y: convY * 3 * OPPONENT_HEIGHT,
  },
];

const butterflyPaths = butterflyEnd.map((end) => butterflyPath(end));

function butterflyPath(destination: Coordinates) {
  const pts = [
    { x: convX * 200, y: convY * 1 },
    { x: convX * 200, y: convY * 30 },
    { x: convX * 290, y: convY * 115 },
    { x: convX * 370, y: convY * 175 },
    { x: convX * 435, y: convY * 250 },
    { x: convX * 450, y: convY * 320 },
    { x: convX * 425, y: convY * 385 },
    { x: convX * 370, y: convY * 390 },
    { x: convX * 320, y: convY * 375 },
    { x: convX * 270, y: convY * 320 },
    { x: convX * 250, y: convY * 280 },
    { x: convX * 250, y: convY * 170 },
  ];
  const smoothCurve = generatePointsOnBezierCurve(pts, 25);
  smoothCurve.push(destination);
  smoothCurve.push({ x: destination.x, y: destination.y + 1 });
  return smoothCurve;
}

function beePath(destination: Coordinates) {
  const pts = [
    { x: convX * 300, y: convY * 1 },
    { x: convX * 300, y: convY * 30 },
    { x: convX * 210, y: convY * 115 },
    { x: convX * 130, y: convY * 175 },
    { x: convX * 65, y: convY * 250 },
    { x: convX * 50, y: convY * 320 },
    { x: convX * 75, y: convY * 385 },
    { x: convX * 130, y: convY * 390 },
    { x: convX * 180, y: convY * 375 },
    { x: convX * 230, y: convY * 320 },
    { x: convX * 250, y: convY * 280 },
    { x: convX * 250, y: convY * 170 },
  ];
  const smoothCurve = generatePointsOnBezierCurve(pts, 25);
  smoothCurve.push(destination);
  smoothCurve.push({ x: destination.x, y: destination.y + 1 });
  return smoothCurve;
}

export const waveOneInformation: WaveInfo = {
  waveNumber: 1,
  trailInfo: [
    {
      start: beeStart,
      end: beeEnd,
      paths: beePaths,
    },
    {
      start: butterflyStart,
      end: butterflyEnd,
      paths: butterflyPaths,
    },
  ],
};
