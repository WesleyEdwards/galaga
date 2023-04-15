import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../helpers/constants";
import { Opponent } from "./Opponent";

export class OpponentManager {
  opponents: Opponent[];
  context: CanvasRenderingContext2D;
  private beeTimer = 0;
  private beeCount = 1;
  private beePosX = 175;
  private beePosY = 100;

  private butterflyTimer = 0;
  private butterflyCount = 1;
  private butterflyPosX = 375;
  private butterflyPosY = 100;
  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
    this.opponents = [
      new Opponent(
        context,
        { x: (CANVAS_WIDTH / 500) * 300, y: 0 },
        { x: this.beePosX - 50, y: this.beePosY},
        "bee"
      ),
      new Opponent(
        context,
        { x: (CANVAS_WIDTH / 500) * 200, y: 0 },
        { x: this.butterflyPosX - 50, y: this.butterflyPosY},
        "butterfly"
      ),
      new Opponent(
        context,
        { x: CANVAS_WIDTH * 0.75, y: CANVAS_HEIGHT / 4 },
        { x: this.beePosX, y: this.beePosY},
        "bossGalaga"
      ),
    ];
  }

  update(elapsedTime: number) {
    this.beeTimer += elapsedTime;
    if (this.beeTimer > 250 && this.beeCount < 6) {
      this.beeCount++;
      this.opponents.push(
        new Opponent(
          this.context,
          { x: (CANVAS_WIDTH / 500) * 300, y: 0 },
          { x: this.beePosX, y: this.beePosY},
          "bee"
        )
      );
      this.beePosX += 50;
      if (this.beeCount == 3) {
        this.beePosX = 125;
        this.beePosY = 150;
      }
      this.beeTimer = 0;
    }

    this.butterflyTimer += elapsedTime;
    if (this.butterflyTimer > 250 && this.butterflyCount < 6) {
      this.butterflyCount++;
      this.opponents.push(
        new Opponent(
          this.context,
          { x: (CANVAS_WIDTH / 500) * 200, y: 0 },
          { x: this.butterflyPosX, y: this.butterflyPosY},
          "butterfly"
        )
      );
      this.butterflyPosX += 50;
      if (this.butterflyCount == 3) {
        this.butterflyPosX = 325;
        this.butterflyPosY = 150;
      }
      this.butterflyTimer = 0;
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
