import { getConversions } from "../../../utils/paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";

const conversions = getConversions();
export const beeStartW1S1 = { x: conversions.x * 300, y: -OPPONENT_HEIGHT };
// One coordinate pair for each of the bees
export const beeEndW1S1 = [
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (100 + 2 * OPPONENT_HEIGHT)},
  { x: conversions.x * 215, y: conversions.y * (100 + 2 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (100 + 3 * OPPONENT_HEIGHT)},
  { x: conversions.x * 215, y: conversions.y * (100 + 3 * OPPONENT_HEIGHT) },
];

export const butterflyStartW1S1 = { x: conversions.x * 200, y: -OPPONENT_HEIGHT };
//One coordinate pair for each of the butterflies
export const butterflyEndW1S1 = [
  { x: conversions.x * 215, y: conversions.y * 100 },
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * 100 },
  { x: conversions.x * 215, y: conversions.y * (100 + 1 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (100 + 1 * OPPONENT_HEIGHT)},
];
