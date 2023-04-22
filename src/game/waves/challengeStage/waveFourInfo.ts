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
  { x: convX * 550, y: convY * 200 },
  { x: convX * 550, y: convY * 200 },
  { x: convX * 550, y: convY * 200 },
  { x: convX * 550, y: convY * 200 },
]
const beeOnePaths = beeOneEnd.map((end) => pathOne(end));


function pathOne(destination: Coordinates) {
    const pts = [
        { x: convX * 300, y: convY * 1},
        { x: convX * 300, y: convY * 30},
        { x: convX * 230, y: convY * 320},
        { x: convX * 180, y: convY * 375},
        { x: convX * 150, y: convY * 395},
        { x: convX * 130, y: convY * 420},
        { x: convX * 100, y: convY * 365},
        { x: convX * 80, y: convY * 330},
        { x: convX * 50, y: convY * 315},
        { x: convX * 65, y: convY * 300},
        { x: convX * 130, y: convY * 270},
        { x: convX * 210, y: convY * 255},
        { x: convX * 230, y: convY * 265},
    ]
    pts.push(destination);
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}


export const waveFourInfo: WaveInfo = [{
    start: beeOneStart,
    paths: beeOnePaths,
    end: beeOneEnd,
    }
];