import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";
import { WaveInfo } from "../AllWaves";

const { x: convX, y: convY } = getConversions();


const beeOneStart = { x: convX *-OPPONENT_WIDTH, y: convY * 450 };
const beeOneEnd = [
  { x: convX * 500 + OPPONENT_WIDTH, y: convY * -OPPONENT_HEIGHT },
  { x: convX * 500 + OPPONENT_WIDTH, y: convY * -OPPONENT_HEIGHT },
  { x: convX * 500 + OPPONENT_WIDTH, y: convY * -OPPONENT_HEIGHT },
  { x: convX * 500 + OPPONENT_WIDTH, y: convY * -OPPONENT_HEIGHT },
  { x: convX * 500 + OPPONENT_WIDTH, y: convY * -OPPONENT_HEIGHT },
  { x: convX * 500 + OPPONENT_WIDTH, y: convY * -OPPONENT_HEIGHT },
  { x: convX * 500 + OPPONENT_WIDTH, y: convY * -OPPONENT_HEIGHT },
  { x: convX * 500 + OPPONENT_WIDTH, y: convY * -OPPONENT_HEIGHT },
]
const beeOnePaths = beeOneEnd.map((end) => pathOne(end));


function pathOne(destination: Coordinates) {
    const pts = [
        { x: convX * 100, y: convY * 450},
        { x: convX * 200, y: convY * 430},
        { x: convX * 250, y: convY * 400},
        { x: convX * 320, y: convY * 350},
        { x: convX * 340, y: convY * 250},
        { x: convX * 330, y: convY * 130},
        { x: convX * 270, y: convY * 90},
        { x: convX * 250, y: convY * 50},
        { x: convX * 230, y: convY * 90},
        { x: convX * 170, y: convY * 130},
        { x: convX * 160, y: convY * 250},
        { x: convX * 180, y: convY * 350},
        { x: convX * 250, y: convY * 400},
        { x: convX * 350, y: convY * 300},
        { x: convX * 400, y: convY * 200},
        { x: convX * 450, y: convY * 100},
    ]
    pts.push(destination);
    const smoothCurve =  generatePointsOnBezierCurve(pts, 15);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}


export const waveTwoInfo: WaveInfo = [{
    start: beeOneStart,
    paths: beeOnePaths,
    end: beeOneEnd,
    }
];