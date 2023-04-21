import { OpponentBulletManager } from "../bullets/OpponentBulletManager";
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
  private attackerCount = 0;
  private attackerTimer = 0;
  private bulletManager: OpponentBulletManager;

  constructor(context: CanvasRenderingContext2D, bulletManager: OpponentBulletManager) {
    this.context = context;
    this.bulletManager = bulletManager;
  }

  addOpponent(opponent: Opponent) {
    this.opponents.push(opponent);
  }

  startBreathing() {
    this.breathing = true;
  }

  handleHit(opp: Opponent) {
    const died = opp.handleHit();
    if (died) {
      const opponent = this.opponents[this.opponents.indexOf(opp)];
      this.opponents.splice(this.opponents.indexOf(opp), 1);
    }
  }

  chooseAttacker() {
    if (this.opponents.length > this.attackerCount) {
      let index = Math.floor(Math.random() * this.opponents.length);
      while (this.opponents[index].state === "attack") {
        index = Math.floor(Math.random() * this.opponents.length);
      }
      this.opponents[index].startAttackRun();
      return this.opponents[index];
    }
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
    //Drifting
    if (!this.breathing) {
      this.enemyDriftTimer += elapsedTime;
      this.enemyOffset += this.enemyDriftDirection * 0.05 * elapsedTime;
      if (this.enemyDriftTimer >= 2000) {
        this.enemyDriftDirection *= -1;
        this.enemyDriftTimer = 0;
      }
    //Breathing
    } else if (!this.breathingFlag) {
      if (Math.abs(this.enemyOffset) < 1) {
        this.enemyOffset = 0;
        this.breathingFlag = true;
        this.opponents.forEach((opp) => {
          opp.state = "breathe-in";
        });
      } else {
        this.enemyOffset -=
          0.05 * elapsedTime * (this.enemyOffset / Math.abs(this.enemyOffset));
      }
    }
    //Sprite animation
    if (this.spriteTimer >= 500) {
      this.spriteIndex = (this.spriteIndex + 1) % 2;
      this.spriteTimer = 0;
    }

    if (this.breathing) {
      this.opponents.forEach((opp) => {
        if (this.breathingFlag && opp.state !== "attack" && opp.state !== "breathe-in" && opp.state !== "breathe-out") {
          
          
          
          
        }
      });
      this.attackerCount = this.opponents.filter((opp) => opp.state === "attack").length;
      this.attackerTimer += elapsedTime;
      if ((this.attackerCount < 2 && this.attackerTimer >= 1000)) {
        this.attackerTimer = 0;
        const opp = this.chooseAttacker();
        if (opp) {
          this.bulletManager.addBullet(opp);
          opp.shotsFired++;
        }
      } else {
        const attackers = this.opponents.filter((opp) => opp.state === "attack");        
        attackers.forEach((opp) => {
          if (opp.shotsFired == 1 && opp.shotTimer >= 100) {
            this.bulletManager.addBullet(opp);
            opp.shotsFired++;
          } else if (opp.shotsFired == 2 && opp.shotTimer >= 4100) {
            this.bulletManager.addBullet(opp);
            opp.shotsFired = 1;
            opp.shotTimer = 0;
          }
        });
      }
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
