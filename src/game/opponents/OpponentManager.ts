import { entranceInterval } from "../helpers/constants";
import { Opponent } from "./Opponent";
import {
  waveOneBeeEnd,
  waveOneBeeStart,
  waveOneButterflyEnd,
  waveOneButterflyStart,
} from "./waveOneInfo";

export class OpponentManager {
  opponents: Opponent[] = [];
  context: CanvasRenderingContext2D;
  private beeTimer = 0;
  private beeCount = 0;

  private butterflyTimer = 0;
  private butterflyCount = 0;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  update(elapsedTime: number) {
    this.beeTimer += elapsedTime;
    this.butterflyTimer += elapsedTime;

    if (
      this.beeTimer > entranceInterval.wave1 &&
      this.beeCount < waveOneBeeEnd.length
    ) {
      this.opponents.push(
        new Opponent(
          this.context,
          { ...waveOneBeeStart },
          waveOneBeeEnd[this.beeCount],
          "bee"
        )
      );
      this.beeTimer = 0;
      this.beeCount++;
    }

    if (
      this.butterflyTimer > entranceInterval.wave1 &&
      this.butterflyCount < waveOneButterflyEnd.length
    ) {
      this.opponents.push(
        new Opponent(
          this.context,
          { ...waveOneButterflyStart },
          waveOneButterflyEnd[this.butterflyCount],
          "butterfly"
        )
      );
      this.butterflyCount++;
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
