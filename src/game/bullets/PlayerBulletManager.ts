import {
  BULLET_HEIGHT,
  BULLET_WIDTH,
  CANVAS_HEIGHT,
  OPPONENT_WIDTH,
  PLAYER_TOP,
} from "../helpers/constants";
import { Keys } from "../helpers/types";
import { Opponent } from "../opponents/Opponent";
import { PlayerBullet } from "./PlayerBullet";
import { DrawManager } from "../helpers/DrawManager";

export class PlayerBulletManager {
  bullets: PlayerBullet[] = [];
  drawManager: DrawManager;
  private attractShootTimer: number | undefined;
  constructor(context: CanvasRenderingContext2D, attract: boolean) {
    this.attractShootTimer = attract ? 0 : undefined;
    this.drawManager = new DrawManager(context, BULLET_WIDTH, BULLET_HEIGHT, {
      srcX: 313,
      srcY: 122,
      srcWidth: 3,
      srcHeight: 8,
    });
  }

  update(elapsedTime: number, keys: Keys, playerCenterX?: number) {
    if (playerCenterX === undefined) {
      return (this.bullets.length = 0);
    }
    const attractShoot = this.checkAttractShoot(elapsedTime);
    if (keys.shoot || attractShoot) {
      const a = new Audio("assets/Ship Shot.wav");
      a.volume = 0.1;
      a.play();
      this.bullets.push(
        new PlayerBullet({
          x: playerCenterX - BULLET_WIDTH / 2,
          y: CANVAS_HEIGHT - PLAYER_TOP - 5,
        })
      );
      keys.shoot = false;
    }

    this.bullets.forEach((bullet) => {
      bullet.update(elapsedTime);
    });

    if (this.bullets.length > 0 && this.bullets[0].pos.y < 0) {
      this.bullets.shift();
    }
  }

  draw() {
    this.bullets.forEach((bullet) => {
      this.drawManager.draw(bullet.pos);
    });
  }

  checkAttractShoot(elapsedTime: number): boolean {
    if (this.attractShootTimer === undefined) return false;
    this.attractShootTimer += elapsedTime;
    if (this.attractShootTimer > 500) {
      this.attractShootTimer = 0;
      return true;
    }
    return false;
  }

  checkOpponentCollision(opponents: Opponent[]): Opponent[] {
    const hitOpponents: Opponent[] = [];
    this.bullets.forEach((bullet) => {
      opponents.forEach((opp) => {
        if (
          bullet.pos.x >= opp.pos.x &&
          bullet.pos.x <= opp.rightX &&
          bullet.pos.y > opp.pos.y &&
          bullet.pos.y < opp.pos.y + OPPONENT_WIDTH
        ) {
          hitOpponents.push(opp);
          this.bullets.splice(this.bullets.indexOf(bullet), 1);
        }
      });
    });
    return hitOpponents;
  }
}
