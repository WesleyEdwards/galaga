import { Direction } from "./helpers/types";

export class AttractManager {
  private totalTime: number = 0;

  update(elapsedTime: number) {
    this.totalTime += elapsedTime;
  }

  get currentMoving(): Direction {
    if (this.totalTime < 500) return "right";
    if (this.totalTime < 1000) return "left";
    return "none";
  }
}
