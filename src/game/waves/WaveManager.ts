import { OpponentBulletManager } from "../bullets/OpponentBulletManager";
import { MAX_WAVES } from "../helpers/constants";
import { OpponentManager } from "../opponents/OpponentManager";
import { generateWaves } from "./AllWaves";
import { wave } from "./Wave";

export class WaveManager {
  currentWave: number;
  allWaves: wave[];
  activeWaves: wave[] = [];
  stageIndex: number;
  stageElapsedTime: number;
  opponentManager: OpponentManager;
  opponentBulletManager: OpponentBulletManager;
  isBreathing: boolean = false;
  displayStageNumber: boolean = true;

  constructor(opponentManager: OpponentManager, opponentBulletManager: OpponentBulletManager) {
    this.opponentManager = opponentManager;
    this.opponentBulletManager = opponentBulletManager;
    this.stageIndex = 0;
    this.stageElapsedTime = 0;
    this.allWaves = generateWaves(opponentManager, this.stageIndex);
    this.currentWave = 0;
  }

  update(elapsedTime: number) {
    this.stageElapsedTime += elapsedTime;
    if (this.stageElapsedTime >= 20_000 && this.opponentManager.attackerCount < 2) {
      const attacker = this.opponentManager.chooseAttacker();
      if (attacker) {
        this.opponentBulletManager.update(elapsedTime, attacker)
      }
    } else {
      this.opponentBulletManager.update(elapsedTime);
    }
    //Begin next stage
    if (
      this.opponentManager.opponents.length === 0 &&
      this.currentWave == this.allWaves.length
    ) {
      this.displayStageNumber = true;
      this.stageIndex++;
      if (this.stageIndex > MAX_WAVES - 1) this.stageIndex = 0;
      this.currentWave = 0;
      this.allWaves = generateWaves(this.opponentManager, this.stageIndex);
      this.activeWaves = [];
      this.stageElapsedTime = 0;
      this.isBreathing = false;
      this.opponentManager.resetState();
    }

    //TODO: If a new stage just began, show stage number
    if (this.displayStageNumber) {
      if (this.stageElapsedTime > 2000) {
        this.displayStageNumber = false;
        this.stageElapsedTime = 0;
      } else {
        // console.log(`Stage ${this.stageIndex + 1}`);
      }
    } else {
      for (let i = this.currentWave; i < this.allWaves.length; i++) {
        if (this.stageElapsedTime > this.allWaves[i].startTime) {
          this.activeWaves.push(this.allWaves[i]);
          this.currentWave++;
        }
      }

      for (let i = 0; i < this.activeWaves.length; i++) {
        this.activeWaves[i].update(elapsedTime);
      }
    }

    //TODO: If last enemy is in place, start breathing
    if (
      !this.isBreathing &&
      this.currentWave == this.allWaves.length &&
      this.activeWaves[this.currentWave - 1].opponentIndex[0] ==
        this.activeWaves[this.currentWave - 1].trails[0].opponentSequence
          .length &&
      this.opponentManager.lastOneInPlace()
    ) {
      this.isBreathing = true;
      this.opponentManager.startBreathing();
    }
  }
}
