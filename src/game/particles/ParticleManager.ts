import { Coordinates, OpponentType } from "../helpers/types";
import { Opponent } from "../opponents/Opponent";
import { Particle } from "./Particle";

const oppColors: Record<OpponentType, string[]> = {
  bee: ["#ffff00", "#0068de", "#ff0000"],
  butterfly: ["#ff0000", "#0068de", "#dedede"],
  bossGalaga: ["#0068de", "#9700de", "#ff00de"],
};

export class ParticleManager {
  private particles: Particle[] = [];
  private context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  update(elapsedTime: number) {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update(elapsedTime);
      if (this.particles[i].isDead) {
        this.particles.splice(i, 1);
        i--;
      }
    }
  }

  draw() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].draw(this.context);
    }
  }

  opponentDeath(opponent: Opponent) {
    for (let i = 0; i < 40; i++) {
      const color =
        oppColors[opponent.type][
          Math.floor(Math.random() * oppColors[opponent.type].length)
        ];
      const particle = new Particle(opponent.center, color);
      this.particles.push(particle);
    }
  }

  playerDeath(pos: Coordinates) {
    for (let i = 0; i < 40; i++) {
      const particle = new Particle(pos, "#ffffff");
      this.particles.push(particle);
    }
  }
}
