import {
  BULLET_HEIGHT,
  BULLET_WIDTH,
  CANVAS_HEIGHT,
  OPPONENT_WIDTH,
  PLAYER_TOP,
} from "../helpers/constants";
import { DrawManager } from "../helpers/DrawManager";
import { Keys } from "../helpers/types";
import { Opponent } from "../opponents/Opponent";
import { Bullet } from "./Bullet";

export class BulletManager {
  bullets: Bullet[] = [];
  private drawManager: DrawManager;
  constructor(context: CanvasRenderingContext2D) {
    this.drawManager = new DrawManager(context, BULLET_WIDTH, BULLET_HEIGHT, {
      srcX: 313,
      srcY: 122,
      srcWidth: 3,
      srcHeight: 8,
    });
  }

  update(elapsedTime: number, keys: Keys, playerCenterX: number) {
    if (keys.shoot) {
      this.bullets.push(
        new Bullet({
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
      this.drawManager.draw(bullet.pos.x, bullet.pos.y);
    });
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
