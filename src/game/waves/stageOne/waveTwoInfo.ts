import {
  getConversions,
  generatePointsOnBezierCurve,
} from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates, Path } from "../../helpers/types";
import { WaveInfo } from "../AllWaves";

const { x: convX, y: convY } = getConversions();

export const opponent = {
  x: convX * -OPPONENT_WIDTH,
  y: convY * 450,
};
const butterflyEnd = [
  // Left two butterflies
  {
    x: convX * (215 - 1 * (10 + OPPONENT_WIDTH)),
    y: convY * (2 * OPPONENT_HEIGHT),
  },
  {
    x: convX * (215 - 1 * (10 + OPPONENT_WIDTH)),
    y: convY * (3 * OPPONENT_HEIGHT),
  },
  // Right two butterflies
  {
    x: convX * (215 + 2 * (10 + OPPONENT_WIDTH)),
    y: convY * (2 * OPPONENT_HEIGHT),
  },
  {
    x: convX * (215 + 2 * (10 + OPPONENT_WIDTH)),
    y: convY * (3 * OPPONENT_HEIGHT),
  },
];
const butterflyPaths = butterflyEnd.map((end) => path(end));

export const opponentStart = {
  x: convX * -OPPONENT_WIDTH,
  y: convY * 450,
};
const bossGalagaEnd = [
  {
    x: convX * (215 - 1 * (10 + OPPONENT_WIDTH)),
    y: convY * (1 * OPPONENT_HEIGHT),
  },
  {
    x: convX * (215 + 0 * (10 + OPPONENT_WIDTH)),
    y: convY * (1 * OPPONENT_HEIGHT),
  },
  {
    x: convX * (215 + 1 * (10 + OPPONENT_WIDTH)),
    y: convY * (1 * OPPONENT_HEIGHT),
  },
  {
    x: convX * (215 + 2 * (10 + OPPONENT_WIDTH)),
    y: convY * (1 * OPPONENT_HEIGHT),
  },
];
const bossGalagaPaths = bossGalagaEnd.map((end) => path(end));

function path(destination: Coordinates) {
  const pts = [
    { x: convX * 0, y: convY * 450 },
    { x: convX * 50, y: convY * 440 },
    { x: convX * 160, y: convY * 420 },
    { x: convX * 255, y: convY * 350 },
    { x: convX * 245, y: convY * 250 },
    { x: convX * 165, y: convY * 205 },
    { x: convX * 75, y: convY * 225 },
    { x: convX * 45, y: convY * 325 },
    { x: convX * 85, y: convY * 400 },
    { x: convX * 150, y: convY * 415 },
    { x: convX * 255, y: convY * 380 },
    { x: convX * 250, y: convY * 260 },
    { x: convX * 250, y: convY * 240 },
  ];
  pts.push(destination);
  const smoothCurve = generatePointsOnBezierCurve(pts, 25);
  smoothCurve.push({ x: destination.x, y: destination.y + 1 });
  return smoothCurve;
}

export const opponentPaths: Path[] = (() => {
  const paths = [];
  for (let i = 0; i < butterflyPaths.length * 2; i++) {
    if (i % 2 === 1) {
      paths.push(butterflyPaths[Math.floor(i / 2)]);
    } else {
      paths.push(bossGalagaPaths[Math.floor(i / 2)]);
    }
  }
  return paths;
})();

export const waveTwoInfo: WaveInfo = [
    {
      start: opponentStart,
      end: butterflyEnd,
      paths: opponentPaths,
    }
  ]
