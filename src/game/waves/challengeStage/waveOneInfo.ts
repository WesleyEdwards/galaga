import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";
import { WaveInfo } from "../AllWaves";

const { x: convX, y: convY } = getConversions();


const beeOneStart = { x: convX * 300, y: convY * -OPPONENT_HEIGHT };
const beeOneEnd = [
  { x: convX * 550, y: convY * 200 },
  { x: convX * 550, y: convY * 200 },
  { x: convX * 550, y: convY * 200 },
  { x: convX * 550, y: convY * 200 },
]
const beeOnePaths = beeOneEnd.map((end) => pathOne(end));

const beeTwoStart = { x: convX * 200, y: convY * -OPPONENT_HEIGHT };
const beeTwoEnd = [
  { x: convX * -50, y: convY * 200 },
  { x: convX * -50, y: convY * 200 },
  { x: convX * -50, y: convY * 200 },
  { x: convX * -50, y: convY * 200 },
]
const beeTwoPaths = beeTwoEnd.map((end) => pathTwo(end));


function pathOne(destination: Coordinates) {
    const pts = [
        { x: convX * 300, y: convY * 1},
        { x: convX * 300, y: convY * 30},
        { x: convX * 230, y: convY * 320},
        { x: convX * 180, y: convY * 375},
        { x: convX * 130, y: convY * 390},
        { x: convX * 75, y: convY * 385},
        { x: convX * 50, y: convY * 370},
        { x: convX * 65, y: convY * 330},
        { x: convX * 130, y: convY * 300},
        { x: convX * 210, y: convY * 255},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}

function pathTwo(destination: Coordinates) {
    const pts = [
        { x: convX * 200, y: convY * 1},
        { x: convX * 200, y: convY * 30},
        { x: convX * 270, y: convY * 320},
        { x: convX * 320, y: convY * 375},
        { x: convX * 370, y: convY * 390},
        { x: convX * 425, y: convY * 385},
        { x: convX * 450, y: convY * 370},
        { x: convX * 435, y: convY * 330},
        { x: convX * 370, y: convY * 300},
        { x: convX * 290, y: convY * 255},
    ]
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push(destination);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}

export const waveOneInfo: WaveInfo = [{
        start: beeOneStart,
        paths: beeOnePaths,
        end: beeOneEnd,
    },
    {
        start: beeTwoStart,
        paths: beeTwoPaths,
        end: beeTwoEnd,
    }
  ]
