import { CANVAS_HEIGHT, PLAYER_TOP } from "../helpers/constants";
import { Coordinates, OpponentType } from "../helpers/types";
import { initialBgParticles, oppColors } from "../helpers/utils";
import { Opponent } from "../opponents/Opponent";
import { BgParticle } from "./BgParticle";
import { Particle } from "./Particle";

export class ParticleManager {
  private particles: Particle[] = [];
  private bgParticles: BgParticle[] = initialBgParticles;
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
    for (let i = 0; i < this.bgParticles.length; i++) {
      this.bgParticles[i].update(elapsedTime);
    }
  }

  draw() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].draw(this.context);
    }
    for (let i = 0; i < this.bgParticles.length; i++) {
      this.bgParticles[i].draw(this.context);
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

  playerDeath(centerX: number) {
    for (let i = 0; i < 40; i++) {
      const particle = new Particle(
        { x: centerX, y: CANVAS_HEIGHT - PLAYER_TOP },
        "white"
      );
      this.particles.push(particle);
    }
  }
}
