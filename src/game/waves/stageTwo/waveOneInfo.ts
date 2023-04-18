import { generatePointsOnBezierCurve, getConversions } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";

const conversions = getConversions();
export const beeStartW1S2 = { x: conversions.x * 300, y: conversions.y * -OPPONENT_HEIGHT };
const beeEndW1S2 = [
  { x: conversions.x * (215 + 1 * (0 + OPPONENT_WIDTH)), y: conversions.y * 4 * OPPONENT_HEIGHT },
  { x: conversions.x * 215, y: conversions.y * 4 * OPPONENT_HEIGHT },
  { x: conversions.x * (215 + 1 * (0 + OPPONENT_WIDTH)), y: conversions.y * 5 * OPPONENT_HEIGHT },
  { x: conversions.x * 215, y: conversions.y * 5 * OPPONENT_HEIGHT },
];
export const beePathsW1S2 = beeEndW1S2.map((end) => beePath(end));

export const butterflyStartW1S2 = { x: conversions.x * 200, y: conversions.y *  -OPPONENT_HEIGHT };
const butterflyEndW1S2 = [
  { x: conversions.x * 215, y: conversions.y * 2 * OPPONENT_HEIGHT },
  { x: conversions.x * (215 + 1 * (0 + OPPONENT_WIDTH)), y: conversions.y * 2 * OPPONENT_HEIGHT },
  { x: conversions.x * 215, y: conversions.y * 3 * OPPONENT_HEIGHT },
  { x: conversions.x * (215 + 1 * (0 + OPPONENT_WIDTH)), y: conversions.y * 3 * OPPONENT_HEIGHT},
];

export const butterflyPathsW1S2 = butterflyEndW1S2.map((end) => butterflyPath(end));


function butterflyPath(destination: Coordinates) {
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
      { x: conversions.x * 250, y: conversions.y * 280},
      { x: conversions.x * 250, y: conversions.y * 170},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}

function beePath(destination: Coordinates) {
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
        { x: conversions.x * 250, y: conversions.y * 280},
        { x: conversions.x * 250, y: conversions.y * 170},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}