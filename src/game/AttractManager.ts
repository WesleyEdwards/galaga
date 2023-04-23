import { Direction } from "./helpers/types";
import { Opponent } from "./opponents/Opponent";
import { OpponentManager } from "./opponents/OpponentManager";

export class AttractManager {
  private totalTime: number = 0;
  private switchDirTimer: number = 0;
  direction: Direction = "none";
  constructor(private opponentMan: OpponentManager) {}

  update(elapsedTime: number, playerCenter?: number) {
    if (!playerCenter) return "none";
    this.totalTime += elapsedTime;
    this.switchDirTimer += elapsedTime;
    this.checkCurrentMoving(playerCenter);
  }

  private checkCurrentMoving(playerCenter: number) {
    if (this.totalTime < 5000) return;
    this.findDirection(playerCenter);
  }

  private findDirection(playerCenter: number) {
    if (
      this.opponentMan.opponents.some((opp) =>
        this.inLineWithPlayer(playerCenter, opp)
      )
    ) {
      this.direction = "none";
      this.switchDirTimer = 0;
      return;
    }
    if (this.switchDirTimer < 100) {
      return;
    }
    this.switchDirTimer = 0;
    this.direction = this.placeWithMoreOpponents(playerCenter);
  }

  private inLineWithPlayer(playerCenter: number, opponent: Opponent): boolean {
    return Math.abs(playerCenter - opponent.centerX) < 2;
  }

  private placeWithMoreOpponents(playerCenter: number): Direction {
    const left = this.opponentMan.opponents.filter(
      (opp) => opp.centerX < playerCenter
    ).length;
    const right = this.opponentMan.opponents.filter(
      (opp) => opp.centerX > playerCenter
    ).length;
    if (left > right) return "left";
    return "right";
  }
}
