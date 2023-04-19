import { Coordinates } from "../helpers/types";

export class Particle {
  public pos: Coordinates;
  public radius: number;
  public color: string;
  public opacity: number;
  public isDead: boolean;
  private dx: number;
  private dy: number;
  private life: number;
  private maxLife: number;

  constructor(pos: Coordinates, color: string) {
    this.pos = pos;
    this.radius = 2;
    this.color = color;
    this.opacity = 1;
    this.isDead = false;
    this.dx = (Math.random() * 2 - 1) / 7;
    this.dy = (Math.random() * 2 - 1) / 7;
    this.life = 0;
    this.maxLife = Math.random() * 1000;
  }

  update(elapsedTime: number) {
    this.pos.x += this.dx * elapsedTime;
    this.pos.y += this.dy * elapsedTime;
    this.life += elapsedTime;
    if (this.life > this.maxLife) {
      this.isDead = true;
    }
    this.opacity = 1 - this.life / this.maxLife;
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.globalAlpha = this.opacity;
    context.beginPath();
    context.rect(this.pos.x, this.pos.y, this.radius, this.radius);
    context.fillStyle = this.color;
    context.fill();
    context.restore();
  }
}
