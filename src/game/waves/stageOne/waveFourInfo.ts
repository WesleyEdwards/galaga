import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";

const conversions = getConversions();

export const beeStartW4S1 = { x: conversions.x * 300, y: conversions.y * -OPPONENT_HEIGHT };
const beeEndW4S1 = [
  { x: conversions.x * (215 - 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (4 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 - 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * (5 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 - 2 * (10 + OPPONENT_WIDTH)), y: conversions.y * (4 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 - 2 * (10 + OPPONENT_WIDTH)), y: conversions.y * (5 * OPPONENT_HEIGHT) },

  { x: conversions.x * (215 + 2 * (10 + OPPONENT_WIDTH)), y: conversions.y * (4 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 2 * (10 + OPPONENT_WIDTH)), y: conversions.y * (5 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 3 * (10 + OPPONENT_WIDTH)), y: conversions.y * (4 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 3 * (10 + OPPONENT_WIDTH)), y: conversions.y * (5 * OPPONENT_HEIGHT) },
]
export const beePathsW4S1 = beeEndW4S1.map((end) => path(end));


function path(destination: Coordinates) {
    const pts = [
        { x: conversions.x * 300, y: conversions.y * 1},
        { x: conversions.x * 300, y: conversions.y * 30},
        { x: conversions.x * 210, y: conversions.y * 115},
        { x: conversions.x * 130, y: conversions.y * 175},
        { x: conversions.x * 65, y: conversions.y * 250},
        { x: conversions.x * 50, y: conversions.y * 320},
        { x: conversions.x * 75, y: conversions.y * 385},
        { x: conversions.x * 130, y: conversions.y * 390},
        { x: conversions.x * 180, y: conversions.y * 375},
        { x: conversions.x * 230, y: conversions.y * 320},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}