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
        { x: conversions.x * 290, y: conversions.y * 115},
        { x: conversions.x * 370, y: conversions.y * 175},
        { x: conversions.x * 435, y: conversions.y * 250},
        { x: conversions.x * 450, y: conversions.y * 320},
        { x: conversions.x * 425, y: conversions.y * 385},
        { x: conversions.x * 370, y: conversions.y * 390},
        { x: conversions.x * 320, y: conversions.y * 375},
        { x: conversions.x * 270, y: conversions.y * 320},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}