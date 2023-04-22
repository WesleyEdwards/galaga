import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates } from "../../helpers/types";
import { WaveInfo } from "../AllWaves";

const { x: convX, y: convY } = getConversions();


const beeStart = { x: convX * 300, y: convY * -OPPONENT_HEIGHT };
const beeEnd = [
  { x: convX * (215 - 1 * (10 + OPPONENT_WIDTH)), y: convY * (4 * OPPONENT_HEIGHT) },
  { x: convX * (215 - 1 * (10 + OPPONENT_WIDTH)), y: convY * (5 * OPPONENT_HEIGHT) },
  { x: convX * (215 - 2 * (10 + OPPONENT_WIDTH)), y: convY * (4 * OPPONENT_HEIGHT) },
  { x: convX * (215 - 2 * (10 + OPPONENT_WIDTH)), y: convY * (5 * OPPONENT_HEIGHT) },

  { x: convX * (215 + 2 * (10 + OPPONENT_WIDTH)), y: convY * (4 * OPPONENT_HEIGHT) },
  { x: convX * (215 + 2 * (10 + OPPONENT_WIDTH)), y: convY * (5 * OPPONENT_HEIGHT) },
  { x: convX * (215 + 3 * (10 + OPPONENT_WIDTH)), y: convY * (4 * OPPONENT_HEIGHT) },
  { x: convX * (215 + 3 * (10 + OPPONENT_WIDTH)), y: convY * (5 * OPPONENT_HEIGHT) },
]
const beePaths = beeEnd.map((end) => path(end));


function path(destination: Coordinates) {
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
    pts.push(destination);
    const smoothCurve =  generatePointsOnBezierCurve(pts, 25);
    smoothCurve.push({x: destination.x, y: destination.y + 1});
    return smoothCurve;
}

export const waveFourInfo: WaveInfo = [{
      start: beeStart,
      paths: beePaths,
      end: beeEnd,
    }
  ]
