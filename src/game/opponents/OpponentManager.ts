import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../helpers/constants";
import { Opponent } from "./Opponent";

export class OpponentManager {
  opponents: Opponent[];
  constructor(context: CanvasRenderingContext2D) {
    this.opponents = [
      new Opponent(
        context,
        { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 4 },
        "bee"
      ),
    ];
  }

  update(elapsedTime: number) {
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
