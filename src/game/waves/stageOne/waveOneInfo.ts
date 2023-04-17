import { generatePointsOnBezierCurve, getConversions } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";

const conversions = getConversions();
export const beeStartW1S1 = { x: conversions.x * 300, y: -OPPONENT_HEIGHT };
const beeEndW1S1 = [
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * 4 * OPPONENT_HEIGHT },
  { x: conversions.x * 215, y: conversions.y * 4 * OPPONENT_HEIGHT },
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * 5 * OPPONENT_HEIGHT },
  { x: conversions.x * 215, y: conversions.y * 5 * OPPONENT_HEIGHT },
];
export const beePathsW1S1 = beeEndW1S1.map((end) => beePath(end));

export const butterflyStartW1S1 = { x: conversions.x * 200, y: -OPPONENT_HEIGHT };
const butterflyEndW1S1 = [
  { x: conversions.x * 215, y: conversions.y * 2 * OPPONENT_HEIGHT },
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * 2 * OPPONENT_HEIGHT },
  { x: conversions.x * 215, y: conversions.y * 3 * OPPONENT_HEIGHT },
  { x: conversions.x * (215 + 1 * (10 + OPPONENT_WIDTH)), y: conversions.y * 3 * OPPONENT_HEIGHT},
];

export const butterflyPathsW1S1 = butterflyEndW1S1.map((end) => butterflyPath(end));


function butterflyPath(destination: Coordinates) {
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

function beePath(destination: Coordinates) {
    const pts = [
        { x: conversions.x * 300, y: conversions.y * 1},
        { x: conversions.x * 300, y: conversions.y * 30},
        { x: conversions.x * 165, y: conversions.y * 145},
        { x: conversions.x * 120, y: conversions.y * 190},
        { x: conversions.x * 105, y: conversions.y * 250},
        { x: conversions.x * 135, y: conversions.y * 300},
        { x: conversions.x * 190, y: conversions.y * 320},
        { x: conversions.x * 250, y: conversions.y * 280},
        { x: conversions.x * 250, y: conversions.y * 170},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}