import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";
import { WaveInfo } from "../AllWaves";

const { x: convX, y: convY } = getConversions();

const innerBeeStartW4S2 = { x: convX * 300, y: convY * -OPPONENT_HEIGHT };
const innerBeeEndW4S1 = [
  { x: convX * (215 - 1 * (0 + OPPONENT_WIDTH)), y: convY * (4 * OPPONENT_HEIGHT) },
  { x: convX * (215 - 1 * (0 + OPPONENT_WIDTH)), y: convY * (5 * OPPONENT_HEIGHT) },
  { x: convX * (215 - 2 * (0 + OPPONENT_WIDTH)), y: convY * (4 * OPPONENT_HEIGHT) },
  { x: convX * (215 - 2 * (0 + OPPONENT_WIDTH)), y: convY * (5 * OPPONENT_HEIGHT) },
]
const innerBeePathsW4S2 = innerBeeEndW4S1.map((end) => innerBeePath(end));

const outerBeeStartW4S2 = { x: convX * 260, y: convY * -OPPONENT_HEIGHT };
const outerBeeEndW4S2 = [
    { x: convX * (215 + 2 * (0 + OPPONENT_WIDTH)), y: convY * (4 * OPPONENT_HEIGHT) },
    { x: convX * (215 + 2 * (0 + OPPONENT_WIDTH)), y: convY * (5 * OPPONENT_HEIGHT) },
    { x: convX * (215 + 3 * (0 + OPPONENT_WIDTH)), y: convY * (4 * OPPONENT_HEIGHT) },
    { x: convX * (215 + 3 * (0 + OPPONENT_WIDTH)), y: convY * (5 * OPPONENT_HEIGHT) },
]
const outerBeePathsW4S2 = outerBeeEndW4S2.map((end) => outerBeePath(end));


function innerBeePath(destination: Coordinates) {
    const pts = [
        { x: convX * 300, y: convY * 1},
        { x: convX * 300, y: convY * 30},
        { x: convX * 210, y: convY * 115},
        { x: convX * 130, y: convY * 175},
        { x: convX * 65, y: convY * 250},
        { x: convX * 50, y: convY * 320},
        { x: convX * 75, y: convY * 385},
        { x: convX * 130, y: convY * 390},
        { x: convX * 180, y: convY * 375},
        { x: convX * 230, y: convY * 320},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}

function outerBeePath(destination: Coordinates) {
    const pts = [
        { x: convX * 260, y: convY * 1},
        { x: convX * 260, y: convY * 20},
        { x: convX * 170, y: convY * 90},
        { x: convX * 100, y: convY * 145},
        { x: convX * 25, y: convY * 240},
        { x: convX * 10, y: convY * 330},
        { x: convX * 50, y: convY * 430},
        { x: convX * 135, y: convY * 445},
        { x: convX * 220, y: convY * 405},
        { x: convX * 280, y: convY * 340},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}

export const waveFourInfo: WaveInfo = [{
        start: innerBeeStartW4S2,
        paths: innerBeePathsW4S2,
        end: innerBeeEndW4S1,
    }, {
        start: outerBeeStartW4S2,
        paths: outerBeePathsW4S2,
        end: outerBeeEndW4S2,
    }
]