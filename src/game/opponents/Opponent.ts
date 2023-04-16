import { beePath1, butterflyPath1 } from "../../utils/paths/stage1/Wave1";
import { path2 } from "../../utils/paths/stage1/Wave2";
import { DrawManager } from "../helpers/DrawManager";
import { OPPONENT_WIDTH } from "../helpers/constants";
import { Coordinates, OpponentType } from "../helpers/types";
import { opponentSprites } from "./opponentStats";

export class Opponent {
  pos: Coordinates;
  private drawManager: DrawManager;
  private path: { x: number; y: number }[];
  private pathIndex = 0;
  private speed = 400 / 1000;
  private rotation = 0;
  constructor(
    context: CanvasRenderingContext2D,
    pos: Coordinates,
    endPos: Coordinates,
    oppType: OpponentType
  ) {
    this.pos = pos;
    this.drawManager = new DrawManager(
      context,
      OPPONENT_WIDTH,
      OPPONENT_WIDTH,
      opponentSprites[oppType][0]
    );
    if (oppType == 'bee') this.path = beePath1(endPos);
    else if (oppType == 'butterfly' || oppType == 'bossGalaga') this.path = path2(endPos)
    else this.path = [];
  }
  update(timeStamp: number) {
    // Follow path, if it exists
    if (this.pathIndex < this.path.length - 1 && this.path.length != 0) {
      let distTraveled = this.speed * timeStamp;
      let distRemaining = computeDistance(this.pos.x, this.pos.y, this.path[this.pathIndex + 1].x, this.path[this.pathIndex + 1].y);

      if (distTraveled > distRemaining) {
        distTraveled -= distRemaining;
        this.pos.x = this.path[this.pathIndex + 1].x;
        this.pos.y = this.path[this.pathIndex + 1].y;
        this.pathIndex++;
      }

      if (this.pathIndex < this.path.length - 1) {
        let dirX = this.path[this.pathIndex + 1].x - this.pos.x;
        let dirY = this.path[this.pathIndex + 1].y - this.pos.y;
        const dirMag = Math.sqrt(dirX * dirX + dirY * dirY);
        dirX /= dirMag;
        dirY /= dirMag;
        const moveX = distTraveled * dirX;
        const moveY = distTraveled * dirY;
        this.pos.x += moveX;
        this.pos.y += moveY;
        this.rotation = getAngle(this.pos, this.path[this.pathIndex + 1]);
      }
    }

    else {
      this.rotation = 0;
    }
  }
  draw() {
    this.drawManager.draw(this.pos.x, this.pos.y, this.rotation);
  }
  get rightX() {
    return this.pos.x + OPPONENT_WIDTH;
  }
}

function getAngle(pos: {x: number, y: number}, nextPos: {x: number, y: number}) {
  const dx = nextPos.x - pos.x;
  const dy = nextPos.y - pos.y;
  const angle = Math.atan2(dy, dx) + Math.PI / 2;
  return angle;
}

function computeDistance(pt1x: number, pt1y: number, pt2x: number, pt2y: number) {
  return Math.sqrt(Math.pow(pt1x - pt2x, 2) + Math.pow(pt1y - pt2y, 2));
}
