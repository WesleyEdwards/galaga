import { DrawManager } from "../helpers/DrawManager";
import { OPPONENT_WIDTH } from "../helpers/constants";
import { Coordinates, OpponentType } from "../helpers/types";
import { opponentSprites } from "./opponentStats";

export class Opponent {
  pos: Coordinates;
  private drawManager: DrawManager;
  private spriteTimer = 0;
  constructor(
    context: CanvasRenderingContext2D,
    pos: Coordinates,
    oppType: OpponentType
  ) {
    this.pos = pos;
    this.drawManager = new DrawManager(
      context,
      OPPONENT_WIDTH,
      OPPONENT_WIDTH,
      opponentSprites[oppType][0]
    );
  }
  update(timeStamp: number) {}
  draw() {
    this.drawManager.draw(this.pos.x, this.pos.y);
  }
  get rightX() {
    return this.pos.x + OPPONENT_WIDTH;
  }
}
