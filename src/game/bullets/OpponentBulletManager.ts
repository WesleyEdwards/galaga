import {
  BULLET_HEIGHT,
  BULLET_WIDTH,
  CANVAS_HEIGHT,
  OPPONENT_HEIGHT,
  PLAYER_BOTTOM,
  PLAYER_TOP,
  PLAYER_WIDTH,
} from "../helpers/constants";
import { DrawManager } from "../helpers/DrawManager";
import { Opponent } from "../opponents/Opponent";
import { OpponentBullet } from "./OpponentBullet";

export class OpponentBulletManager {
  bullets: OpponentBullet[] = [];
  drawManager: DrawManager;
  constructor(context: CanvasRenderingContext2D) {
    this.drawManager = new DrawManager(context, BULLET_WIDTH, BULLET_HEIGHT, {
      srcX: 313,
      srcY: 140,
      srcWidth: 3,
      srcHeight: 8,
    });
  }

  update(elapsedTime: number, opponent?: Opponent) {
    if (opponent) {
      this.bullets.push(
        new OpponentBullet({
          x: opponent.centerX - BULLET_WIDTH / 2,
          y: opponent.pos.y + OPPONENT_HEIGHT,
        })
      );
    }

    this.bullets.forEach((bullet) => {
      bullet.update(elapsedTime);
    });

    while (this.bullets.length > 0 && this.bullets[0].pos.y > CANVAS_HEIGHT + BULLET_HEIGHT) {
      this.bullets.shift();
    }
  }

  draw() {
    this.bullets.forEach((bullet) => {
      this.drawManager.draw(bullet.pos);
    });
  }

  addBullet(opp: Opponent) {
    this.bullets.push(
      new OpponentBullet({
        x: opp.centerX - BULLET_WIDTH / 2,
        y: opp.pos.y + OPPONENT_HEIGHT,
      })
    );
  }

  checkPlayerCollision(playerPosX?: number): boolean {
    if (!playerPosX) return false;
    for(let i = 0; i < this.bullets.length; i++) {
      const bullet = this.bullets[i];
      if (
        bullet.pos.y >= CANVAS_HEIGHT - PLAYER_TOP &&
        bullet.pos.y - BULLET_HEIGHT <= CANVAS_HEIGHT - PLAYER_BOTTOM &&
        bullet.pos.x >= playerPosX - PLAYER_WIDTH / 2 &&
        bullet.pos.x <= playerPosX + PLAYER_WIDTH / 2
        ) {
        return true
      }
    }
    return false;
  }
}
