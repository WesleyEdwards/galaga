import { getConversions } from "../../../utils/paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";

const conversions = getConversions();
export const butterflyStartW2S1 = {x: -OPPONENT_WIDTH, y: conversions.y * 450};
export const butterflyEndW2S1 = [
  // Left twobutterflies
  { x: conversions.x * (215 - 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * 100 },
  { x: conversions.x * (215 - 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (100 + 1 * OPPONENT_HEIGHT) },
  // Right two butterflies
  { x: conversions.x * (215 + 3 * (10 + OPPONENT_WIDTH)), y: conversions.y * 100 },
  { x: conversions.x * (215 + 3 * (10 + OPPONENT_WIDTH)), y: conversions.y * (100 + 1 * OPPONENT_HEIGHT) },
]