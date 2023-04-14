type SpriteInfo = {
  srcX: number;
  srcY: number;
  srcWidth: number;
  srcHeight: number;
  gap: number;
  columns: number;
};

export class DrawManager {
  image: HTMLImageElement;
  context: CanvasRenderingContext2D;
  constructor(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    private spriteInfo: SpriteInfo
  ) {
    this.image = new Image(width, height);
    this.image.src = "./assets/galaga-sprites.png";
    this.context = context;
  }

  draw(x: number, y: number, column: number, outline?: boolean) {
    this.context.drawImage(
      this.image,
      this.spriteInfo.srcX +
        (column % this.spriteInfo.columns) *
          (this.spriteInfo.srcWidth + this.spriteInfo.gap),
      this.spriteInfo.srcY,
      this.spriteInfo.srcWidth,
      this.spriteInfo.srcHeight,
      x,
      y,
      this.image.width,
      this.image.height
    );

    if (outline) {
      this.context.strokeStyle = "red";
      this.context.lineWidth = 2;
      this.context.strokeRect(x, y, this.image.width, this.image.height);
    }
  }
}
