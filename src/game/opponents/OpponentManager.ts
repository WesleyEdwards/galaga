import { Opponent } from "./Opponent";

export class OpponentManager {
  opponents: Opponent[] = [];
  context: CanvasRenderingContext2D;

  private spriteTimer = 0;
  private spriteIndex = 0;
  private enemyDriftDirection = 1;
  private enemyDriftTimer = 0;
  private enemyOffset = -50;
  private breathingFlag = false;
  private breathing = false;
  attackerCount = 0;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  addOpponent(opponent: Opponent) {
    this.opponents.push(opponent);
  }

  startBreathing() {
    this.breathing = true;
  }

  handleHit(index: number) {
    const opp = this.opponents[index];
    opp.handleHit();
    if (opp.lives == 0) {
      if (opp.state === "attack") this.attackerCount--;
      this.opponents.splice(index, 1);
    }
  }

  chooseAttacker(): Opponent {
    this.attackerCount++;
    let index = Math.floor(Math.random() * this.opponents.length);
    while (this.opponents[index].state === "attack") {
      index = Math.floor(Math.random() * this.opponents.length);
    }
    this.opponents[index].state = "attack";
    return this.opponents[index];
  }

  resetState() {
    this.enemyDriftDirection = 1;
    this.enemyDriftTimer = 0;
    this.enemyOffset = -50;
    this.breathingFlag = false;
    this.breathing = false;
  }

  lastOneInPlace(): boolean {
    for (let i = 0; i < this.opponents.length; i++) {
      if (this.opponents[i].state !== "stationary") return false;
    }
    return true;
  }

  update(elapsedTime: number) {   
    this.spriteTimer += elapsedTime;
    if (!this.breathing) {
      this.enemyDriftTimer += elapsedTime;
      
      this.enemyOffset += this.enemyDriftDirection * 0.05 * elapsedTime;
      if (this.enemyDriftTimer >= 2000) {
        this.enemyDriftDirection *= -1;
        this.enemyDriftTimer = 0;
      }
    } else if (!this.breathingFlag){
      if (Math.abs(this.enemyOffset) < 1) {
        this.enemyOffset = 0;
        this.breathingFlag = true;
        this.opponents.forEach((opp) => {
          opp.state = "breathe-in";
        });
      } else {
        this.enemyOffset -= 0.05 * elapsedTime * (this.enemyOffset / Math.abs(this.enemyOffset));
      }
    }
    if (this.spriteTimer >= 500) {
      this.spriteIndex = (this.spriteIndex + 1) % 2;
      this.spriteTimer = 0;
    }

    this.opponents.forEach((opp) => {
      opp.update(elapsedTime);
      if (opp.state === "stationary") {
        opp.pos.x = opp.restingPosX + this.enemyOffset;
      } else if (opp.state === "entrance") {
        opp.path[opp.path.length - 1].x = opp.restingPosX + this.enemyOffset;
      } 
    });
  }

  draw() {
    this.opponents.forEach((opp) => {
      opp.draw(this.spriteIndex);
    });
  }
}
