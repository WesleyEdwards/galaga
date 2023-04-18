import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";

const conversions = getConversions();

export const innerBeeStartW4S2 = { x: conversions.x * 300, y: conversions.y * -OPPONENT_HEIGHT };
const innerBeeEndW4S1 = [
  { x: conversions.x * (215 - 1 * (0 + OPPONENT_WIDTH)), y: conversions.y * (4 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 - 1 * (0 + OPPONENT_WIDTH)), y: conversions.y * (5 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 - 2 * (0 + OPPONENT_WIDTH)), y: conversions.y * (4 * OPPONENT_HEIGHT) },
  { x: conversions.x * (215 - 2 * (0 + OPPONENT_WIDTH)), y: conversions.y * (5 * OPPONENT_HEIGHT) },
]
export const innerBeePathsW4S2 = innerBeeEndW4S1.map((end) => innerBeePath(end));

export const outerBeeStartW4S2 = { x: conversions.x * 260, y: conversions.y * -OPPONENT_HEIGHT };
const outerBeeEndW4S2 = [
    { x: conversions.x * (215 + 2 * (0 + OPPONENT_WIDTH)), y: conversions.y * (4 * OPPONENT_HEIGHT) },
    { x: conversions.x * (215 + 2 * (0 + OPPONENT_WIDTH)), y: conversions.y * (5 * OPPONENT_HEIGHT) },
    { x: conversions.x * (215 + 3 * (0 + OPPONENT_WIDTH)), y: conversions.y * (4 * OPPONENT_HEIGHT) },
    { x: conversions.x * (215 + 3 * (0 + OPPONENT_WIDTH)), y: conversions.y * (5 * OPPONENT_HEIGHT) },
]
export const outerBeePathsW4S2 = outerBeeEndW4S2.map((end) => outerBeePath(end));


function innerBeePath(destination: Coordinates) {
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

function outerBeePath(destination: Coordinates) {
    const pts = [
        { x: conversions.x * 260, y: conversions.y * 1},
        { x: conversions.x * 260, y: conversions.y * 20},
        { x: conversions.x * 170, y: conversions.y * 90},
        { x: conversions.x * 100, y: conversions.y * 145},
        { x: conversions.x * 25, y: conversions.y * 240},
        { x: conversions.x * 10, y: conversions.y * 330},
        { x: conversions.x * 50, y: conversions.y * 430},
        { x: conversions.x * 135, y: conversions.y * 445},
        { x: conversions.x * 220, y: conversions.y * 405},
        { x: conversions.x * 280, y: conversions.y * 340},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}