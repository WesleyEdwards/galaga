import { getConversions } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";

const conversions = getConversions();
export const butterflyStartW2S1 = {x: -OPPONENT_WIDTH, y: conversions.y * 450};
export const butterflyEndW2S1 = [
  // Left twobutterflies
  { x: conversions.x * (215 - 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (2 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 - 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (3 * OPPONENT_HEIGHT) },
  // Right two butterflies
  { x: conversions.x * (215 + 2 * (10 + OPPONENT_WIDTH)), y: conversions.y * (2 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 2 * (10 + OPPONENT_WIDTH)), y: conversions.y * (3 * OPPONENT_HEIGHT) },
]

export const bossGalagaStartW2S1 = {x: -OPPONENT_WIDTH, y: conversions.y * 450};
export const bossGalagaEndW2S1 = [
  { x: conversions.x * (215 - 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (1 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 0 * (10 + OPPONENT_WIDTH)), y: conversions.y * (1 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (1 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 2 * (10 + OPPONENT_WIDTH)), y: conversions.y * (1 * OPPONENT_HEIGHT) },
]