  import { DrawManager } from "../helpers/DrawManager";
import { OPPONENT_HEIGHT, OPPONENT_WIDTH } from "../helpers/constants";
import { Coordinates, OpponentState, OpponentType, Path } from "../helpers/types";
import { opponentSprites } from "./opponentStats";

export class Opponent {
  pos: Coordinates = {} as Coordinates;
  private drawManager: DrawManager;
  private path: { x: number; y: number }[];
  private pathIndex = 0;
  private speed: number;
  state: OpponentState;
  private breathTimer = 0;
  constructor(
    context: CanvasRenderingContext2D,
    pos: Coordinates,
    oppType: OpponentType,
    path: Path,
    speed: number,
  ) {
    this.pos.x = pos.x;
    this.pos.y = pos.y;
    this.drawManager = new DrawManager(
      context,
      OPPONENT_WIDTH,
      OPPONENT_WIDTH,
      opponentSprites[oppType][0],
    );
    this.speed = speed;
    this.path = path;
    this.state = "entrance";
  }
  update(timeStamp: number) {
    
    // Follow path, if it exists
    if (this.pathIndex < this.path.length - 1 && this.state === "entrance") {
      let distTraveled = this.speed * timeStamp;
      let distRemaining = computeDistance(
        this.pos,
        this.path[this.pathIndex + 1]
      );

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
      }
    }

    else if (this.state === "attack") {
      //attack
    }

    else if (this.state === "breathe-in") {
      if (this.breathTimer < 2000) {
        const posX = this.pos.x + OPPONENT_WIDTH / 2;
        const posY = this.pos.y + OPPONENT_HEIGHT / 2;
        this.pos.x += ((posX - 250) / 250 * .3);
        this.pos.y += (posY / 250) * .4;
        this.breathTimer += timeStamp;
      } else {
        this.breathTimer = 0;
        this.state = "breathe-out";
      }
    }

    else if (this.state === "breathe-out") {
      if (this.breathTimer < 2000) {
        const posX = this.pos.x + OPPONENT_WIDTH / 2;
        const posY = this.pos.y + OPPONENT_HEIGHT / 2;
        this.pos.x -= ((posX - 250) / 250) * .3;
        this.pos.y -= (posY / 250) * .4;
        this.breathTimer += timeStamp;
      } else {
        this.breathTimer = 0;
        this.state = "breathe-in";
      }
    }

    
  }
  draw(spriteIndex: number) {
    this.drawManager.draw(this.pos, this.rotation, spriteIndex);
  }
  get rightX() {
    return this.pos.x + OPPONENT_WIDTH;
  }
  get rotation() {
    if (this.pathIndex < this.path.length - 1 && this.path.length != 0) {
      return getAngle(this.pos, this.path[this.pathIndex + 1]);
    }
    return 0;
  }
}

function getAngle(pos: Coordinates, nextPos: Coordinates) {
  const dx = nextPos.x - pos.x;
  const dy = nextPos.y - pos.y;
  const angle = Math.atan2(dy, dx) + Math.PI / 2;
  return angle;
}

function computeDistance(point1: Coordinates, point2: Coordinates) {
  return Math.sqrt(
    Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)
  );
}
