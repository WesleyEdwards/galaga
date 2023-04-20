import { DrawManager } from "../helpers/DrawManager";
import { OPPONENT_HEIGHT, OPPONENT_WIDTH } from "../helpers/constants";
import {
  Coordinates,
  OpponentState,
  OpponentType,
  Path,
} from "../helpers/types";
import { opponentSprites } from "./opponentStats";

export class Opponent {
  private drawManager: DrawManager;
  private pathIndex = 0;
  private speed: number;
  private breathTimer = 0;
  private audio = new Audio();
  type: OpponentType;
  lives = 1;
  path: Coordinates[];
  state: OpponentState;
  pos: Coordinates = {} as Coordinates;
  restingPosX: number;
  constructor(
    context: CanvasRenderingContext2D,
    pos: Coordinates,
    oppType: OpponentType,
    path: Path,
    speed: number
  ) {
    this.pos.x = pos.x;
    this.pos.y = pos.y;
    this.type = oppType;
    this.drawManager = new DrawManager(
      context,
      OPPONENT_WIDTH,
      OPPONENT_WIDTH,
      opponentSprites[oppType][0]
    );
    this.speed = speed;
    this.path = path;
    this.state = "entrance";
    this.restingPosX = path[path.length - 1].x;
    if (oppType === "bossGalaga") this.lives = 2;
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
      //In final position
      if (
        this.pos.x == this.path[this.path.length - 1].x &&
        this.pos.y == this.path[this.path.length - 1].y
      ) {
        this.state = "stationary";
      }
    } else if (this.state === "attack") {
      //attack
    } else if (this.state === "breathe-in") {
      if (this.breathTimer < 2000) {
        const posX = this.pos.x + OPPONENT_WIDTH / 2;
        const posY = this.pos.y + OPPONENT_HEIGHT / 2;
        this.pos.x += ((posX - 250) / 250) * 0.3;
        this.pos.y += (posY / 250) * 0.4;
        this.breathTimer += timeStamp;
      } else {
        this.breathTimer = 0;
        this.state = "breathe-out";
      }
    } else if (this.state === "breathe-out") {
      if (this.breathTimer < 2000) {
        const posX = this.pos.x + OPPONENT_WIDTH / 2;
        const posY = this.pos.y + OPPONENT_HEIGHT / 2;
        this.pos.x -= ((posX - 250) / 250) * 0.3;
        this.pos.y -= (posY / 250) * 0.4;
        this.breathTimer += timeStamp;
      } else {
        this.breathTimer = 0;
        this.state = "breathe-in";
      }
    }
  }

  handleHit(): boolean {
    const audio = new Audio("assets/enemydeath.wav");
    audio.volume = 0.2;
    audio.play();
    this.lives--;
    this.drawManager.changeSprite(opponentSprites["bossGalaga"][1]);
    return this.lives === 0;
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
  get center(): Coordinates {
    return {
      x: this.pos.x + OPPONENT_WIDTH / 2,
      y: this.pos.y + OPPONENT_HEIGHT / 2,
    };
  }

  get score(): number{
    if(this.type === "bee"){
      return this.state === "entrance" || this.state === "attack" ? 100 : 50;
    }
    else if(this.type === "butterfly"){
      return this.state === "entrance" || this.state === "attack" ? 160 : 80;
    }
    return this.state === "entrance" || this.state === "attack" ? 400 : 150;
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
