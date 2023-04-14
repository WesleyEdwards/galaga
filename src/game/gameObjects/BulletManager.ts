import { BULLET_RADIUS, CANVAS_HEIGHT, PLAYER_TOP } from "../helpers/constants";
import { DrawManager } from "../helpers/DrawManager";
import { Keys } from "../helpers/types";
import { Bullet } from "./Bullet";

export class BulletManager {
  bullets: Bullet[] = [];
  private drawManager: DrawManager;
  constructor(context: CanvasRenderingContext2D) {
    this.drawManager = new DrawManager(
      context,
      BULLET_RADIUS * 2,
      BULLET_RADIUS * 2,
      {
        srcX: 307,
        srcY: 118,
        srcWidth: 16,
        srcHeight: 16,
        gap: 0,
        columns: 1,
      }
    );
  }

  update(elapsedTime: number, keys: Keys, playerCenterX: number) {
    if (keys.shoot) {
      this.bullets.push(
        new Bullet({ x: playerCenterX, y: CANVAS_HEIGHT - PLAYER_TOP - 5 })
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
      this.drawManager.draw(
        bullet.pos.x - BULLET_RADIUS,
        bullet.pos.y - BULLET_RADIUS,
        0
      );
    });
  }
}
