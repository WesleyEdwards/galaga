import { SpriteInfo } from "./types";

export class DrawManager {
  image: HTMLImageElement;
  context: CanvasRenderingContext2D;
  constructor(
    context: CanvasRenderingContext2D,
    private width: number,
    private height: number,
    private spriteInfo: SpriteInfo
  ) {
    this.image = new Image();
    this.image.src = "./assets/galaga-sprites.png";
    this.image.width = width;
    this.image.height = height;
    this.context = context;
  }

  draw(x: number, y: number, rotation=0) {
    this.context.save();

    this.context.translate(x + this.image.width / 2, y + this.image.height / 2);
    this.context.rotate(rotation);
    this.context.translate(-(x + this.image.width / 2), -(y + this.image.height / 2));
    this.context.drawImage(
      this.image,
      this.spriteInfo.srcX,
      this.spriteInfo.srcY,
      this.spriteInfo.srcWidth,
      this.spriteInfo.srcHeight,
      x,
      y,
      this.width,
      this.height
    );
    this.context.restore();


    if (import.meta.env.VITE_RED_OUTLINE === "true") {
      this.context.strokeStyle = "red";
      this.context.lineWidth = 2;
      this.context.strokeRect(x, y, this.image.width, this.image.height);
    }

  }
}