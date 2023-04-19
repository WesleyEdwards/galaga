import { Coordinates } from "../helpers/types";

export class BgParticle {
  public pos: Coordinates;
  public radius: number;
  public color: string;
  private dy: number;

  constructor(pos: Coordinates, color: string) {
    this.pos = pos;
    this.radius = Math.random() * 2;
    this.color = color;
    this.dy = 0.1;
  }

  update(elapsedTime: number) {
    this.pos.y += this.dy * elapsedTime;
    if (this.pos.y > 600) this.pos.y = 0;
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.beginPath();
    context.rect(this.pos.x, this.pos.y, this.radius, this.radius);
    context.fillStyle = this.color;
    context.fill();
    context.restore();
  }
}
