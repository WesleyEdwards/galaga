import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";
import { WaveInfo } from "../AllWaves";

const { x: convX, y: convY } = getConversions();

const innerBeeStart = { x: convX * 200, y: convY * -OPPONENT_HEIGHT };
const innerBeeEnd = [
    { x: convX * (215 + 4 * (0 + OPPONENT_WIDTH)), y: convY * (4 * OPPONENT_HEIGHT) },
    { x: convX * (215 + 4 * (0 + OPPONENT_WIDTH)), y: convY * (5 * OPPONENT_HEIGHT) },
    { x: convX * (215 + 5 * (0 + OPPONENT_WIDTH)), y: convY * (4 * OPPONENT_HEIGHT) },
    { x: convX * (215 + 5 * (0 + OPPONENT_WIDTH)), y: convY * (5 * OPPONENT_HEIGHT) },

]
const innerBeePaths = innerBeeEnd.map((end) => innerBeePath(end));

const outerBeeStart = { x: convX * 240, y: convY * -OPPONENT_HEIGHT };
const outerBeeEnd = [
    { x: convX * (215 - 3 * (0 + OPPONENT_WIDTH)), y: convY * (4 * OPPONENT_HEIGHT) },
    { x: convX * (215 - 3 * (0 + OPPONENT_WIDTH)), y: convY * (5 * OPPONENT_HEIGHT) },
    { x: convX * (215 - 4 * (0 + OPPONENT_WIDTH)), y: convY * (4 * OPPONENT_HEIGHT) },
    { x: convX * (215 - 4 * (0 + OPPONENT_WIDTH)), y: convY * (5 * OPPONENT_HEIGHT) },
]
const outerBeePaths = outerBeeEnd.map((end) => outerBeePath(end));


function innerBeePath(destination: Coordinates) {
    const pts = [
        { x: convX * 200, y: convY * 1},
        { x: convX * 200, y: convY * 30},
        { x: convX * 290, y: convY * 115},
        { x: convX * 370, y: convY * 175},
        { x: convX * 435, y: convY * 250},
        { x: convX * 450, y: convY * 320},
        { x: convX * 425, y: convY * 385},
        { x: convX * 370, y: convY * 390},
        { x: convX * 320, y: convY * 375},
        { x: convX * 270, y: convY * 320},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}

function outerBeePath(destination: Coordinates) {
    const pts = [
        { x: convX * 240, y: convY * 1},
        { x: convX * 240, y: convY * 20},
        { x: convX * 330, y: convY * 90},
        { x: convX * 400, y: convY * 145},
        { x: convX * 475, y: convY * 240},
        { x: convX * 490, y: convY * 330},
        { x: convX * 450, y: convY * 430},
        { x: convX * 365, y: convY * 445},
        { x: convX * 280, y: convY * 405},
        { x: convX * 220, y: convY * 340},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}

export const waveFiveInfo: WaveInfo = [{
        start: innerBeeStart,
        paths: innerBeePaths,
        end: innerBeeEnd,
    }, {
        start: outerBeeStart,
        paths: outerBeePaths,
        end: outerBeeEnd,
    }
]