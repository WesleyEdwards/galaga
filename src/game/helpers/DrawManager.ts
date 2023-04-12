export class DrawManager {
  image: HTMLImageElement;
  context: CanvasRenderingContext2D;
  constructor(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    src: string
  ) {
    this.image = new Image(width, height);
    this.image.src = src;
    this.context = context;
  }

  draw(x: number, y: number, outline?: boolean) {
    this.context.drawImage(
      this.image,
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
