import {
  CANVAS_WIDTH,
  PLAYER_SPEED,
  CANVAS_HEIGHT,
  PLAYER_MOST_LEFT_POS,
  PLAYER_MOST_RIGHT_POS,
  PLAYER_RADIUS,
  PLAYER_TOP,
} from "../helpers/constants";
import { DrawManager } from "../helpers/DrawManager";
import { Direction, Keys } from "../helpers/types";

export class Player {
  private pos: number = CANVAS_WIDTH / 2 - PLAYER_RADIUS / 2;
  private moving: Direction = "none";
  private drawManager: DrawManager;

  constructor(context: CanvasRenderingContext2D) {
    this.drawManager = new DrawManager(context, PLAYER_RADIUS, PLAYER_RADIUS, {
      srcX: 1,
      srcY: 1,
      srcWidth: 16,
      srcHeight: 16,
      gap: 2,
      columns: 7,
    });
  }

  update(keys: Keys, elapsedTime: number) {
    if (keys.left) {
      this.movePlayer("left", elapsedTime);
      this.moving = "left";
    }
    if (keys.right) {
      this.movePlayer("right", elapsedTime);
      this.moving = "right";
    }

    if (this.moving === "left" && !keys.left) this.moving = "none";
    if (this.moving === "right" && !keys.right) this.moving = "none";
  }

  movePlayer(direction: Direction, elapsedTime: number) {
    if (direction === "left" && this.pos > PLAYER_MOST_LEFT_POS) {
      this.pos -= PLAYER_SPEED * elapsedTime;
    }
    if (
      direction === "right" &&
      this.pos < PLAYER_MOST_RIGHT_POS - PLAYER_RADIUS
    ) {
      this.pos += PLAYER_SPEED * elapsedTime;
    }
  }

  draw() {
    this.drawManager.draw(this.pos, CANVAS_HEIGHT - PLAYER_TOP, 6);
  }

  get centerX() {
    return this.pos + PLAYER_RADIUS / 2;
  }
}
