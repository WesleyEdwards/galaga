import { getConversions } from "../../utils/paths/PathFollower";
import { CANVAS_WIDTH, OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../helpers/constants";

export const waveOneBeeStart = { x: (CANVAS_WIDTH / 500) * 300, y: 0 };
const conversions = getConversions();
export const waveOneBeeEnd = [
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (100 + 2 * OPPONENT_HEIGHT)},
  { x: conversions.x * 215, y: conversions.y * (100 + 2 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (100 + 3 * OPPONENT_HEIGHT)},
  { x: conversions.x * 215, y: conversions.y * (100 + 3 * OPPONENT_HEIGHT) },
];

export const waveOneButterflyStart = { x: (CANVAS_WIDTH / 500) * 200, y: 0 };
export const waveOneButterflyEnd = [
  { x: conversions.x * 215, y: conversions.y * 100 },
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * 100 },
  { x: conversions.x * 215, y: conversions.y * (100 + 1 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (100 + 1 * OPPONENT_HEIGHT)},
];
