import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";

const conversions = getConversions();

export const innerBeeStartW5S2 = { x: conversions.x * 200, y: conversions.y * -OPPONENT_HEIGHT };
const innerBeeEndW5S1 = [
    { x: conversions.x * (215 + 4 * (10 + OPPONENT_WIDTH)), y: conversions.y * (4 * OPPONENT_HEIGHT) },
    { x: conversions.x * (215 + 4 * (10 + OPPONENT_WIDTH)), y: conversions.y * (5 * OPPONENT_HEIGHT) },
    { x: conversions.x * (215 + 5 * (10 + OPPONENT_WIDTH)), y: conversions.y * (4 * OPPONENT_HEIGHT) },
    { x: conversions.x * (215 + 5 * (10 + OPPONENT_WIDTH)), y: conversions.y * (5 * OPPONENT_HEIGHT) },

]
export const innerBeePathsW5S2 = innerBeeEndW5S1.map((end) => innerBeePath(end));

export const outerBeeStartW5S2 = { x: conversions.x * 240, y: conversions.y * -OPPONENT_HEIGHT };
const outerBeeEndW5S2 = [
    { x: conversions.x * (215 - 3 * (10 + OPPONENT_WIDTH)), y: conversions.y * (4 * OPPONENT_HEIGHT) },
    { x: conversions.x * (215 - 3 * (10 + OPPONENT_WIDTH)), y: conversions.y * (5 * OPPONENT_HEIGHT) },
    { x: conversions.x * (215 - 4 * (10 + OPPONENT_WIDTH)), y: conversions.y * (4 * OPPONENT_HEIGHT) },
    { x: conversions.x * (215 - 4 * (10 + OPPONENT_WIDTH)), y: conversions.y * (5 * OPPONENT_HEIGHT) },
]
export const outerBeePathsW5S2 = outerBeeEndW5S2.map((end) => outerBeePath(end));


function innerBeePath(destination: Coordinates) {
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

function outerBeePath(destination: Coordinates) {
    const pts = [
        { x: conversions.x * 240, y: conversions.y * 1},
        { x: conversions.x * 240, y: conversions.y * 20},
        { x: conversions.x * 330, y: conversions.y * 90},
        { x: conversions.x * 400, y: conversions.y * 145},
        { x: conversions.x * 475, y: conversions.y * 240},
        { x: conversions.x * 490, y: conversions.y * 330},
        { x: conversions.x * 450, y: conversions.y * 430},
        { x: conversions.x * 365, y: conversions.y * 445},
        { x: conversions.x * 280, y: conversions.y * 405},
        { x: conversions.x * 220, y: conversions.y * 340},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}