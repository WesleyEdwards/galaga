import { AttractManager } from "./AttractManager";
import {
  CANVAS_WIDTH,
  PLAYER_SPEED,
  CANVAS_HEIGHT,
  PLAYER_MOST_LEFT_POS,
  PLAYER_MOST_RIGHT_POS,
  PLAYER_WIDTH,
  PLAYER_TOP,
} from "./helpers/constants";
import { DrawManager } from "./helpers/DrawManager";
import { Direction, Keys } from "./helpers/types";

export class Player {
  private pos: number = CANVAS_WIDTH / 2 - PLAYER_WIDTH / 2;
  private moving: Direction = "none";
  private drawManager: DrawManager;
  private attract: AttractManager | undefined;
  private deathTimer: number | undefined = undefined; // undefined if playing
  private lives: number = 2;

  constructor(context: CanvasRenderingContext2D, attract: boolean) {
    if (attract) this.attract = new AttractManager();
    this.drawManager = new DrawManager(context, PLAYER_WIDTH, PLAYER_WIDTH, {
      srcX: 109,
      srcY: 1,
      srcWidth: 16,
      srcHeight: 16,
    });
  }

  update(keys: Keys, elapsedTime: number, justDied: boolean) {
    this.checkDeathState(elapsedTime, justDied);

    if (this.attract) {
      this.attract.update(elapsedTime);
      this.movePlayer(this.attract.currentMoving, elapsedTime);
    }

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

  private movePlayer(direction: Direction, elapsedTime: number) {
    if (direction === "left" && this.pos > PLAYER_MOST_LEFT_POS) {
      this.pos -= PLAYER_SPEED * elapsedTime;
    }
    if (
      direction === "right" &&
      this.pos < PLAYER_MOST_RIGHT_POS - PLAYER_WIDTH
    ) {
      this.pos += PLAYER_SPEED * elapsedTime;
    }
  }

  private handleHit() {
    this.lives--;
    const audio = new Audio("assets/playerdeath.wav");
    audio.volume = 0.1;
    audio.play();
    this.deathTimer = 0;
    this.pos = CANVAS_WIDTH / 2 - PLAYER_WIDTH / 2;
  }

  private checkDeathState(elapsedTime: number, justDied: boolean) {
    if (justDied) this.handleHit();
    if (this.deathTimer === undefined) return;
    this.deathTimer += elapsedTime;
    if (this.deathTimer > 5000) this.deathTimer = undefined;
  }

  draw() {
    if (this.isDead) return;
    this.drawManager.draw({ x: this.pos, y: CANVAS_HEIGHT - PLAYER_TOP });
  }

  get centerX(): number | undefined {
    if (this.isDead) return undefined;
    return this.pos + PLAYER_WIDTH / 2;
  }
  get isDead() {
    return this.deathTimer !== undefined;
  }

  get endGame() {
    return this.lives === 1;
  }
}
