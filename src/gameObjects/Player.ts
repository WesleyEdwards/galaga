import {
  Coordinates,
  Direction,
  GRID_HEIGHT,
  GRID_WIDTH,
  Keys,
  CANVAS_WIDTH,
  tsImageUrl,
} from "../helpers/constants";

export class Player {
  private pos: Coordinates = { row: 0, col: 0 };
  private width: number;
  private moving: Direction = "none";
  constructor() {
    this.width = CANVAS_WIDTH / GRID_WIDTH;
  }

  update(keys: Keys, canMove: Record<Direction, boolean>) {
    Object.entries(canMove).map(([key, value]) => {
      if (keys.direction === key && this.moving !== key && value) {
        this.movePlayer(key);
        this.moving = key;
      }
    });

    Object.entries(canMove).map(([key]) => {
      if (this.moving === key && keys.direction !== key) {
        this.moving = "none";
      }
    });
  }

  movePlayer(direction: Direction) {
    if (direction === "up" && this.pos.col > 0) this.pos.col--;
    if (direction === "down" && this.pos.col < GRID_HEIGHT - 1) this.pos.col++;
    if (direction === "left" && this.pos.row > 0) this.pos.row--;
    if (direction === "right" && this.pos.row < GRID_WIDTH - 1) this.pos.row++;
  }

  draw(context: CanvasRenderingContext2D) {
    const lineWidth = this.width / 10;
    const additional = lineWidth;
    const image = new Image(
      this.width - lineWidth - 10,
      this.width - lineWidth - 10
    );
    image.src = tsImageUrl;
    context.drawImage(
      image,
      this.pos.row * this.width + additional,
      this.pos.col * this.width + additional,
      this.width - additional * 2,
      this.width - additional * 2
    );
  }

  get getPos(): Coordinates {
    return this.pos;
  }
}
