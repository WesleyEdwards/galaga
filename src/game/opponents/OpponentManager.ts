import { Opponent } from "./Opponent";

export class OpponentManager {
  opponents: Opponent[] = [];
  context: CanvasRenderingContext2D;

  private spriteTimer = 0;
  private spriteIndex = 0;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  addOpponent(opponent: Opponent) {
    this.opponents.push(opponent);
  }

  update(elapsedTime: number) {
    for (let i = 0; i < this.opponents.length; i++) {
      // console.log(`Opponent ${i} position: ${this.opponents[i].pos.x}, ${this.opponents[i].pos.y}`);
    }
    
    this.spriteTimer += elapsedTime;
    if (this.spriteTimer >= 500) {
      this.spriteIndex = (this.spriteIndex + 1) % 2;
      this.spriteTimer = 0;
    }

    this.opponents.forEach((opp) => {
      opp.update(elapsedTime);
    });
  }

  draw() {
    this.opponents.forEach((opp) => {
      opp.draw(this.spriteIndex);
    });
  }
}
