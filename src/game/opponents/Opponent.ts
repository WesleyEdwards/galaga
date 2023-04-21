import { DrawManager } from "../helpers/DrawManager";
import { OPPONENT_HEIGHT, OPPONENT_WIDTH } from "../helpers/constants";
import {
  Coordinates,
  OpponentState,
  OpponentType,
  Path,
} from "../helpers/types";
import { getAttackPath } from "./AttackPatterns";
import { opponentSprites } from "./opponentStats";

export class Opponent {
  private drawManager: DrawManager;
  pathIndex = 0;
  private speed: number;
  private breathTimer = 0;
  private audio = new Audio();
  private attackPath: Coordinates[] = [];
  private activePath: Coordinates[] = [];
  private breathingOffsetX = 0;
  private breathingOffsetY = 0;
  private secondaryState: OpponentState | "" = "";
  shotsFired = 0;
  shotTimer = 0;
  type: OpponentType;
  lives = 1;
  path: Coordinates[];
  state: OpponentState | "";
  pos: Coordinates = {} as Coordinates;
  restingPosX: number;
  restingPosY: number;
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
    this.restingPosY = path[path.length - 1].y;
    if (oppType === "bossGalaga") this.lives = 2;
    this.activePath = path;
  }
  update(timeStamp: number) {
    // Follow path, if it exists
    if (this.state === "entrance") {
      this.followPath(timeStamp, () => {this.state = "stationary";});
      
    } else if (this.state === "attack") {
      
      this.shotTimer += timeStamp;
      if (this.attackPath.length === 0) {
        this.attackPath = getAttackPath(this.pos);
        this.activePath = this.attackPath;
        this.pathIndex = 0;
      }
      this.followPath(timeStamp, () => {
        this.activePath = [];
        this.pathIndex = 0;
        this.state = this.secondaryState;
        this.secondaryState = "";
        this.pos.x = this.restingPosX + this.breathingOffsetX;
        this.pos.y = this.restingPosY + this.breathingOffsetY;
        
      });
      
    } 
    if (this.state === "breathe-in" || this.secondaryState === "breathe-in") {
      if (this.breathTimer < 2000) {
        const posX = this.restingPosX + OPPONENT_WIDTH / 2;
        const posY = this.restingPosY + OPPONENT_HEIGHT / 2;
        this.breathingOffsetX += ((posX - 250) / 250) * 0.3;
        this.breathingOffsetY += (posY / 250) * 0.4;
        if (this.state == "breathe-in") {
          this.pos.x = this.restingPosX + this.breathingOffsetX;
          this.pos.y = this.restingPosY + this.breathingOffsetY;
        }
        this.breathTimer += timeStamp;
      } else {
        this.breathTimer = 0;
        if (this.state === "breathe-in") this.state = "breathe-out";
        else this.secondaryState = "breathe-out";
      }
    }
    if (this.state === "breathe-out" || this.secondaryState === "breathe-out") {
      if (this.breathTimer < 2000) {
        const posX = this.restingPosX + OPPONENT_WIDTH / 2;
        const posY = this.restingPosY + OPPONENT_HEIGHT / 2;
        this.breathingOffsetX -= ((posX - 250) / 250) * 0.3;
        this.breathingOffsetY -= (posY / 250) * 0.4;
        if (this.state == "breathe-out") {
          this.pos.x = this.restingPosX + this.breathingOffsetX;
          this.pos.y = this.restingPosY + this.breathingOffsetY;
        }
        this.breathTimer += timeStamp;
      } else {
        this.breathTimer = 0;
        if (this.state === "breathe-out") this.state = "breathe-in";
        else this.secondaryState = "breathe-in";
      }
    }
  }

  handleHit(): boolean {
    const audio = new Audio("assets/enemydeath.wav");
    audio.volume = 0.2;
    audio.play();
    this.lives--;
    this.drawManager.changeSprite(opponentSprites["bossGalaga"][1]);
    if (this.lives === 0) this.path[this.path.length - 1].x = this.restingPosX;
    return this.lives === 0;
  }

  startAttackRun() {
    this.secondaryState = this.state;
    this.state = "attack";
  }

  followPath(timeStamp: number, onCompletion: () => void) {
    if (this.pathIndex < this.activePath.length - 1) {
      let distTraveled = this.speed * timeStamp;
      let distRemaining = computeDistance(
        this.pos,
        this.activePath[this.pathIndex + 1]
      );
  
      if (distTraveled > distRemaining) {
        distTraveled -= distRemaining;
        this.pos.x = this.activePath[this.pathIndex + 1].x;
        this.pos.y = this.activePath[this.pathIndex + 1].y;
        this.pathIndex++;
      }
  
      if (this.pathIndex < this.activePath.length - 1) {
        let dirX = this.activePath[this.pathIndex + 1].x - this.pos.x;
        let dirY = this.activePath[this.pathIndex + 1].y - this.pos.y;
        const dirMag = Math.sqrt(dirX * dirX + dirY * dirY);
        dirX /= dirMag;
        dirY /= dirMag;
        const moveX = distTraveled * dirX;
        const moveY = distTraveled * dirY;
        this.pos.x += moveX;
        this.pos.y += moveY;
      } else {
        onCompletion();
      }
    }
  }
  
  draw(spriteIndex: number) {
    this.drawManager.draw(this.pos, this.rotation, spriteIndex);
  }
  get rightX() {
    return this.pos.x + OPPONENT_WIDTH;
  }
  get centerX() {
    return this.pos.x + OPPONENT_WIDTH / 2;
  }
  get rotation() {
    if (this.pathIndex < this.activePath.length - 1 && this.activePath.length != 0) {
      return getAngle(this.pos, this.activePath[this.pathIndex + 1]);
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

//ChatGPT generated this, I added the pi/2 offset
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
