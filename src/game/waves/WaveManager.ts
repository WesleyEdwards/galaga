import { MAX_WAVES } from "../helpers/constants";
import { OpponentManager } from "../opponents/OpponentManager";
import {
  waveOneStageOne,
  waveTwoStageOne,
  waveThreeStageOne,
  waveFourStageOne,
  waveFiveStageOne,
  waveOneStageTwo,
  waveTwoStageTwo,
  waveThreeStageTwo,
  waveFourStageTwo,
  waveFiveStageTwo,
} from "./AllWaves";
import { wave } from "./Wave";

export class WaveManager {
  currentWave: number;
  allWaves: wave[];
  activeWaves: wave[] = [];
  stageIndex: number;
  stageElapsedTime: number;
  opponentManager: OpponentManager;
  isBreathing: boolean = false;
  displayStageNumber: boolean = true;

  constructor(opponentManager: OpponentManager) {
    this.opponentManager = opponentManager;
    this.stageIndex = 0;
    this.stageElapsedTime = 0;
    this.allWaves = generateWaves(opponentManager, this.stageIndex);
    this.currentWave = 0;
  }

  update(elapsedTime: number) {
    this.stageElapsedTime += elapsedTime;
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

function generateWaves(
  opponentManager: OpponentManager,
  index: number
): wave[] {
  const waveOne1 = new wave(waveOneStageOne, opponentManager, 0);
  const waveTwo1 = new wave(waveTwoStageOne, opponentManager, 2500);
  const waveThree1 = new wave(waveThreeStageOne, opponentManager, 6000);
  const waveFour1 = new wave(waveFourStageOne, opponentManager, 10_000);
  const waveFive1 = new wave(waveFiveStageOne, opponentManager, 14_000);

  const waveOne2 = new wave(waveOneStageTwo, opponentManager, 0);
  const waveTwo2 = new wave(waveTwoStageTwo, opponentManager, 2500);
  const waveThree2 = new wave(waveThreeStageTwo, opponentManager, 6000);
  const waveFour2 = new wave(waveFourStageTwo, opponentManager, 10_000);
  const waveFive2 = new wave(waveFiveStageTwo, opponentManager, 14_000);

  const wavesByStage = [
    [waveOne1, waveTwo1, waveThree1, waveFour1, waveFive1],
    [waveOne2, waveTwo2, waveThree2, waveFour2, waveFive2],
  ];

  return wavesByStage[index];
}
