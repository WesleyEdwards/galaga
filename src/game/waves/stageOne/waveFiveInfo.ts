import { getConversions, generatePointsOnBezierCurve } from "../paths/PathFollower";
import { OPPONENT_WIDTH, OPPONENT_HEIGHT } from "../../helpers/constants";
import { Coordinates, Path } from "../../helpers/types";
import { WaveInfo } from "../AllWaves";

const { x: convX, y: convY } = getConversions();

const beeStartW5S1 = { x: convX * 200, y: convY * -OPPONENT_HEIGHT };
const beeEndW5S1 = [
  { x: convX * (215 - 3 * (10 + OPPONENT_WIDTH)), y: convY * (4 * OPPONENT_HEIGHT) },
  { x: convX * (215 - 3 * (10 + OPPONENT_WIDTH)), y: convY * (5 * OPPONENT_HEIGHT) },
  { x: convX * (215 - 4 * (10 + OPPONENT_WIDTH)), y: convY * (4 * OPPONENT_HEIGHT) },
  { x: convX * (215 - 4 * (10 + OPPONENT_WIDTH)), y: convY * (5 * OPPONENT_HEIGHT) },

  { x: convX * (215 + 4 * (10 + OPPONENT_WIDTH)), y: convY * (4 * OPPONENT_HEIGHT) },
  { x: convX * (215 + 4 * (10 + OPPONENT_WIDTH)), y: convY * (5 * OPPONENT_HEIGHT) },
  { x: convX * (215 + 5 * (10 + OPPONENT_WIDTH)), y: convY * (4 * OPPONENT_HEIGHT) },
  { x: convX * (215 + 5 * (10 + OPPONENT_WIDTH)), y: convY * (5 * OPPONENT_HEIGHT) },
]
const beePathsW5S1 = beeEndW5S1.map((end) => path(end));


function path(destination: Coordinates) {
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

export const waveFiveInfo: WaveInfo = [
  {
    start: beeStartW5S1,
    paths: beePathsW5S1,
    end: beeEndW5S1,
  }
]