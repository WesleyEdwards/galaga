import {
    BULLET_HEIGHT,
    BULLET_WIDTH,
    CANVAS_HEIGHT,
    OPPONENT_WIDTH,
    PLAYER_BOTTOM,
    PLAYER_TOP,
    PLAYER_WIDTH,
  } from "../helpers/constants";
import { DrawManager } from "../helpers/DrawManager";
import { Opponent } from "../opponents/Opponent";
import { Player } from "../Player";
import { EnemyBullet } from "./EnemyBullet";

export class EnemyBulletManager{
  bullets: EnemyBullet[] = [];
  drawManager: DrawManager;
  constructor(context: CanvasRenderingContext2D) {
    this.drawManager = new DrawManager(context, BULLET_WIDTH, BULLET_HEIGHT, {
      srcX: 313,
      srcY: 122,
      srcWidth: 3,
      srcHeight: 8,
    });
  }

  update(elapsedTime: number, opponent?: Opponent) {


    this.bullets.forEach((bullet) => {
      bullet.update(elapsedTime);
    });

    while (this.bullets.length > 0 && this.bullets[0].pos.y > CANVAS_HEIGHT + BULLET_HEIGHT) {
      this.bullets.shift();
    }
  }
  checkPlayerCollision(player: Player): boolean {
    this.bullets.forEach((bullet) => {
      if (
        bullet.pos.y >= CANVAS_HEIGHT - PLAYER_TOP &&
        bullet.pos.y <= CANVAS_HEIGHT - PLAYER_BOTTOM &&
        bullet.pos.x >= player.centerX - PLAYER_WIDTH / 2 &&
        bullet.pos.x <= player.centerX + PLAYER_WIDTH / 2
      ){
        return true;
      }
    });
    return false;
  }
}
