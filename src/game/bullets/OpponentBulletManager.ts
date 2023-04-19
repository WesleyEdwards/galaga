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
import { Player } from "../Player";
import { OpponentBullet } from "./OpponentBullet";

export class OpponentBulletManager{
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
  
  checkPlayerCollision(player: Player): boolean {
    let collision = false;
    this.bullets.forEach((bullet) => {
      if (
        bullet.pos.y >= CANVAS_HEIGHT - PLAYER_TOP &&
        bullet.pos.y - BULLET_HEIGHT <= CANVAS_HEIGHT - PLAYER_BOTTOM &&
        bullet.pos.x >= player.centerX - PLAYER_WIDTH / 2 &&
        bullet.pos.x <= player.centerX + PLAYER_WIDTH / 2
      ){
        collision = true;
      }
    });
    return collision;
  }
}
