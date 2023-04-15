import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../helpers/constants";
import { Opponent } from "./Opponent";

export class OpponentManager {
  opponents: Opponent[];
  context: CanvasRenderingContext2D;
  private beeTimer = 0;
  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
    this.opponents = [
      new Opponent(
        context,
        { x: (CANVAS_WIDTH / 500) * 300, y: 0 },
        "bee"
      ),
      new Opponent(
        context,
        { x: CANVAS_WIDTH * 0.5, y: CANVAS_HEIGHT / 4 },
        "butterfly"
      ),
      new Opponent(
        context,
        { x: CANVAS_WIDTH * 0.75, y: CANVAS_HEIGHT / 4 },
        "bossGalaga"
      ),
    ];
  }

  update(elapsedTime: number) {
    // this.beeTimer += elapsedTime;
    if (this.beeTimer > 250) {
      this.opponents.push(
        new Opponent(
          this.context,
          { x: (CANVAS_WIDTH / 500) * 300, y: 0 },
          "bee"
        )
      );
      this.beeTimer = 0;
    }
    this.opponents.forEach((opp) => {
      opp.update(elapsedTime);
    });
  }

  draw() {
    this.opponents.forEach((opp) => {
      opp.draw();
    });
  }
}
