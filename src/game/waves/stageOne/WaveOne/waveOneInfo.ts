import { getConversions } from "../../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../../helpers/constants";
import { beePath1, butterflyPath1 } from "./waveOnePath";

const conversions = getConversions();
export const beeStartW1S1 = { x: conversions.x * 300, y: -OPPONENT_HEIGHT };
// One coordinate pair for each of the bees
const beeEndW1S1 = [
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * 4 * OPPONENT_HEIGHT },
  { x: conversions.x * 215, y: conversions.y * 4 * OPPONENT_HEIGHT },
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * 5 * OPPONENT_HEIGHT },
  { x: conversions.x * 215, y: conversions.y * 5 * OPPONENT_HEIGHT },
];
export const beePathsW1S1 = beeEndW1S1.map((end) => beePath1(end));

export const butterflyStartW1S1 = { x: conversions.x * 200, y: -OPPONENT_HEIGHT };
//One coordinate pair for each of the butterflies
const butterflyEndW1S1 = [
  { x: conversions.x * 215, y: conversions.y * 2 * OPPONENT_HEIGHT },
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * 2 * OPPONENT_HEIGHT },
  { x: conversions.x * 215, y: conversions.y * 3 * OPPONENT_HEIGHT },
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * 3 * OPPONENT_HEIGHT},
];

export const butterflyPathsW1S1 = butterflyEndW1S1.map((end) => butterflyPath1(end));
