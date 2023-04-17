import { entranceInterval } from "../helpers/constants";
import { Opponent } from "./Opponent";
import {
  beeStartW1S1,
  beeEndW1S1,
  butterflyStartW1S1,
  butterflyEndW1S1,
} from "./stageOne/waveOneInfo";
import {
  butterflyStartW2S1,
  butterflyEndW2S1,
  bossGalagaStartW2S1,
  bossGalagaEndW2S1,
} from "./stageOne/waveTwoInfo";

export class OpponentManager {
  opponents: Opponent[] = [];
  context: CanvasRenderingContext2D;

  private spriteTimer = 0;
  private spriteIndex = 0;

  private beeTimer = 0;
  private beeCount = 0;

  private butterflyTimer = 0;
  private butterflyCount = 0;

  private bossGalagaTimer = 0;
  private bossGalagaCount = 0;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  update(elapsedTime: number) {
    this.beeTimer += elapsedTime;
    this.butterflyTimer += elapsedTime;

    if (
      this.beeTimer > entranceInterval &&
      this.beeCount < beeEndW1S1.length
    ) {
      this.opponents.push(
        new Opponent(
          this.context,
          { ...beeStartW1S1 },
          beeEndW1S1[this.beeCount],
          "bee"
        )
      );
      this.beeTimer = 0;
      this.beeCount++;
    }

    if (
      this.butterflyTimer > entranceInterval &&
      (this.butterflyCount < butterflyEndW1S1.length ||
        this.bossGalagaCount < bossGalagaEndW2S1.length)
    ) {
      if (this.bossGalagaCount == this.butterflyCount) {
        this.opponents.push(
          new Opponent(
            this.context,
            { ...bossGalagaStartW2S1 },
            bossGalagaEndW2S1[this.bossGalagaCount],
            "bossGalaga"
          )
        );
        this.bossGalagaCount++;
        this.butterflyTimer = 0;
      } else {
        this.opponents.push(
          new Opponent(
            this.context,
            { ...butterflyStartW2S1 },
            butterflyEndW2S1[this.butterflyCount],
            "butterfly"
          )
        );
        this.butterflyCount++;
        this.butterflyTimer = 0;
      }
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
