import {
  Direction,
  Keys,
  CANVAS_WIDTH,
  tsImageUrl,
  STATS_BOX_TOP,
  PLAYER_SPEED,
  PLAYER_WIDTH,
} from "../helpers/constants";

export class Player {
  private pos: number = CANVAS_WIDTH / 2;
  private moving: Direction = "none";

  update(keys: Keys) {
    if (keys.direction === "left") {
      this.movePlayer("left");
      this.moving = "left";
    }
    if (keys.direction === "right") {
      this.movePlayer("right");
      this.moving = "right";
    }

    if (this.moving !== keys.direction) {
      this.moving = "none";
    }
  }

  movePlayer(direction: Direction) {
    if (direction === "left" && this.pos > 0) this.pos -= PLAYER_SPEED;
    if (direction === "right" && this.pos < CANVAS_WIDTH - PLAYER_WIDTH)
      this.pos += PLAYER_SPEED;
  }

  draw(context: CanvasRenderingContext2D) {
    const image = new Image(PLAYER_WIDTH, PLAYER_WIDTH);
    image.src = tsImageUrl;
    context.drawImage(
      image,
      this.pos,
      STATS_BOX_TOP - 150,
      PLAYER_WIDTH,
      PLAYER_WIDTH
    );
  }
}
