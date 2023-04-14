import { SpriteInfo } from "./types";

export class DrawManager {
  image: HTMLImageElement;
  context: CanvasRenderingContext2D;
  constructor(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    private spriteInfo: SpriteInfo,
    private spriteIndex: number = 0
  ) {
    this.image = new Image(width, height);
    this.image.src = "./assets/galaga-sprites.png";
    this.context = context;
  }

  draw(x: number, y: number) {
    this.context.drawImage(
      this.image,
      this.spriteInfo.srcX +
        this.spriteIndex * (this.spriteInfo.srcWidth + this.spriteInfo.gap),
      this.spriteInfo.srcY,
      this.spriteInfo.srcWidth,
      this.spriteInfo.srcHeight,
      x,
      y,
      this.image.width,
      this.image.height
    );

    if (import.meta.env.VITE_RED_OUTLINE === "true") {
      this.context.strokeStyle = "red";
      this.context.lineWidth = 2;
      this.context.strokeRect(x, y, this.image.width, this.image.height);
    }
  }

  incrementSpriteColumn() {
    this.spriteIndex < this.spriteInfo.columns - 1
      ? this.spriteIndex++
      : (this.spriteIndex = 0);
  }
}
