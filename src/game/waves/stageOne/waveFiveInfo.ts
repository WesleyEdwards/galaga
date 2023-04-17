import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates, Path } from "../../helpers/types";

const conversions = getConversions();

export const beeStartW5S1 = { x: conversions.x * 200, y: conversions.y * -OPPONENT_HEIGHT };
const beeEndW5S1 = [
  { x: conversions.x * (215 - 3 * (10 + OPPONENT_WIDTH)), y: conversions.y * (4 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 - 3 * (10 + OPPONENT_WIDTH)), y: conversions.y * (5 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 - 4 * (10 + OPPONENT_WIDTH)), y: conversions.y * (4 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 - 4 * (10 + OPPONENT_WIDTH)), y: conversions.y * (5 * OPPONENT_HEIGHT) },

  { x: conversions.x * (215 + 4 * (10 + OPPONENT_WIDTH)), y: conversions.y * (4 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 4 * (10 + OPPONENT_WIDTH)), y: conversions.y * (5 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 5 * (10 + OPPONENT_WIDTH)), y: conversions.y * (4 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 + 5 * (10 + OPPONENT_WIDTH)), y: conversions.y * (5 * OPPONENT_HEIGHT) },
]
export const beePathsW5S1 = beeEndW5S1.map((end) => path(end));


function path(destination: Coordinates) {
    const pts = [
        { x: conversions.x * 200, y: conversions.y * 1},
        { x: conversions.x * 200, y: conversions.y * 30},
        { x: conversions.x * 335, y: conversions.y * 145},
        { x: conversions.x * 380, y: conversions.y * 190},
        { x: conversions.x * 395, y: conversions.y * 250},
        { x: conversions.x * 365, y: conversions.y * 300},
        { x: conversions.x * 310, y: conversions.y * 320},
        { x: conversions.x * 250, y: conversions.y * 280},
        { x: conversions.x * 250, y: conversions.y * 170},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}