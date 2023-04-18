import { Opponent } from "./Opponent";

export class OpponentManager {
  opponents: Opponent[] = [];
  context: CanvasRenderingContext2D;

  private spriteTimer = 0;
  private spriteIndex = 0;

  private breathInit = 0;
  private breathTimer = 0;
  private breathFlag = false;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  addOpponent(opponent: Opponent) {
    this.opponents.push(opponent);
  }

  update(elapsedTime: number) {
    if (this.breathInit < 4_000 && !this.breathFlag) this.breathInit += elapsedTime;
    else {
      if (!this.breathFlag) {
        this.opponents.forEach((opp) => {
          opp.state = "breathe-out";
        });
      }
      this.breathFlag = true;
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
